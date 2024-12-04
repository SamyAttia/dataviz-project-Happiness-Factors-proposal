import * as d3 from 'd3';
import * as topojson from 'topojson-client';

/**
 * Asynchronous function to load and process the required datasets.
 *
 * @returns {Object} An object containing processed data:
 * - countries110m: Low-resolution country boundaries (for performance).
 * - countries50m: High-resolution country boundaries (for detailed rendering).
 * - score: Merged and processed dataset combining happiness scores and country information.
 */
export async function loadData() {
  try {
    // Fetch datasets concurrently
    const [world110m, world50m, data, score] =
      await Promise.all([
        d3.json(
          'https://unpkg.com/world-atlas@1/world/110m.json',
        ),
        d3.json(
          'https://unpkg.com/world-atlas@1/world/50m.json',
        ), // Higher resolution for detailed rendering
        d3.csv('data.csv'),
        d3.csv('score.csv'),
      ]);

    // Convert TopoJSON into GeoJSON for easier handling
    const countries110m = topojson.feature(
      world110m,
      world110m.objects.countries,
    );
    const countries50m = topojson.feature(
      world50m,
      world50m.objects.countries,
    );

    // Process `data.csv` (Country-level attributes)
    data.forEach((d) => {
      d.rank = +d['RANK'];
      d.happinessScore = +d['Happiness score'];
      d.GDP = +d['Explained by: GDP per capita'] || 0;
      d.socialSupport =
        +d['Explained by: Social support'] || 0;
      d.lifeExpectancy =
        +d['Explained by: Healthy life expectancy'] || 0;
      d.freedom =
        +d['Explained by: Freedom to make life choices'] ||
        0;
      d.generosity = +d['Explained by: Generosity'] || 0;
      d.corruption =
        +d['Explained by: Perceptions of corruption'] || 0;
      d.Country = d.Country.trim().toLowerCase(); // Normalize country names for matching
    });

    // Process `score.csv` (Country coordinates and scores) and merge with `data.csv`
    score.forEach((s) => {
      s.happinessScore = +s.happinessScore;
      s.latitude = +s.latitude;
      s.longitude = +s.longitude;
      s.country = s.country.trim().toLowerCase(); // Normalize for matching

      // Find matching country data
      const countryData = data.find(
        (d) => d.Country === s.country,
      );

      // Merge attributes from `data.csv` if found
      if (countryData) {
        s.Country =
          countryData.Country.charAt(0).toUpperCase() +
          countryData.Country.slice(1); // Capitalize country name
        s.rank = countryData.rank;
        s.GDP = countryData.GDP;
        s.socialSupport = countryData.socialSupport;
        s.lifeExpectancy = countryData.lifeExpectancy;
        s.freedom = countryData.freedom;
        s.generosity = countryData.generosity;
        s.corruption = countryData.corruption;
      } else {
        // Assign default values for unmatched records
        s.Country = 'Unknown';
        s.rank = 'N/A';
        s.GDP = 0;
        s.socialSupport = 0;
        s.lifeExpectancy = 0;
        s.freedom = 0;
        s.generosity = 0;
        s.corruption = 0;
      }
    });

    // Return processed datasets
    return {
      countries110m,
      countries50m,
      score,
    };
  } catch (error) {
    // Log and propagate the error for handling in calling code
    console.error(
      'Error loading or processing data:',
      error,
    );
    throw error;
  }
}
