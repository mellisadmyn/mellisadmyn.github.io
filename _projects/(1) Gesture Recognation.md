---
name: Bisindo Gesture Recognation Model
tools: [Python, Tensorflow, Mediapipe, Deep Learning]
image: https://github.com/user-attachments/assets/e0bc413a-4178-4992-937b-dfabc1a5e978)

description: This project is part of the Bangkit Academy 2024 Capstone Project. It aims to develop a dataset of 33 classes, including alphabets and commonly used words. The project also compares the performance of GRU, LSTM, and Conv-LSTM models for BISINDO sign language gesture recognition.
---

# Bisindo Gesture Recognation Model

This project is part of the Bangkit Academy 2024 Capstone Project, where we developed an application called Talkee: Your Best Buddy to Learn Sign Language, created by our team C241-PS12. In this project, we collaborated across three learning paths: Machine Learning, Cloud Computing, and Mobile Development.

In this project, I took part as a member of the Machine Learning team, where our primary responsibility was to develop a BISINDO sign language gesture recognition model.

This project was divided into three main objectives:
1. Create the dataset — A dataset comprising 33 classes, including alphabets and commonly used words, was developed to train the model.
2. Develop and compare models — We developed and compared the performance of three architectures: GRU, 3. LSTM, and Conv-LSTM for BISINDO sign language gesture recognition.
Evaluate and test the model — Assessing the model's performance through evaluation and real-time testing.


## Dataset Creation

The first phase focused on creating a BISINDO sign language dataset with 33 classes, covering both letters and commonly used words. The letter classes consist of A to Z, while the word classes include frequently used words such as Halo (Hello), Perkenalkan (Introduce), Nama (Name), Saya (I or Myself), Senang (Nice), Bertemu (Meet), and Kamu (You).

![dataset-creation](https://github.com/user-attachments/assets/80d1b5ec-8987-4063-a3f8-72a228253426)

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

![evaluation](https://github.com/user-attachments/assets/519526e8-11f8-4559-929e-8eb762bd4238)


<p class="text-center">
{% include elements/button.html link="https://github.com/talkee-C241-PS12/machine-learning/" text="Learn More" %}
</p>