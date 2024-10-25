# World Happiness Report 2022
# Data Visualization Project

## Data

The dataset used for this project is from the World Happiness Report 2022 (https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022?select=World+Happiness+Report+2022.csv) , loaded and parsed as a CSV file. It includes various factors contributing to a country's happiness score, such as GDP per capita, social support, healthy life expectancy, freedom to make life choices, generosity, and perceptions of corruption. Flags used in the visualizations are sourced from Circle Flags Gallery (https://hatscripts.github.io/circle-flags/gallery).


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * Analyze the correlation between GDP per capita and the happiness score across countries.
 * Understand the geographic distribution of happiness scores by country.
 * Observe how different factors (GDP per capita, social support, healthy life expectancy, etc.) contribute to happiness in top-ranking countries.
 * Identify countries with high happiness scores but low perceptions of corruption.
 * Examine the distribution of happiness scores across different continents or regions.

## Sketches

Below is a sketch of the envisioned interactive visualization:

* Heatmap View: A heatmap displaying correlations between happiness factors such as GDP, social support,
  and life expectancy. Users can hover over cells to see specific correlation values, and clicking
  a cell will drill down into a scatter plot view.
 * Country Circle Panels: Side panels with circles representing the top 10 happiest countries.
   Hovering over each circle displays additional country-specific information (e.g., happiness score, GDP, social support).
   This serves as a quick reference to understand which countries rank highest and their respective happiness factors.
 * Scatter Plot View: Upon clicking a heatmap cell, a scatter plot appears, showing the relationship between two happiness factors for all countries.
   This allows for deeper exploration of the relationships between individual factors.
   
## Prototype

I’ve created a proof-of-concept visualization of this data. It currently includes a heatmap for visualizing correlations 
between happiness factors for the top 10 countries and an interactive scatter plot that allows for further exploration of these relationships.

<img width="1503" alt="Screenshot 2024-10-25 at 12 00 35 AM" src="https://github.com/user-attachments/assets/f47b8c9d-0db7-4842-b9a2-f1c474827b1b">

<img width="1507" alt="Screenshot 2024-10-25 at 12 00 46 AM" src="https://github.com/user-attachments/assets/81cf32ca-b790-4e0f-ae33-c120890a5442">

<img width="1502" alt="Screenshot 2024-10-25 at 12 00 58 AM" src="https://github.com/user-attachments/assets/b0b5deb6-9622-436c-ad4a-1789c9afc218">


Here’s a link to my working visualization in VizHub (https://vizhub.com/SamyAttia/efae66c35b3847d18a3ce08f3db35fba?mode=embed). 
This shows the heatmap and scatter plot along with country flags for visual clarity and user interaction.


## Open Questions

While the project has progressed smoothly, I have a few concerns regarding the future scope:

* How can we ensure that the visual transitions between the heatmap and scatter plot remain fluid across different screen sizes?
* How should we handle missing or incomplete data from certain countries to avoid skewing correlation results or visual anomalies?


## Milestones

* Week 9: Update: This visualization now includes two side panels. The left panel displays the top 5 countries with the highest happiness scores, while the right panel shows the bottom 5 countries in the dataset. Each panel includes interactive circles with country flags, and detailed statistics are displayed on hover.
* Week 10: Implement scatter plot matrix and scatter plots in tooltips, resolve heatmap flickering.
* Week 11: Add choropleth map and parallel coordinates plot.
* Week 12: Conduct testing, write documentation, and polish the design.
