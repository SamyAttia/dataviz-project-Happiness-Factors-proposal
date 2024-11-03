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

<img width="1484" alt="Screenshot 2024-11-02 at 10 46 57 PM" src="https://github.com/user-attachments/assets/196c593b-196e-4227-b37a-0a0668651d23">
<img width="1487" alt="Screenshot 2024-11-02 at 10 47 26 PM" src="https://github.com/user-attachments/assets/764089c4-1865-48bd-89c3-45c443f3add6">
<img width="1477" alt="Screenshot 2024-11-02 at 10 47 40 PM" src="https://github.com/user-attachments/assets/a953b856-aac0-416c-aca5-d168f2a6eb6c">
<img width="1482" alt="Screenshot 2024-11-02 at 10 47 52 PM" src="https://github.com/user-attachments/assets/8db3e8ef-903f-49a6-8078-5b9b25a9d3cc">
<img width="1483" alt="Screenshot 2024-11-02 at 10 49 22 PM" src="https://github.com/user-attachments/assets/391a5645-699b-46e6-9eea-570437083226">
<img width="1481" alt="Screenshot 2024-11-02 at 10 49 58 PM" src="https://github.com/user-attachments/assets/c31c5a50-543d-483f-8996-191f95846f58">
<img width="1481" alt="Screenshot 2024-11-02 at 10 50 11 PM" src="https://github.com/user-attachments/assets/67dfd1d2-1eab-40f2-9f04-2497721bd95c">
<img width="1485" alt="Screenshot 2024-11-02 at 10 50 39 PM" src="https://github.com/user-attachments/assets/6dbeda51-2b9c-466b-8b70-04ffc3cfb196">

## Key Insights

* High Happiness Clusters: Countries in Northern Europe such as Finland, Denmark, and Iceland score among the highest in happiness. This aligns with the strong social support, high GDP per capita, and good life expectancy typically observed in these nations.
* Low Happiness Scores: The bottom 5 countries are primarily located in regions with economic instability or lower standards of living, like Zimbabwe and Lebanon. Factors such as lower GDP and limited social support might contribute to these scores.
* Geographic Distribution: The map reveals clusters of high and low happiness that reflect global economic and social patterns. European and North American regions generally show higher happiness scores, whereas parts of Africa and the Middle East have lower scores.
* Interactivity and Data Depth: Hovering over each country's circle on the map provides specific data on Happiness Score, GDP per Capita, Social Support, and Life Expectancy—key components influencing happiness scores.
* Visual Comparison: The side panels allow for a quick comparison between the happiest and least happy countries, showing distinct economic and social contrasts that influence happiness.

## Usage

* Rotate the map by dragging to view different regions.
* Zoom in/out to focus on specific areas.
* Hover over circles for detailed insights on happiness factors.
* Click Switch to Heatmap View for an alternative visualization mode. (Coming soon)

Here’s a link to my working visualization in VizHub (https://vizhub.com/SamyAttia/efae66c35b3847d18a3ce08f3db35fba?mode=embed). 
This shows the heatmap and scatter plot along with country flags for visual clarity and user interaction.


## Open Questions

While the project has progressed smoothly, I have a few concerns regarding the future scope:

* How can we ensure that the visual transitions between the heatmap and scatter plot remain fluid across different screen sizes?
* How should we handle missing or incomplete data from certain countries to avoid skewing correlation results or visual anomalies?


## Milestones

* Week 9: Update: This visualization now includes two side panels. The left panel displays the top 5 countries with the highest happiness scores, while the right panel shows the bottom 5 countries in the dataset. Each panel includes interactive circles with country flags, and detailed statistics are displayed on hover.
* Week 10: Added World map to visualize all 146 countries, ranks, and happiness scores.
* Week 11: Add choropleth map and parallel coordinates plot.
* Week 12: Conduct testing, write documentation, and polish the design.
