export function renderMap(
  svg,
  projection,
  geoPath,
  countriesData,
  countries110m,
  countries50m,
  updateFilteredCircles,
) {
  const initialScale = projection.scale();

  const circleRadiusScale = d3
    .scaleSqrt()
    .domain([0, 10])
    .range([0, 20]);

  let currentFilter = null;
  let moving = false;

  const defs = svg.append('defs');

  // Glow filter for hover effects
  const glowFilter = defs
    .append('filter')
    .attr('id', 'glow');
  glowFilter
    .append('feGaussianBlur')
    .attr('stdDeviation', '8')
    .attr('result', 'coloredBlur');
  glowFilter
    .append('feMerge')
    .selectAll('feMergeNode')
    .data(['coloredBlur', 'SourceGraphic'])
    .enter()
    .append('feMergeNode')
    .attr('in', (d) => d);

  // Snowy edge glow filter for the ocean background
  const oceanGlowFilter = defs
    .append('filter')
    .attr('id', 'ocean-glow')
    .attr('x', '-50%') // Expand filter to cover edges
    .attr('y', '-50%')
    .attr('width', '200%')
    .attr('height', '200%');
  oceanGlowFilter
    .append('feGaussianBlur')
    .attr('in', 'SourceAlpha') // Blur only the edge of the shape
    .attr('stdDeviation', '15')
    .attr('result', 'blurred');
  oceanGlowFilter
    .append('feColorMatrix')
    .attr('type', 'matrix')
    .attr(
      'values',
      '0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0',
    ) // Pure white with 50% opacity
    .attr('result', 'whiteGlow');
  oceanGlowFilter
    .append('feMerge')
    .append('feMergeNode')
    .attr('in', 'whiteGlow');

  const shadowFilter = defs
    .append('filter')
    .attr('id', 'snowy-shadow');
  shadowFilter
    .append('feDropShadow')
    .attr('dx', '0')
    .attr('dy', '0')
    .attr('stdDeviation', '1') // Blur amount for the glow
    .attr('flood-color', '#ffffff') // Glow color
    .attr('flood-opacity', '0.8'); // Glow opacity

  // Gradient for the globe background (ocean)
  const oceanGradient = defs
    .append('radialGradient')
    .attr('id', 'ocean-gradient')
    .attr('cx', '50%')
    .attr('cy', '50%')
    .attr('r', '50%')
    .attr('fx', '50%')
    .attr('fy', '50%');
  oceanGradient
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#00416d'); // Deep ocean blue at the center
  oceanGradient
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#001f3f'); // Darker blue at the edges

  // Gradient for continents background
  const continentGradient = defs
    .append('linearGradient')
    .attr('id', 'continent-gradient')
    .attr('x1', '0%')
    .attr('x2', '0%')
    .attr('y1', '0%')
    .attr('y2', '100%');
  continentGradient
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#004953'); // Dark green for the top
  continentGradient
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#000000'); // Black for the bottom

  // Add the globe background with the ocean gradient
  const globeBackground = svg
    .append('path')
    .datum({ type: 'Sphere' }) // Define a sphere for the entire globe
    .attr('class', 'globe-background')
    .attr('d', geoPath) // Use the geoPath generator
    .attr('fill', 'url(#ocean-gradient)') // Apply the ocean gradient
    .attr('stroke', 'none'); // No stroke for the main circle

  // Add the glowing edge around the ocean
  const globeGlow = svg
    .append('path')
    .datum({ type: 'Sphere' })
    .attr('class', 'globe-glow')
    .attr('d', geoPath)
    .attr('fill', 'none') // No fill to keep it transparent
    .attr('stroke', '#ffffff') // White for the glow
    .attr('stroke-width', 20) // Width of the glowing edge
    .attr('stroke-opacity', 0.5) // Slightly transparent glow
    .attr('filter', 'url(#ocean-glow)'); // Apply the glow filter

  // Main render function for the map and circles
  function render(boundaryData) {
    svg.selectAll('g.countries').remove();

    const countriesG = svg
      .append('g')
      .attr('class', 'countries');

    // Render the country boundaries with gradient fill
    countriesG
      .append('path')
      .datum(boundaryData)
      .attr('d', geoPath)
      .attr('stroke', '#FF4500') // Orange-red for boundaries
      .attr('stroke-width', 0.5)
      .attr('fill', 'url(#continent-gradient)'); // Gradient fill for continents

    const point = { type: 'Point', coordinates: [0, 0] };
    countriesData.forEach((d) => {
      point.coordinates[0] = d.longitude;
      point.coordinates[1] = d.latitude;
      d.projected = geoPath(point)
        ? projection(point.coordinates)
        : null;
    });

    const k = Math.sqrt(projection.scale() / initialScale);

    const circles = countriesG
      .selectAll('circle')
      .data(
        countriesData.filter(
          (d) => d.projected && d.happinessScore,
        ),
      );

    circles
      .enter()
      .append('circle')
      .attr('class', 'country-circle')
      .attr('cx', (d) => d.projected[0])
      .attr('cy', (d) => d.projected[1])
      .attr('fill', (d) => {
        if (d.happinessScore > 7.0) return '#88c0d0';
        if (d.happinessScore >= 6.0) return '#81a1c1';
        if (d.happinessScore >= 5.0) return '#5e81ac';
        return '#b48ead';
      })
      .attr('fill-opacity', 0.7)
      .attr('stroke-width', 1.5)
      .attr(
        'r',
        (d) => circleRadiusScale(d.happinessScore) * k,
      )
      .style('filter', 'url(#snowy-shadow)')
      .on('mouseover', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('fill', '#ffffff')
          .attr(
            'r',
            circleRadiusScale(d.happinessScore) * k * 1.3,
          );
        d3.select('.map-tooltip')
          .html(
            `<strong>${d.Country || 'Unknown'}</strong><br>
            Rank: ${d.rank || 'N/A'}<br>
            Happiness Score: ${d.happinessScore || 'N/A'}`,
          )
          .style('visibility', 'visible')
          .style('opacity', 1);
      })
      .on('mousemove', (event) => {
        d3.select('.map-tooltip')
          .style('top', `${event.pageY - 10}px`)
          .style('left', `${event.pageX + 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('fill', (d) => {
            if (d.happinessScore > 7.0) return '#88c0d0';
            if (d.happinessScore >= 6.0) return '#81a1c1';
            if (d.happinessScore >= 5.0) return '#5e81ac';
            return '#b48ead';
          })
          .attr(
            'r',
            (d) => circleRadiusScale(d.happinessScore) * k,
          );
        d3.select('.map-tooltip')
          .style('visibility', 'hidden')
          .style('opacity', 0);
      });

    circles.exit().remove();

    // Reapply active filters
    if (currentFilter) {
      updateFilteredCircles(currentFilter);
    }
  }

  function updateGlobe() {
    globeBackground.attr('d', geoPath); // Update the globe background during zoom/drag
  }

  render(countries50m);

  let rotate0, coords0;
  const coords = (event) =>
    projection
      .rotate(rotate0)
      .invert(d3.pointer(event, svg.node()));

  const zoom = d3
    .zoom()
    .scaleExtent([0.5, 8])
    .on('zoom', (event) => {
      // Update the projection scale
      projection.scale(initialScale * event.transform.k);

      // Update the globe background (ocean)
      globeBackground.attr('d', geoPath);

      // Dynamically update the stroke width of the glow
      const glowStrokeWidth = 20 / event.transform.k; // Adjust glow size based on zoom
      globeGlow
        .attr('d', geoPath)
        .attr('stroke-width', glowStrokeWidth); // Dynamically update stroke width

      // Render the countries and circles
      render(moving ? countries110m : countries50m);
    })
    .on('start', () => {
      moving = true;
      render(countries110m);
    })
    .on('end', () => {
      moving = false;
      render(countries50m);
    });

  const drag = d3
    .drag()
    .on('start', (event) => {
      rotate0 = projection.rotate();
      coords0 = coords(event);
      moving = true;
      render(countries110m);
    })
    .on('drag', (event) => {
      const coords1 = coords(event);
      if (coords0 && coords1) {
        projection.rotate([
          rotate0[0] + coords1[0] - coords0[0],
          rotate0[1] + coords1[1] - coords0[1],
        ]);
      }
      updateGlobe(); // Ensure the globe background rotates
      render(countries110m);
    })
    .on('end', () => {
      moving = false;
      render(countries50m);
    });

  svg.call(drag).call(zoom);

  return {
    applyFilter: (filter) => {
      currentFilter = filter;
      updateFilteredCircles(currentFilter);
      render(moving ? countries110m : countries50m);
    },
    resetFilter: () => {
      currentFilter = null;
      updateFilteredCircles(null);
      render(moving ? countries110m : countries50m);
    },
  };
}
