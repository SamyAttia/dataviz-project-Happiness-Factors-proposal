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

<img width="1501" alt="Screenshot 2024-11-16 at 11 43 09 PM" src="https://github.com/user-attachments/assets/bd8591cf-5b94-4edf-80cc-2d9940718fb4">
<img width="1503" alt="Screenshot 2024-11-16 at 11 43 26 PM" src="https://github.com/user-attachments/assets/fc3a2166-e0da-411d-8065-c727fe3ad87e">
<img width="1499" alt="Screenshot 2024-11-16 at 11 44 04 PM" src="https://github.com/user-attachments/assets/eb10e619-bba4-48f4-9538-a52d3c328191">
<img width="1502" alt="Screenshot 2024-11-16 at 11 44 23 PM" src="https://github.com/user-attachments/assets/322eb646-88db-4e2e-9183-1d7f9951e200">
<img width="1504" alt="Screenshot 2024-11-16 at 11 44 47 PM" src="https://github.com/user-attachments/assets/8762f0d0-75d1-4067-8091-5b52bf2b1936">
<img width="1504" alt="Screenshot 2024-11-16 at 11 44 58 PM" src="https://github.com/user-attachments/assets/dbaaafa8-03ad-4c65-94e1-a5fd282af7fe">
<img width="1506" alt="Screenshot 2024-11-16 at 11 45 24 PM" src="https://github.com/user-attachments/assets/ad3a7185-8ce1-4c98-b29c-7df766e163ce">
<img width="1506" alt="Screenshot 2024-11-16 at 11 45 37 PM" src="https://github.com/user-attachments/assets/2dff7501-3bad-495e-9137-2b8f954e7b50">
<img width="1504" alt="Screenshot 2024-11-16 at 11 46 04 PM" src="https://github.com/user-attachments/assets/f73afb79-cdc0-4cbf-a2b4-0b2a47ed4319">
<img width="1506" alt="Screenshot 2024-11-16 at 11 46 37 PM" src="https://github.com/user-attachments/assets/7a0bde3c-6310-4648-bc27-142069eae105">
<img width="1507" alt="Screenshot 2024-11-16 at 11 46 45 PM" src="https://github.com/user-attachments/assets/473d842b-0381-4577-9fd1-64e08e7d4916">
<img width="1507" alt="Screenshot 2024-11-16 at 11 46 56 PM" src="https://github.com/user-attachments/assets/5bda7d60-2838-4697-a797-408e803c2018">
<img width="1504" alt="Screenshot 2024-11-16 at 11 47 03 PM" src="https://github.com/user-attachments/assets/06572d5e-3dc6-4b2d-8bb1-81771f63e5e9">
<img width="1502" alt="Screenshot 2024-11-16 at 11 47 16 PM" src="https://github.com/user-attachments/assets/5d6e277b-baee-40c4-8fe4-1bdafa8576c1">

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
