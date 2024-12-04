// Import required modules
import {
  setupMapTooltip,
  setupScatterTooltip,
} from './tooltips.js'; // Tooltip setup modules
import { renderScatterPlot } from './scatter.js'; // Scatter plot rendering
import { renderMap } from './map.js'; // Map rendering and interaction
import { setupLegend } from './legend.js'; // Legend setup
import { renderCountryPanels } from './panels.js'; // Country panel rendering
import { loadData } from './data.js'; // Data loading module
import { updateFilteredCircles } from './filters.js'; // Circle filtering module

// Constants for visualization dimensions and projection
const width = 960;
const height = 500;
const initialScale = 240;

// Initialize the SVG container for the visualization
const svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height);

// Initialize the map projection
const projection = d3
  .geoOrthographic()
  .scale(initialScale)
  .translate([width / 2, height / 2]);

// Define the geoPath generator using the projection
const geoPath = d3.geoPath().projection(projection);

// Initialize the current filter state
let currentFilter = null;

// Create a reusable filter application function
const applyFilter = updateFilteredCircles(
  svg,
  currentFilter,
);

// Load data and initialize the visualization
loadData()
  .then(({ countries110m, countries50m, score }) => {
    // Render the map with data and interaction handlers
    const { applyFilter: mapApplyFilter, resetFilter } =
      renderMap(
        svg,
        projection,
        geoPath,
        score,
        countries110m,
        countries50m,
        applyFilter, // Pass the circle filter function
      );

    // Combine map-specific and global applyFilter functions
    const combinedApplyFilter =
      mapApplyFilter || applyFilter;

    // Render the side panels with top and bottom country data
    renderCountryPanels(score, {
      Finland:
        'https://hatscripts.github.io/circle-flags/flags/fi.svg',
      Denmark:
        'https://hatscripts.github.io/circle-flags/flags/dk.svg',
      Iceland:
        'https://hatscripts.github.io/circle-flags/flags/is.svg',
      Switzerland:
        'https://hatscripts.github.io/circle-flags/flags/ch.svg',
      Netherlands:
        'https://hatscripts.github.io/circle-flags/flags/nl.svg',
      Botswana:
        'https://hatscripts.github.io/circle-flags/flags/bw.svg',
      Rwanda:
        'https://hatscripts.github.io/circle-flags/flags/rw.svg',
      Zimbabwe:
        'https://hatscripts.github.io/circle-flags/flags/zw.svg',
      Lebanon:
        'https://hatscripts.github.io/circle-flags/flags/lb.svg',
      Afghanistan:
        'https://hatscripts.github.io/circle-flags/flags/af.svg',
    });

    // Setup the legend with combined filter logic
    setupLegend(svg, combinedApplyFilter);

    // Initialize map and scatter plot tooltips
    const mapTooltip = setupMapTooltip();
    const scatterTooltip = setupScatterTooltip();

    // Attach reset filter logic to the reset button
    d3.select('.reset-filter-btn').on('click', () => {
      resetFilter();
    });
  })
  .catch((error) => {
    console.error(
      'Error initializing visualization:',
      error,
    );
  });

// Debounce function to stabilize mouseover events
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => func.apply(this, args),
      delay,
    );
  };
};

// Initialize tooltips for the map and scatter plot
const mapTooltip = setupMapTooltip();
const scatterTooltip = setupScatterTooltip();

// Define happiness factors for scatter plots
const factors = [
  'GDP per capita',
  'Social support',
  'Healthy life expectancy',
  'Freedom to make life choices',
  'Generosity',
  'Perceptions of corruption',
];

// Add event listeners for scatter plot tooltips
const button = d3.select('.switch-btn');
button
  .on(
    'mouseover',
    debounce(() => {
      scatterTooltip
        .style('top', '50px')
        .style('left', '50%')
        .style('transform', 'translateX(-50%)')
        .style('visibility', 'visible');
    }, 50),
  )
  .on('mouseout', () => {
    scatterTooltip.style('visibility', 'hidden');
  });

// Load data for scatter plots
d3.csv('data.csv').then((data) => {
  // Parse data values
  data.forEach((d) => {
    factors.forEach((factor) => {
      d[factor] = +d[`Explained by: ${factor}`] || 0;
    });
    d['Happiness score'] = +d['Happiness score'];
  });

  // Render scatter plots for each happiness factor
  factors.forEach((factor) => {
    renderScatterPlot(
      factor,
      'Happiness score',
      scatterTooltip.node(),
      data,
    );
  });
});
