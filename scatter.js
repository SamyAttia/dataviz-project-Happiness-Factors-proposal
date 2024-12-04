/**
 * Renders a scatter plot for given X and Y factors inside the specified container.
 *
 * @param {string} factorX - The name of the factor for the X-axis.
 * @param {string} factorY - The name of the factor for the Y-axis.
 * @param {HTMLElement} container - The DOM element to render the scatter plot into.
 * @param {Array} data - The dataset containing the factors and their values.
 */
export function renderScatterPlot(
  factorX,
  factorY,
  container,
  data,
) {
  // Define dimensions and margins for the scatter plot
  const width = 200;
  const height = 150;
  const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 40,
  };

  // Create an SVG container for the scatter plot
  const scatterSvg = d3
    .select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr(
      'transform',
      `translate(${margin.left},${margin.top})`,
    );

  // Prepare the data for plotting
  const scatterData = data
    .map((d) => ({
      country: d.Country,
      x: d[factorX],
      y: d[factorY],
    }))
    .filter((d) => !isNaN(d.x) && !isNaN(d.y)); // Filter out invalid data points

  // Define the X-axis scale
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(scatterData, (d) => d.x))
    .nice() // Ensure clean rounding for axis ticks
    .range([0, width]);

  // Define the Y-axis scale
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(scatterData, (d) => d.y))
    .nice()
    .range([height, 0]);

  // Plot the data points as circles
  scatterSvg
    .selectAll('circle')
    .data(scatterData)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d.x))
    .attr('cy', (d) => yScale(d.y))
    .attr('r', 5) // Circle radius
    .style('fill', '#69b3a2') // Point color
    .style('opacity', 0.8); // Transparency for overlapping points

  // Add the X-axis
  scatterSvg
    .append('g')
    .attr('transform', `translate(0,${height})`) // Position at the bottom
    .call(d3.axisBottom(xScale).ticks(5)) // X-axis ticks
    .selectAll('text')
    .style('fill', '#f9d625') // Axis text color
    .style('font-size', '10px'); // Axis text size

  // Add label for the X-axis
  scatterSvg
    .append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 5)
    .attr('text-anchor', 'middle') // Center align the text
    .style('fill', '#f9d625') // Label color
    .style('font-size', '10px')
    .text(factorX);

  // Add the Y-axis
  scatterSvg
    .append('g')
    .call(d3.axisLeft(yScale).ticks(5)) // Y-axis ticks
    .selectAll('text')
    .style('fill', '#f9d625') // Axis text color
    .style('font-size', '10px'); // Axis text size

  // Add label for the Y-axis
  scatterSvg
    .append('text')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 10)
    .attr('text-anchor', 'middle') // Center align the text
    .attr('transform', 'rotate(-90)') // Rotate the label for the Y-axis
    .style('fill', '#f9d625') // Label color
    .style('font-size', '10px')
    .text(factorY);
}  