---
name: Drought Forecasting
tools: [Python, LSTM, Forecasting, Climate Data]
image: https://github.com/user-attachments/assets/a36bc2f4-ffc8-4a14-9702-5509efb4cd2f
description: This undergraduate thesis project focused on developing two drought forecasting models based on the Long Short-Term Memory (LSTM) architecture, utilizing SPI and SPEI as main drought indicators.
---

# Drought Forecasting - Undergraduate Thesis Project

This research aims to develop a drought forecasting model using historical climate data, with a focus on Northeast Thailand—a region heavily dependent on natural rainfall, making its agricultural production highly susceptible to climate variability. Reliable drought forecasting is crucial for early warning systems and improved preparedness.

To address this, a deep learning approach using Long Short-Term Memory (LSTM) neural networks was employed to forecast two widely used drought indices: the Standardized Precipitation Index (SPI-3) and the Standardized Precipitation Evapotranspiration Index (SPEI-3), both on a three-month timescale. The indices were calculated from 40 years (1981–2020) of monthly climate data.

Model performance was evaluated based on three key aspects of drought: **intensity**, **spatial variation**, and **category**. Quantitative evaluation of drought intensity was conducted using Mean Absolute Error (MAE), Root Mean Square Error (RMSE), Mean Bias Error (MBE), and the Coefficient of Determination (R²). The results showed strong predictive capabilities, with R² scores of 0.95 for SPI and 0.93 for SPEI, and RMSE values of 0.22 and 0.27, respectively.

Spatial analysis revealed the geographical variation in drought patterns across the study area. Drought categories—such as Light, Moderate, and Severe—were classified and evaluated using the Receiver Operating Characteristic Area Under the Curve (ROC-AUC), with AUC values of 0.83 (SPI) and 0.81 (SPEI). Although the model performed well in identifying common drought categories, it exhibited limitations in recognizing rare events such as Extreme Drought. Nevertheless, misclassifications often remained within neighboring categories, preserving useful insight for decision-making.

Overall, the proposed model demonstrates promising potential for operational drought forecasting, offering practical insights to help farmers and policymakers anticipate and mitigate the impacts of dry spells. Future work could aim to extend the forecasting horizon beyond one month and improve the model’s accuracy in predicting extreme drought events.

📄 Repository: [https://repo.undiksha.ac.id/23870/](https://repo.undiksha.ac.id/23870/)

<p class="text-center">
{% include elements/button.html link="https://github.com/mellisadmyn/drought-forecasting" text="Learn More" %}
</p>