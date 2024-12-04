export function setupLegend(svg, updateFilteredCircles) {
  // Variable to track the currently active filter
  let currentFilter = null;

  // Legend data for various happiness score ranges
  const legendData = [
    {
      range: 'Reset',
      color: '#031021',
      min: null,
      max: null,
    },
    { range: '> 7.0', color: '#88c0d0', min: 7.0, max: 10 },
    {
      range: '6.0 - 7.0',
      color: '#81a1c1',
      min: 6.0,
      max: 7.0,
    },
    {
      range: '5.0 - 6.0',
      color: '#5e81ac',
      min: 5.0,
      max: 6.0,
    },
    { range: '< 5.0', color: '#b48ead', min: 0, max: 5.0 },
  ];

  // Create the legend container
  const legendContainer = d3
    .select('body')
    .append('div')
    .attr('class', 'legend-container')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .style('align-items', 'center')
    .style('margin-top', '20px')
    .style('position', 'absolute')
    .style('left', '33.5%') // Adjust as per the map placement
    .style('bottom', '23%'); // Adjust as per the UI design

  // Iterate through legend data to create each legend item
  legendData.forEach((item) => {
    // Create a container for each legend entry
    const legendItem = legendContainer
      .append('div')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('margin', '0 15px');

    // Add a clickable circle representing the range
    const circle = legendItem
      .append('div')
      .style('width', '20px')
      .style('height', '20px')
      .style('background-color', item.color)
      .style('border-radius', '50%')
      .style('cursor', 'pointer')
      .style(
        'box-shadow',
        '0px 2px 8px rgba(255, 255, 255, 0.3)', // Subtle initial shadow
      )
      .style(
        'transition',
        'transform 0.3s, box-shadow 0.3s', // Smooth transitions for hover effects
      )
      .on('click', () => {
        // Update the filter when a legend circle is clicked
        currentFilter = item.min !== null ? item : null;
        if (typeof updateFilteredCircles === 'function') {
          updateFilteredCircles(currentFilter);
        } else {
          console.error(
            'updateFilteredCircles is not a function',
          );
        }
      })
      .on('mouseover', function () {
        // Enhance circle appearance on hover
        d3.select(this)
          .style('transform', 'scale(1.2)') // Enlarge
          .style(
            'box-shadow',
            '0px 4px 12px rgba(255, 255, 255, 0.6)', // Brightened shadow
          );
      })
      .on('mouseout', function () {
        // Reset circle appearance when hover ends
        d3.select(this)
          .style('transform', 'scale(1)') // Reset size
          .style(
            'box-shadow',
            '0px 2px 8px rgba(255, 255, 255, 0.3)', // Reset shadow
          );
      });

    // Special handling for the reset option
    if (item.range === 'Reset') {
      circle
        .append('img')
        .attr(
          'src',
          'https://img.icons8.com/?size=96&id=63322&format=png', // Icon for reset
        )
        .style('width', '100%')
        .style('height', '100%')
        .style('pointer-events', 'none'); // Ensure the image doesn't block hover/click interactions
    }

    // Add a text label next to the circle
    legendItem
      .append('span')
      .text(item.range) // Display the range as text
      .style('color', '#ffffff') // Text color
      .style('margin-left', '8px') // Space between circle and text
      .style('font-size', '14px'); // Font size for readability
  });
}
