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

<img width="1489" alt="Screenshot 2024-11-13 at 8 26 39 PM" src="https://github.com/user-attachments/assets/acbcfa19-3c32-4e0b-a225-d891ea410929">
<img width="1489" alt="Screenshot 2024-11-13 at 8 27 28 PM" src="https://github.com/user-attachments/assets/be94c8c3-a68e-49d4-b4b5-934d9e72f521">
<img width="1496" alt="Screenshot 2024-11-13 at 8 28 36 PM" src="https://github.com/user-attachments/assets/84930099-cb84-4377-97a0-5a2796a1601d">
<img width="1489" alt="Screenshot 2024-11-13 at 8 29 26 PM" src="https://github.com/user-attachments/assets/db163fc6-2dee-4ef1-b185-e1af36bf67eb">
<img width="1485" alt="Screenshot 2024-11-13 at 8 29 54 PM" src="https://github.com/user-attachments/assets/6ed1a8d6-8c0a-46b8-89c6-1689b4259379">
<img width="1491" alt="Screenshot 2024-11-13 at 8 30 55 PM" src="https://github.com/user-attachments/assets/73e925c6-ab35-411f-8aa7-1ad8196678c9">
<img width="1488" alt="Screenshot 2024-11-13 at 8 31 22 PM" src="https://github.com/user-attachments/assets/e6e3aa70-8c41-4779-b47f-1c32a34ca4bc">
<img width="1489" alt="Screenshot 2024-11-13 at 8 34 47 PM" src="https://github.com/user-attachments/assets/6e207c3b-448a-4e6e-a1ed-dd7ebed74128">
<img width="1491" alt="Screenshot 2024-11-13 at 8 35 12 PM" src="https://github.com/user-attachments/assets/5e13a089-18c2-4cca-a810-1ed432dc0485">
<img width="1488" alt="Screenshot 2024-11-13 at 8 35 30 PM" src="https://github.com/user-attachments/assets/ade31921-4d9d-4258-b53a-308ade144608">
<img width="1492" alt="Screenshot 2024-11-13 at 8 35 39 PM" src="https://github.com/user-attachments/assets/182caee6-f732-4858-a368-40da6ba13549">
<img width="1502" alt="Screenshot 2024-11-06 at 3 47 13 PM" src="https://github.com/user-attachments/assets/60ce40a2-5a97-4d58-870e-83121ed6214d">


## Key Insights
* High Happiness Clusters: Countries in Northern Europe, such as Finland, Denmark, and Iceland, score among the highest in happiness. This aligns with strong social support, high GDP per capita, and good life expectancy typically observed in these nations.

* Low Happiness Scores: The bottom 5 countries are primarily located in regions with economic instability or lower standards of living, like Zimbabwe and Lebanon. Factors such as lower GDP and limited social support might contribute to these scores.

* Geographic Distribution: The map reveals clusters of high and low happiness that reflect global economic and social patterns. European and North American regions generally show higher happiness scores, whereas parts of Africa and the Middle East have lower scores.

* Interactivity and Data Depth: Hovering over each country's circle on the map provides specific data on Happiness Score, GDP per Capita, Social Support, and Life Expectancy—key components influencing happiness scores.

* Donut Chart Visualization: The side panels now feature donut charts for each country, breaking down the contributing happiness factors visually. Each donut chart displays the influence of GDP, Social Support, Life Expectancy, Freedom, Generosity, and Perceptions of Corruption, providing a quick overview of the social and economic factors shaping each country's happiness score.

* Visual Comparison: The side panels allow for a quick comparison between the happiest and least happy countries, showing distinct economic and social contrasts that influence happiness. The donut charts offer an at-a-glance understanding of how each factor contributes to a country's overall happiness.

## Usage
* Rotate the map by dragging to view different regions.
* Zoom in/out to focus on specific areas.
* Hover over circles for detailed insights on happiness factors.
* Hover over the Explore Happiness Factors button for a detailed correlation insight using scatter plots.
* Side Panel Donut Charts: Hovering over a country's flag in the side panels reveals a donut chart that visually represents key happiness factors, * enhancing your understanding of each country's unique happiness profile.

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
* Week 13: Conduct testing, write documentation, and polish the design.
