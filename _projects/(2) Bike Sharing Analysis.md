---
name: Bike Sharing Analysis
tools: [Exploratory Data Analysis, Data Visualization, Dashboard, Python, Streamlit]
image: 
description: 
---

# Bike Sharing Analysis

##

Imagine walking through a bustling city where bike-sharing stations are placed at every corner. Commuters rush to rent bikes in the morning, tourists leisurely explore the city in the afternoon, and fitness enthusiasts take advantage of the service in the evening. But what really drives these patterns? What factors influence bike-sharing demand?

In this project, I set out to answer these questions by analyzing Bike Sharing Orders data and developing an interactive dashboard to visualize key insights. The goal was to uncover trends in bike rentals and explore the impact of time, weather, and seasons on user behavior.

📂 **Dataset Source:** [Bike Sharing Dataset](https://www.kaggle.com/datasets/lakshmi25npathi/bike-sharing-dataset)  


## Data Wrangling: Preparing the Data for Analysis

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

With the cleaned dataset in place, I was ready to uncover patterns in bike rentals!

## Exploring the Data

With a refined dataset, I conducted an Exploratory Data Analysis (EDA) to identify trends and correlations. Three key questions guided the analysis:

### 



In this project, I conducted an analysis of **Bike Sharing Orders** data and developed an **interactive dashboard** to present the results in a clear and accessible way. This project aims to uncover key insights into bike rental patterns and provide valuable information to support decision-making.

To guide the analysis, I defined several business questions, including:

1. What are the daily bike rental patterns throughout the week, and how do they differ between weekdays and weekends?
2. Is there any correlation between weather conditions and the number of bike rentals?
3. How does the change of seasons affect the number of bike rentals?


## Data Wrangling & Preprocessing

The dataset was obtained from a public source https://www.kaggle.com/datasets/lakshmi25npathi/bike-sharing-dataset and required cleaning and transformation before analysis. Key preprocessing steps included:

Handling missing values and duplicates.
Converting date and time features into a structured format.
Encoding categorical variables such as season, weather conditions, and working day.














This project is part of the **Bangkit Academy 2024 Capstone Project**, where we developed an application called Talkee: Your Best Buddy to Learn Sign Language, created by our team C241-PS12. In this project, we collaborated across three learning paths: Machine Learning, Cloud Computing, and Mobile Development.

In this project, I was part of the **Machine Learning team**, where our main responsibility was to develop a BISINDO sign language gesture recognition model. 

This model aims to assist hearing individuals in learning sign language by recognizing and interpreting hand gestures, thereby promoting inclusivity and bridging the communication gap between the hearing and deaf communities.

This project was divided into three main objectives:
1. Create the dataset — A dataset comprising 33 classes, including alphabets and commonly used words, was developed to train the model.
2. Develop and compare models — We developed and compared the performance of three architectures: GRU, LSTM, and Conv-LSTM for BISINDO sign language gesture recognition.
3. Evaluate and test the model — Assessing the model's performance through evaluation and real-time testing.


## Dataset Creation

The first phase focused on creating a BISINDO sign language dataset with 33 classes, covering both letters and commonly used words. The letter classes consist of A to Z, while the word classes include frequently used words such as Halo (Hello), Perkenalkan (Introduce), Nama (Name), Saya (I or Myself), Senang (Nice), Bertemu (Meet), and Kamu (You).

![dataset-creation](https://github-production-user-asset-6210df.s3.amazonaws.com/114962318/420475399-1c8d5703-a4b2-40bf-b341-632686ee8f53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250307T194129Z&X-Amz-Expires=300&X-Amz-Signature=781c8b24b301f3ff2b390279a3350f94e1236adbc2bc1d850ff8ad79c4e7b7bf&X-Amz-SignedHeaders=host)

This **BISINDO sign language dataset** contains a total of **3,300 recordings**, with the following details:  
- 33 classes in total  
- 100 sequences per class  
- 30 frames per sequence  

The final dataset, used for model training, is stored in **.npy** format, containing **numerical keypoint data** extracted from hand landmarks. 

The complete dataset is available on Kaggle: [**Talkee: Bisindo Sign Language Dataset**](https://www.kaggle.com/datasets/niputukarismadewi/talkee-bisindo-sign-language-dataset/data).


## Model Development

In this phase, we focused on developing and training a deep learning model to recognize sign language gestures using three different architectures: GRU, LSTM, and ConvLSTM. By experimenting with these models, we aimed to identify the architecture that delivers the best performance for BISINDO sign language gesture recognition.


## Model Performace Evaluation

This final phase involved evaluating the model’s performance, particularly its ability to make real-time predictions using a webcam feed. After comprehensive testing, ConvLSTM was found to be the best-performing model, and therefore, it was selected as the final model for deployment.

![evaluation](https://github-production-user-asset-6210df.s3.amazonaws.com/114962318/420475356-10fed6d8-6f69-499e-b7cf-056188f41962.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250307T194146Z&X-Amz-Expires=300&X-Amz-Signature=22d7acdf469eeaaa9d43d8b90c9bdb9a5d630fe38319c0671029e00b11466624&X-Amz-SignedHeaders=host)


<p class="text-center">
{% include elements/button.html link="https://github.com/talkee-C241-PS12/machine-learning/" text="Learn More" %}
</p>