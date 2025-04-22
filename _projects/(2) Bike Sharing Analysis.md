---
name: Bike Sharing Analysis
tools: [Exploratory Data Analysis, Data Visualization, Dashboard, Python, Streamlit]
image: https://github.com/user-attachments/assets/a5be049c-6210-4cbd-a5d4-10f3b82695c8
description: This project is the final submission for the 'Belajar Analisis Data dengan Python' class on Dicoding. It focuses on analyzing Bike Sharing Orders data and developing an interactive dashboard to visualize key insights.
---

# Bike Sharing Analysis

Imagine walking through a bustling city where bike-sharing stations are placed at every corner. Commuters rush to rent bikes in the morning, tourists leisurely explore the city in the afternoon, and fitness enthusiasts take advantage of the service in the evening. But what really drives these patterns? What factors influence bike-sharing demand?

In this project, I set out to answer these questions by analyzing Bike Sharing Orders data and developing an interactive dashboard to visualize key insights. The goal was to uncover trends in bike rentals and explore the impact of time, weather, and seasons on user behavior.

📂 **Dataset Source:** [Bike Sharing Dataset](https://www.kaggle.com/datasets/lakshmi25npathi/bike-sharing-dataset)  


## Data Wrangling

Before diving into analysis, I needed to ensure the data was clean and reliable. This involved three key steps:

### Gathering the Data
The dataset contained bike rental records with multiple features, including timestamps, weather conditions, temperature, humidity, and season indicators. Each record represented the number of bikes rented at a specific time, giving a detailed view of usage patterns.

### Assessing the Data
Once gathered, I examined the dataset for inconsistencies:
- Were there missing or duplicate entries?
- Did the recorded values align with real-world expectations?
- Were categorical variables properly encoded?

I found that while the dataset was well-structured, some features required transformation for better usability.

### Cleaning the Data
The final step was data cleaning, which involved:
- Handling missing or duplicate values.
- Converting categorical variables (e.g., season, weather) into numerical representations.
- Removing redundant or unnecessary features that did not contribute to the analysis.

With the cleaned dataset in place, I was ready to analyst patterns in bike rentals!

## Exploring the Data

With a refined dataset, I conducted an Exploratory Data Analysis (EDA) to identify trends and correlations. Three key questions guided the analysis:

1. What are the daily bike rental patterns throughout the week, and how do they differ between weekdays and weekends?
2. Is there any correlation between weather conditions and the number of bike rentals?
3. How does the change of seasons affect the number of bike rentals?


## Develop the Dashboard

To bring the insights to life, an interactive dashboard was developed using Streamlit. The dashboard allows users to explore various aspects of the bike sharing data, including trends in daily and hourly rentals, the impact of weather and seasons, as well as user behavior based on working days and holidays.

You can access and interact with the dashboard here:
🔗 [Bike Sharing Analysis Dashboard](https://bike-sharing-analysis-summary.streamlit.app/)  


<p class="text-center">
{% include elements/button.html link="https://github.com/mellisadmyn/bike-sharing-analysis" text="Learn More" %}
</p>