---
name: Bisindo Gesture Recognation Model
tools: [Deep Learning, Python, Tensorflow, Mediapipe, OpenCV]
image: https://github-production-user-asset-6210df.s3.amazonaws.com/114962318/420475181-f9cf681a-785d-445a-9816-e328166fd829.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250307%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250307T194058Z&X-Amz-Expires=300&X-Amz-Signature=02c4ea1ba42055c6e7053b710bcb593ccb868a91af1905e2674c49d824839ddb&X-Amz-SignedHeaders=host
description: This project is part of the Bangkit Academy 2024 Capstone Project. It aims to develop a dataset of 33 classes (alphabets and 7 commonly used words) and compares the performance of GRU, LSTM, and Conv-LSTM models for BISINDO sign language gesture recognition.
---

# Bisindo Gesture Recognation Model

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