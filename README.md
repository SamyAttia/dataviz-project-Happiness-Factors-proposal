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
d168f2a6eb6c">
<img width="1482" alt="Screenshot 2024-11-02 at 10 47 52 PM" src="https://github.com/user-attachments/assets/8db3e8ef-903f-49a6-8078-5b9b25a9d3cc">
<img width="1483" alt="Screenshot 2024-11-02 at 10 49 22 PM" src="https://github.com/user-attachments/assets/391a5645-699b-46e6-9eea-570437083226">
<img width="1481" alt="Screenshot 2024-11-02 at 10 49 58 PM" src="https://github.com/user-attachments/assets/c31c5a50-543d-483f-8996-191f95846f58">
<img width="1481" alt="Screenshot 2024-11-02 at 10 50 11 PM" src="https://github.com/user-attachments/assets/67dfd1d2-1eab-40f2-9f04-2497721bd95c">
<img width="1506" alt="Screenshot 2024-11-06 at 5 16 21 PM" src="https://github.com/user-attachments/assets/b32c0199-9756-48f9-afcd-b023e1763d91">
<img width="1500" alt="Screenshot 2024-11-06 at 5 15 38 PM" src="https://github.com/user-attachments/assets/cf116d4f-e1d6-487a-b222-eef22a10dfe8">
<img width="1497" alt="Screenshot 2024-11-06 at 5 44 40 PM" src="https://github.com/user-attachments/assets/b0ac21ca-35bd-4c72-9a69-7ea887dd8f90">
<img width="1501" alt="Screenshot 2024-11-06 at 5 11 45 PM" src="https://github.com/user-attachments/assets/420b94d5-7276-4a91-871a-37ce09ac7c30">
<img width="1502" alt="Screenshot 2024-11-06 at 3 47 13 PM" src="https://github.com/user-attachments/assets/60ce40a2-5a97-4d58-870e-83121ed6214d">


##Key Insights
*High Happiness Clusters: Countries in Northern Europe, such as Finland, Denmark, and Iceland, score among the highest in happiness. This aligns with strong social support, high GDP per capita, and good life expectancy typically observed in these nations.

*Low Happiness Scores: The bottom 5 countries are primarily located in regions with economic instability or lower standards of living, like Zimbabwe and Lebanon. Factors such as lower GDP and limited social support might contribute to these scores.

*Geographic Distribution: The map reveals clusters of high and low happiness that reflect global economic and social patterns. European and North American regions generally show higher happiness scores, whereas parts of Africa and the Middle East have lower scores.

*Interactivity and Data Depth: Hovering over each country's circle on the map provides specific data on Happiness Score, GDP per Capita, Social Support, and Life Expectancy—key components influencing happiness scores.

*Donut Chart Visualization: The side panels now feature donut charts for each country, breaking down the contributing happiness factors visually. Each donut chart displays the influence of GDP, Social Support, Life Expectancy, Freedom, Generosity, and Perceptions of Corruption, providing a quick overview of the social and economic factors shaping each country's happiness score.

*Visual Comparison: The side panels allow for a quick comparison between the happiest and least happy countries, showing distinct economic and social contrasts that influence happiness. The donut charts offer an at-a-glance understanding of how each factor contributes to a country's overall happiness.

##Usage
*Rotate the map by dragging to view different regions.
*Zoom in/out to focus on specific areas.
*Hover over circles for detailed insights on happiness factors.
*Hover over the Explore Happiness Factors button for a detailed correlation insight using scatter plots.
*Side Panel Donut Charts: Hovering over a country's flag in the side panels reveals a donut chart that visually represents key happiness factors, *enhancing your understanding of each country's unique happiness profile.

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
