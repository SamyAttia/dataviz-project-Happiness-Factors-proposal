World Happiness Report 2022 Data Visualization Project
Data
The dataset used for this project is from the World Happiness Report 2022, loaded and parsed as a CSV file. It includes various factors contributing to a country's happiness score, such as GDP per capita, social support, healthy life expectancy, freedom to make life choices, generosity, and perceptions of corruption. Flags used in the visualizations are sourced from Circle Flags Gallery.

Questions & Tasks
The following tasks and questions will guide the visualization and interaction design decisions for this project:

Analyze the correlation between GDP per capita and the happiness score across countries.
Task type: Compare correlation.

Understand the geographic distribution of happiness scores by country.
Task type: Explore spatial.

Observe how different factors (GDP per capita, social support, healthy life expectancy, etc.) contribute to happiness in top-ranking countries.
Task type: Break down composition.

Identify countries with high happiness scores but low perceptions of corruption.
Task type: Identify extremum (high happiness, low corruption).

Examine the distribution of happiness scores across different continents or regions.
Task type: Distribution.

Sketches
Below is a sketch of the envisioned interactive visualization:

Heatmap View: A heatmap displaying correlations between happiness factors such as GDP, social support, and life expectancy. Users can hover over cells to see specific correlation values, and clicking a cell will drill down into a scatter plot view.

Country Circle Panels: Side panels with circles representing the top 10 happiest countries. Hovering over each circle displays additional country-specific information (e.g., happiness score, GDP, social support). This serves as a quick reference to understand which countries rank highest and their respective happiness factors.

Scatter Plot View: Upon clicking a heatmap cell, a scatter plot appears, showing the relationship between two happiness factors for all countries. This allows for deeper exploration of the relationships between individual factors.

You can view a prototype of the project’s design.

Prototypes
I’ve created a proof-of-concept visualization of this data. It currently includes a heatmap for visualizing correlations between happiness factors for the top 10 countries and an interactive scatter plot that allows for further exploration of these relationships.

Here’s a link to my working visualization in VizHub. This shows the heatmap and scatter plot along with country flags for visual clarity and user interaction.

Open Questions
While the project has progressed smoothly, I have a few concerns regarding the future scope:

How can we ensure that the visual transitions between the heatmap and scatter plot remain fluid across different screen sizes?
How should we handle missing or incomplete data from certain countries to avoid skewing correlation results or visual anomalies?
