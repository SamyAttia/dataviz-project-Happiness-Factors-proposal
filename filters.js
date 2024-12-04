/**
 * Function to update the appearance and interaction of circles
 * based on the selected filter criteria.
 *
 * @param {object} svg - The D3 SVG selection where the circles are rendered.
 * @param {object} currentFilter - The currently active filter (persisted state).
 * @returns {function} applyFilter - Function to apply a specific filter to the circles.
 */
export function updateFilteredCircles(svg, currentFilter) {
  /**
   * Function to apply the selected filter to the circles on the map.
   *
   * @param {object|null} filter - The filter to apply (or null to reset).
   */
  return function applyFilter(filter = currentFilter) {
    // Update the current filter state
    currentFilter = filter;

    // Select all country circles rendered in the SVG
    const circles = svg.selectAll('circle.country-circle');

    // Update the class, opacity, and pointer events for each circle based on the filter
    circles
      .classed(
        'highlighted',
        (circle) =>
          !filter || // No filter means all circles are highlighted
          (circle.happinessScore >= filter.min &&
            circle.happinessScore < filter.max), // Highlight only circles within the filter range
      )
      .style(
        'opacity',
        (circle) =>
          !filter ||
          (circle.happinessScore >= filter.min &&
            circle.happinessScore < filter.max)
            ? 1 // Full opacity for highlighted circles
            : 0.1, // Dim non-highlighted circles
      )
      .style(
        'pointer-events',
        (circle) =>
          !filter ||
          (circle.happinessScore >= filter.min &&
            circle.happinessScore < filter.max)
            ? 'auto' // Enable interaction for highlighted circles
            : 'none', // Disable interaction for non-highlighted circles
      );
  };
}
