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

<img width="1502" alt="Screenshot 2024-10-25 at 12 00 58 AM" src="https://github.com/user-attachments/assets/b0b5deb6-9622-436c-ad4a-1789c9afc218">
<img width="1417" alt="Screenshot 2024-11-02 at 1 42 07 PM" src="https://github.com/user-attachments/assets/2c1465b2-f40a-4a1b-adf0-2b92fa7b6996">
<img width="1417" alt="Screenshot 2024-11-02 at 1 42 16 PM" src="https://github.com/user-attachments/assets/673d467f-da01-422f-8941-badde1702229">
<img width="1411" alt="Screenshot 2024-11-02 at 1 42 25 PM" src="https://github.com/user-attachments/assets/807ff05e-b41c-41a1-82b1-6dd32849c976">
<img width="1413" alt="Screenshot 2024-11-02 at 1 43 01 PM" src="https://github.com/user-attachments/assets/612efafc-78b1-4880-b78b-3774ce2da948">
<img width="1410" alt="Screenshot 2024-11-02 at 1 43 44 PM" src="https://github.com/user-attachments/assets/57e70157-7f46-49c6-aff7-be6c025e2f3c">
<img width="1408" alt="Screenshot 2024-11-02 at 1 44 15 PM" src="https://github.com/user-attachments/assets/58af4476-b4d5-46c4-84ea-89351e4f1c93">
<img width="1399" alt="Screenshot 2024-11-02 at 1 44 36 PM" src="https://github.com/user-attachments/assets/5045a591-9181-46ae-980e-a3f4aedea7c6">

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
