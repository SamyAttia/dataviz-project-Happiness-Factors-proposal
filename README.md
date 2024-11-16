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

<img width="1502" alt="Screenshot 2024-11-16 at 5 48 34 PM" src="https://github.com/user-attachments/assets/a29f0b52-61ae-4d55-b620-d34618272b88">
<img width="1506" alt="Screenshot 2024-11-16 at 5 49 07 PM" src="https://github.com/user-attachments/assets/ecd09e21-dd07-4119-9809-f4f3b88aa84c">
<img width="1507" alt="Screenshot 2024-11-16 at 5 50 01 PM" src="https://github.com/user-attachments/assets/694e52f9-63ad-42af-886c-fe0debba25e5">
<img width="1506" alt="Screenshot 2024-11-16 at 5 50 55 PM" src="https://github.com/user-attachments/assets/773d301f-f71c-4b06-9dcc-cc4e42ca72e5">
<img width="1506" alt="Screenshot 2024-11-16 at 5 51 24 PM" src="https://github.com/user-attachments/assets/62b7d1f7-a0c9-4f29-8d4d-f48281fb1ff5">
<img width="1505" alt="Screenshot 2024-11-16 at 5 52 17 PM" src="https://github.com/user-attachments/assets/ec0a8a4a-3f0f-47dc-8e66-adf030a26303">
<img width="1507" alt="Screenshot 2024-11-16 at 5 52 36 PM" src="https://github.com/user-attachments/assets/140415bc-9f0b-4028-9d2f-00dc61dd4ca0">
<img width="1508" alt="Screenshot 2024-11-16 at 5 53 01 PM" src="https://github.com/user-attachments/assets/a0ef4f83-c3c2-4131-a5c0-7b65ad05c4a6">
<img width="1506" alt="Screenshot 2024-11-16 at 5 53 23 PM" src="https://github.com/user-attachments/assets/ce9a9820-104d-4c75-b1af-ad93ad3fc4ce">
<img width="1502" alt="Screenshot 2024-11-16 at 5 53 46 PM" src="https://github.com/user-attachments/assets/6ae4401e-c329-4722-9345-30e66184491e">
<img width="1504" alt="Screenshot 2024-11-16 at 5 58 38 PM" src="https://github.com/user-attachments/assets/cd102574-803c-4251-a38a-aebc68255b84">

## Key Insights
* High Happiness Clusters: Countries in Northern Europe, such as Finland, Denmark, and Iceland, score among the highest in happiness. This aligns with strong social support, high GDP per capita, and good life expectancy typically observed in these nations.

* Low Happiness Scores: The bottom 5 countries are primarily located in regions with economic instability or lower standards of living, like Zimbabwe and Lebanon. Factors such as lower GDP and limited social support might contribute to these scores.

* Geographic Distribution: The map reveals clusters of high and low happiness that reflect global economic and social patterns. European and North American regions generally show higher happiness scores, whereas parts of Africa and the Middle East have lower scores.

* Interactivity and Data Depth: Hovering over each country's circle on the map provides specific data on Happiness Score, GDP per Capita, Social Support, and Life Expectancy—key components influencing happiness scores.

* Donut Chart Visualization: The side panels now feature donut charts for each country, breaking down the contributing happiness factors visually. Each donut chart displays the influence of GDP, Social Support, Life Expectancy, Freedom, Generosity, and Perceptions of Corruption, providing a quick overview of the social and economic factors shaping each country's happiness score.

* Visual Comparison: The side panels allow for a quick comparison between the happiest and least happy countries, showing distinct economic and social contrasts that influence happiness. The donut charts offer an at-a-glance understanding of how each factor contributes to a country's overall happiness.
  
* Legend and Circle Interaction: The newly added legend categorizes countries based on happiness score ranges. By selecting a category, only the countries within the chosen range remain highlighted, enhancing focus on specific happiness levels across the world. This feature allows for easy comparison of countries within a similar happiness bracket and helps reveal regional trends within each score range.

## Usage
* Rotate the map by dragging to view different regions.
* Zoom in/out to focus on specific areas.
* Hover over circles for detailed insights on happiness factors.
* Hover over the Explore Happiness Factors button for a detailed correlation insight using scatter plots.
* Side Panel Donut Charts: Hovering over a country's flag in the side panels reveals a donut chart that visually represents key happiness factors, * enhancing your understanding of each country's unique happiness profile.
* Legend Interaction: Click on the legend categories to filter countries based on happiness score ranges (>7.0, 6.0-7.0, 5.0-6.0, and <5.0). This highlights only the selected range on the map, making it easier to analyze regions with similar happiness scores.

Here’s a link to my working visualization in VizHub (https://vizhub.com/SamyAttia/efae66c35b3847d18a3ce08f3db35fba?mode=embed). 
This shows the heatmap and scatter plot along with country flags for visual clarity and user interaction.


## Open Questions

While the project has progressed smoothly, I have a few concerns regarding the future scope:

* How can we ensure that the visual transitions between the heatmap and scatter plot remain fluid across different screen sizes?
* How should we handle missing or incomplete data from certain countries to avoid skewing correlation results or visual anomalies?


## Milestones

* Week 9: Update: This visualization now includes two side panels. The left panel displays the top 5 countries with the highest happiness scores, while the right panel shows the bottom 5 countries in the dataset. Each panel includes interactive circles with country flags, and detailed statistics are displayed on hover.
* Week 10: Added World map to visualize all 146 countries, ranks, and happiness scores.
* Week 11: Added scatter plots for Happiness factors correlation.
* Week 12: Added Donut Chart Visualization: The side panels feature donut charts for each country.
* Week 13: Added interactive legend that filter countries on the map by happiness score range, highlighting only the selected score category for focused analysis.
* Week 14: Conduct testing, write documentation, and polish the design.
