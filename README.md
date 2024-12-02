# World Happiness Report 2022:
# An Interactive Visualization

The World Happiness Report 2022 offers fascinating insights into the factors that contribute to happiness across nations. Leveraging this rich dataset, I created an interactive visualization to uncover patterns and correlations among happiness factors such as GDP per capita, social support, life expectancy, and more. This project merges data storytelling with user-centric interactivity to deliver an engaging and informative exploration of happiness worldwide.

<img width="1487" alt="Screenshot 2024-11-23 at 9 03 09 PM" src="https://github.com/user-attachments/assets/73806b60-5a7e-4787-807d-7d063cd366fc">

## Data

The dataset is sourced from the World Happiness Report 2022 (https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022?select=World+Happiness+Report+2022.csv), It provides comprehensive metrics for 146 countries, detailing factors such as:

* GDP per capita
* Social support
* Healthy life expectancy
* Freedom to make life choices
* Generosity
* Perceptions of corruption

Flags for countries are sourced from the Circle Flags Gallery to enhance visual clarity. https://hatscripts.github.io/circle-flags/gallery

## Project Objectives

This project aims to answer critical questions through visualization:

 * What is the correlation between GDP per capita and happiness scores?
 * How are happiness scores distributed geographically?
 * Which factors drive happiness in the top-ranking countries?
 * Can we identify outliers—countries with high happiness despite low perceptions of corruption?
 * How do happiness scores differ across continents?

## Development Journey

## Initial Sketches
The project began with conceptual sketches, envisioning multiple visualization components:

* Interactive Map: Highlighting geographic trends and happiness scores across all countries.
* Side Panels: Displaying the top and bottom 5 countries with detailed factor breakdowns.
* Scatter Plots: Offering deeper insights into factor relationships.

## Milestones

* Week 9: Implemented interactive side panels for the top and bottom 5 happiest countries, including country flags and hover-based details.
* Week 10: Added a world map to visualize happiness scores and ranks for all 146 countries.
* Week 11: Introduced scatter plots to explore correlations between happiness factors.
* Week 12: Developed donut charts in side panels for factor-specific breakdowns.
* Week 13: Integrated an interactive legend to filter countries by happiness score ranges.
* Week 14: Finalized design, conducted usability testing, and polished the user interface.
   
## Interactive Features

## Dynamic Map
* Circles represent countries, scaled and color-coded by happiness scores.
* Hovering over a circle displays detailed data, including happiness score, GDP, and rank.

<img width="1486" alt="Screenshot 2024-11-23 at 9 02 22 PM" src="https://github.com/user-attachments/assets/500570e8-d1c1-4f50-ab29-be6e2c79c450">

## Side Panels
* The left panel highlights the top 5 happiest countries, while the right panel features the bottom 5.
* Each panel includes donut charts visualizing factor contributions like GDP, life expectancy, and social support.

<img width="1507" alt="Screenshot 2024-11-24 at 9 00 09 AM" src="https://github.com/user-attachments/assets/a1bf0633-6f07-453b-9f02-15e7c66854bb">

## Scatter Plots
* Explore how happiness factors correlate with scores through an interactive tooltip featuring scatter plots for factors like GDP and life expectancy.

<img width="1512" alt="Screenshot 2024-11-29 at 11 06 30 AM" src="https://github.com/user-attachments/assets/56392a12-8e22-4f0c-bf76-578936dad722">

## Interactive Legend
* Filter countries by score ranges (e.g., >7.0, 6.0-7.0) using the legend. Highlighted countries dynamically adjust based on the selected range.

<img width="1490" alt="Screenshot 2024-11-24 at 10 11 50 AM" src="https://github.com/user-attachments/assets/b4fc76b0-1342-4187-86b5-3161e4e8a995">

## Key Insights

* Happiest Countries: Finland, Denmark, and Iceland rank highest, driven by strong social support, high GDP, and life expectancy.
* Least Happy Countries: Afghanistan and Zimbabwe score lowest, reflecting economic challenges and limited social infrastructure.
* Geographic Trends: Northern Europe consistently outperforms other regions, while parts of Africa and the Middle East show lower scores.
* Factor Analysis: GDP, life expectancy, and social support emerge as the strongest predictors of happiness in top-ranking nations.

## Final Visualization

* The project culminates in a polished, user-friendly interface combining aesthetics with data depth. Screenshots below highlight the key components:

<img width="1489" alt="Screenshot 2024-11-23 at 8 59 58 PM" src="https://github.com/user-attachments/assets/50723df0-9be4-421a-bc5f-e281a3f7d633">
<img width="1489" alt="Screenshot 2024-11-23 at 9 02 05 PM" src="https://github.com/user-attachments/assets/bfc43ace-dcab-44fa-a348-f4197fd5968c">
<img width="1486" alt="Screenshot 2024-11-23 at 9 02 22 PM" src="https://github.com/user-attachments/assets/034692ca-3f26-49db-bb44-6bb45408a6dc">
<img width="1485" alt="Screenshot 2024-11-23 at 9 03 39 PM" src="https://github.com/user-attachments/assets/9fdaaf25-596f-4990-a65e-baefbf5e182d">
<img width="1488" alt="Screenshot 2024-11-23 at 9 10 47 PM" src="https://github.com/user-attachments/assets/abf88682-b7d1-42df-a3a2-a9cdb0fde505">
<img width="1508" alt="Screenshot 2024-11-24 at 8 57 54 AM" src="https://github.com/user-attachments/assets/78e29269-181d-4b13-bdb8-7e47d2793b56">
<img width="1509" alt="Screenshot 2024-11-24 at 8 59 21 AM" src="https://github.com/user-attachments/assets/13c51fac-c0ec-4fc2-bd08-0b0daac21d84">
<img width="1507" alt="Screenshot 2024-11-24 at 9 00 09 AM" src="https://github.com/user-attachments/assets/0bd5a241-d9a4-4394-ba58-3a0502c0a538">
<img width="1493" alt="Screenshot 2024-11-24 at 10 09 30 AM" src="https://github.com/user-attachments/assets/902b9557-b24f-4119-aaca-98f123989bd0">

You can explore it live at this link https://vizhub.com/SamyAttia/58136a55eb7145f88c887b9ab5cceccc

## Next Steps

This visualization serves as a foundation for deeper analysis and storytelling. Future enhancements could include:

* Region-specific breakdowns.
* Year-over-year happiness trends.
* Predictive modeling to forecast future scores.
  
This project showcases my ability to design, code, and deliver interactive data visualizations, making it a proud addition to my portfolio.

