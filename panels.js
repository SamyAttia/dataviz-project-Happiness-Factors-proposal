import * as d3 from 'd3';

/**
 * Renders the left and right panels with the top 5 and bottom 5 happiest countries.
 *
 * @param {Array} data - Array of country data with happiness metrics.
 * @param {Object} flagURLs - Object mapping country names to their flag image URLs.
 */
export function renderCountryPanels(data, flagURLs) {
  // Extract the top 5 and bottom 5 happiest countries
  const top5 = data.slice(0, 5);
  const bottom5 = data.slice(-5);

  /**
   * Renders a panel (left or right) with a list of countries.
   *
   * @param {Object} panel - D3 selection of the panel container.
   * @param {Array} countries - Array of country data to display.
   * @param {String} panelType - Type of panel ('left' or 'right') for tooltip positioning.
   */
  const renderPanel = (panel, countries, panelType) => {
    panel.selectAll('*').remove(); // Clear existing content

    countries.forEach((country) => {
      const countryDiv = panel
        .append('div')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('position', 'relative')
        .style('margin-bottom', '15px');

      const circleContainer = countryDiv
        .append('div')
        .style('position', 'relative')
        .style('width', '70px')
        .style('height', '70px')
        .style('border-radius', '50%')
        .style('background', '#141e30')
        .style('overflow', 'hidden')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('cursor', 'pointer')
        .style(
          'box-shadow',
          '0px 4px 10px rgba(255, 255, 255, 0.2), 0px 0px 10px 2px rgba(249, 214, 37, 0.5)',
        )
        .style('transition', 'transform 0.3s')
        .on('mouseover', (event) => {
          circleContainer.style('transform', 'scale(1.1)');
          flagImage.style('visibility', 'hidden');
          countryName.style('visibility', 'visible');
          showTooltip(event, country, panelType);
        })
        .on('mouseout', () => {
          circleContainer.style('transform', 'scale(1)');
          flagImage.style('visibility', 'visible');
          countryName.style('visibility', 'hidden');
          sidePanelTooltip.style('visibility', 'hidden');
        });

      const countryName = circleContainer
        .append('span')
        .text(country.Country)
        .style('position', 'absolute')
        .style('color', '#f9d625')
        .style('font-weight', 'bold')
        .style('font-size', '12px')
        .style('visibility', 'hidden');

      const flagImage = circleContainer
        .append('img')
        .attr('src', flagURLs[country.Country] || '')
        .attr('width', 70)
        .attr('height', 70)
        .style('border-radius', '50%')
        .style('position', 'absolute')
        .style('top', '0')
        .style('left', '0');

      /**
       * Displays a tooltip with the country details and renders a donut chart.
       *
       * @param {Event} event - Mouse event.
       * @param {Object} country - Country data object.
       * @param {String} panelType - Type of panel ('left' or 'right') for tooltip positioning.
       */
      function showTooltip(event, country, panelType) {
        sidePanelTooltip.html(`
          <div style="text-align: center; margin-bottom: 10px;">
            <strong style="font-size: 16px;">${country.Country}</strong><br>
            <span style="font-size: 14px;">Happiness Score: ${country.happinessScore || 'N/A'}</span>
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 10px;">
            <div id="donut-chart-container" style="margin-right: 10px;"></div>
            <div id="legend-container" style="display: flex; flex-direction: column; align-items: flex-start;"></div>
          </div>
        `);

        // Render the donut chart and legend in the tooltip
        renderDonutChart(
          sidePanelTooltip
            .select('#donut-chart-container')
            .node(),
          country,
        );
        renderLegend(
          sidePanelTooltip
            .select('#legend-container')
            .node(),
        );

        // Position the tooltip relative to the hovered circle
        const circleRect =
          event.currentTarget.getBoundingClientRect();
        const tooltipX =
          panelType === 'left'
            ? circleRect.right + 10
            : circleRect.left -
              sidePanelTooltip.node().offsetWidth -
              10;
        const tooltipY =
          circleRect.top + window.scrollY - 10;

        sidePanelTooltip
          .style('top', `${tooltipY}px`)
          .style('left', `${tooltipX}px`)
          .style('visibility', 'visible');
      }
    });
  };

  // Create the tooltip container for the side panels
  const sidePanelTooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'side-panel-tooltip')
    .style('position', 'absolute')
    .style(
      'background',
      'radial-gradient(circle, #0b1d3f, #000)',
    )
    .style('color', '#f9d625')
    .style('padding', '15px')
    .style('border-radius', '12px')
    .style(
      'box-shadow',
      'inset 0px 0px 10px rgba(255, 255, 255, 0.1), 0px 6px 18px rgba(0, 0, 0, 0.25)',
    )
    .style('pointer-events', 'none')
    .style('font-size', '14px')
    .style('visibility', 'hidden')
    .style('z-index', '1001');

  // Select the left and right panels
  const leftPanel = d3.select('.left-panel');
  const rightPanel = d3.select('.right-panel');

  // Render the panels with the respective data
  renderPanel(leftPanel, top5, 'left');
  renderPanel(rightPanel, bottom5, 'right');
}

/**
 * Renders a donut chart for a given country.
 *
 * @param {HTMLElement} container - HTML element to render the chart into.
 * @param {Object} country - Country data containing happiness factors.
 */
export function renderDonutChart(container, country) {
  d3.select(container).selectAll('svg').remove();

  const width = 150;
  const height = 150;
  const radius = Math.min(width, height) / 2;

  // Define factors with fallback values
  const factors = [
    { name: 'GDP', value: country.GDP || 0 },
    {
      name: 'Social Support',
      value: country.socialSupport || 0,
    },
    {
      name: 'Life Expectancy',
      value: country.lifeExpectancy || 0,
    },
    { name: 'Freedom', value: country.freedom || 0 },
    { name: 'Generosity', value: country.generosity || 0 },
    { name: 'Corruption', value: country.corruption || 0 },
  ];

  // Check for missing data
  if (factors.every((factor) => factor.value === 0)) {
    d3.select(container)
      .append('p')
      .text('No data available')
      .style('color', '#f9d625')
      .style('text-align', 'center');
    return;
  }

  // Define color scale
  const color = d3
    .scaleOrdinal()
    .domain(factors.map((d) => d.name))
    .range([
      '#00b5e2',
      '#ff6347',
      '#ffd700',
      '#adff2f',
      '#ff69b4',
      '#9370db',
    ]);

  // Create pie and arc generator
  const pie = d3.pie().value((d) => d.value);
  const arc = d3
    .arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius);

  // Append SVG for the donut chart
  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height + 20) // Add extra height for padding
    .append('g')
    .attr(
      'transform',
      `translate(${width / 2}, ${height / 2 + 10})`,
    );

  // Draw the donut chart
  svg
    .selectAll('path')
    .data(pie(factors))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d) => color(d.data.name))
    .style('stroke', '#141e30')
    .style('stroke-width', '2px')
    .style('opacity', 0.85);

  // Remove any unnecessary labels from the center
  svg.selectAll('text').remove();
}

/**
 * Renders a legend for the donut chart.
 *
 * @param {HTMLElement} container - HTML element to render the legend into.
 */
function renderLegend(container) {
  const factors = [
    { name: 'GDP', color: '#00b5e2' },
    { name: 'Social Support', color: '#ff6347' },
    { name: 'Life Expectancy', color: '#ffd700' },
    { name: 'Freedom', color: '#adff2f' },
    { name: 'Generosity', color: '#ff69b4' },
    { name: 'Corruption', color: '#9370db' },
  ];

  // Create a legend item for each factor
  d3.select(container)
    .selectAll('div')
    .data(factors)
    .enter()
    .append('div')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('margin-bottom', '4px')
    .html(
      (d) =>
        `<div style="width: 12px; height: 12px; background-color: ${d.color}; margin-right: 6px;"></div>${d.name}`,
    )
    .style('color', '#f9d625')
    .style('font-size', '10px');
}
