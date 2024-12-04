/**
 * Creates and sets up a tooltip for map circles.
 *
 * @returns {d3.Selection} - A D3 selection of the map tooltip element.
 */
export const setupMapTooltip = () => {
  return d3
    .select('body')
    .append('div')
    .attr('class', 'map-tooltip')
    .style('position', 'absolute')
    .style(
      'background',
      'radial-gradient(circle, #0b1d3f, #000)',
    ) // Dark radial gradient for aesthetics
    .style('color', '#f9d625') // Matches the visual theme
    .style('padding', '10px') // Add padding for content spacing
    .style('border-radius', '8px') // Rounded corners for smooth design
    .style(
      'box-shadow',
      '0px 4px 10px rgba(255, 255, 255, 0.3)',
    ) // Subtle shadow for depth
    .style('pointer-events', 'none') // Prevent blocking interactions
    .style('font-size', '14px') // Text size for readability
    .style('visibility', 'hidden') // Hidden by default
    .style('z-index', '1001'); // Ensure tooltip appears on top
};

/**
 * Creates and sets up a tooltip for scatter plots with grid-based positioning.
 *
 * @returns {d3.Selection} - A D3 selection of the scatter tooltip element.
 */
export const setupScatterTooltip = () => {
  const scatterTooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'scatter-tooltip')
    .style('position', 'absolute')
    .style(
      'background',
      'radial-gradient(circle, #0b1d3f, #000)',
    ) // Consistent dark gradient background
    .style('color', '#f9d625') // Tooltip text color
    .style('padding', '20px') // Spacious padding for content
    .style('border-radius', '15px') // Rounded corners for smooth appearance
    .style('width', '900px') // Fixed width for grid alignment
    .style('height', '575px') // Fixed height for grid layout
    .style('display', 'grid') // Enable grid layout for child elements
    .style('grid-template-rows', 'auto 1fr') // Divide tooltip into title and content
    .style('grid-template-columns', 'repeat(3, 1fr)') // Three-column grid
    .style('align-items', 'center') // Vertically center items
    .style('justify-items', 'center') // Horizontally center items
    .style('pointer-events', 'none') // Prevent blocking interactions
    .style('visibility', 'hidden') // Hidden by default
    .style('z-index', '1001') // Ensure it appears on top of other elements
    .style('box-shadow', '0px 4px 10px rgba(0, 0, 0, 0.6)'); // Stronger shadow for focus

  // Add a title inside the scatterTooltip
  scatterTooltip
    .append('div')
    .attr('class', 'scatter-tooltip-title')
    .style('grid-column', 'span 3') // Span the entire width
    .style('text-align', 'center') // Center align text
    .style('font-size', '20px') // Larger font for prominence
    .style('font-weight', 'bold') // Bold font for emphasis
    .style('color', '#5BC0EB') // Highlighted blue title
    .style('margin-bottom', '5px') // Space below the title
    .text(
      'Correlation Analysis of Happiness Factors Among Top Countries',
    ); // Informative tooltip title

  return scatterTooltip;
};
