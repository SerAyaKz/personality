"""
import streamlit as st
import pandas as pd
from transformers import pipeline
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Download necessary NLTK resources
nltk.download('stopwords')
nltk.download('wordnet')

# Initialize the zero-shot classification pipeline
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Streamlit interface setup
st.title("Resume-based Personality Prediction by Serikov Ayanbek")
resume_text = st.text_area("Enter Resume Text Here", height=300)

# Load data from Excel
data = pd.read_excel("ResponseTest.xlsx")
data_open = pd.read_excel("ResponseOpen.xlsx")

# Define preprocessing function
def preprocess_text(text):
    text = re.sub(r'\W', ' ', str(text))
    text = text.lower()
    text = re.sub(r'\s+[a-z]\s+', ' ', text)
    text = re.sub(r'^[a-z]\s+', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()
    tokens = text.split()
    tokens = [lemmatizer.lemmatize(word) for word in tokens if word not in stop_words]
    return ' '.join(tokens)

# Prepare the data for prediction
data['processed_text'] = data[['CV/Resume'] + [f'Q{i}' for i in range(1, 37)]].agg(lambda x: ', '.join(x), axis=1).apply(preprocess_text)
data_open['processed_text_open'] = data_open[['Demo_F', 'Question']].agg(' '.join, axis=1).apply(preprocess_text)
data_open['processed_text_mopen'] = data_open[['Demo_M', 'Question']].agg(' '.join, axis=1).apply(preprocess_text)

labels = ["Peacemaker", "Loyalist", "Achiever", "Reformer", "Individualist", "Helper", "Challenger", "Investigator", "Enthusiast"]

# Function to predict personality and log the predictions
def predict_and_log(data, prediction_column, process_text_column, true_label_column=None, custom_labels=None):
    for index, row in data.iterrows():
        processed_text = row[process_text_column]
        if custom_labels:
            result = classifier(processed_text, [row[label] for label in custom_labels])
        else:
            result = classifier(processed_text, labels)
        highest_score_label = result['labels'][0]
        data.at[index, prediction_column] = highest_score_label
        true_label = row[true_label_column] if true_label_column else 'Not available'
        data_id = row['id']
        logging.info(f"Row {data_id}: True Label - {true_label}, {prediction_column} - {highest_score_label}")

# Predict and log results for each DataFrame
# predict_and_log(data, 'Predicted', 'processed_text', true_label_column='True_label', custom_labels=['MAX1', 'MAX2', 'MAX3'])
predict_and_log(data_open, 'Predicted_F', 'processed_text_open', true_label_column='True_label')
predict_and_log(data_open, 'Predicted_M', 'processed_text_mopen', true_label_column='True_label')

# Optionally display a confirmation message 
st.write("Predictions have been logged. Check your logs for details.")

import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, confusion_matrix
from sklearn.preprocessing import LabelEncoder


# Load data
data = pd.read_excel("ResponseOpenPredicted.xlsx")
st.title("Resume-based Personality Prediction by Serikov Ayanbek")

# Function to calculate metrics
def calculate_metrics(true_labels, predicted_labels):
    accuracy = accuracy_score(true_labels, predicted_labels)
    precision, recall, f1_score, _ = precision_recall_fscore_support(true_labels, predicted_labels, average='weighted')
    return accuracy, precision, recall, f1_score

# Metrics Calculation
accuracy_f, precision_f, recall_f, f1_score_f = calculate_metrics(data['True_label'], data['Predicted_F'])
accuracy_m, precision_m, recall_m, f1_score_m = calculate_metrics(data['True_label'], data['Predicted_M'])

# Encode labels for better visualization
le = LabelEncoder()
data['True_label_encoded'] = le.fit_transform(data['True_label'])
data['Predicted_F_encoded'] = le.transform(data['Predicted_F'])
data['Predicted_M_encoded'] = le.transform(data['Predicted_M'])

# Plotting function for confusion matrices
def plot_confusion_matrix(true_labels, predicted_labels, title):
    conf_matrix = confusion_matrix(true_labels, predicted_labels)
    fig, ax = plt.subplots()
    sns.heatmap(conf_matrix, annot=True, fmt="d", cmap="Blues", ax=ax,
                xticklabels=le.classes_, yticklabels=le.classes_)
    plt.title(title)
    plt.xlabel('Predicted Labels')
    plt.ylabel('True Labels')
    st.pyplot(fig)

# Plotting function for distribution of predictions
def plot_predictions_distribution(data, column, title):
    fig, ax = plt.subplots()
    sns.countplot(x=column, data=data, palette="viridis")
    plt.title(title)
    plt.xlabel('Predicted Labels')
    plt.ylabel('Count')
    plt.xticks(rotation=45)
    ax.set_xticklabels(le.classes_)
    plt.subplots_adjust(bottom=0.2)
    st.pyplot(fig)

# Streamlit app structure
st.title('Model Performance Evaluation')

st.subheader('Performance Metrics')
st.write(f"Accuracy for Predicted_F: {accuracy_f:.2%}")
st.write(f"Precision for Predicted_F: {precision_f:.2%}")
st.write(f"Recall for Predicted_F: {recall_f:.2%}")
st.write(f"F1-Score for Predicted_F: {f1_score_f:.2%}")
st.write(f"Accuracy for Predicted_M: {accuracy_m:.2%}")
st.write(f"Precision for Predicted_M: {precision_m:.2%}")
st.write(f"Recall for Predicted_M: {recall_m:.2%}")
st.write(f"F1-Score for Predicted_M: {f1_score_m:.2%}")

st.subheader('Confusion Matrices')
plot_confusion_matrix(data['True_label_encoded'], data['Predicted_F_encoded'], 'Confusion Matrix for Predicted_F')
plot_confusion_matrix(data['True_label_encoded'], data['Predicted_M_encoded'], 'Confusion Matrix for Predicted_M')

st.subheader('Distribution of Prediction Results')
st.write("Distribution for Predicted_F")
plot_predictions_distribution(data, 'Predicted_F_encoded', 'Distribution of Predictions for Female Demographic')
st.write("Distribution for Predicted_M")
plot_predictions_distribution(data, 'Predicted_M_encoded', 'Distribution of Predictions for Male Demographic')
"""
import streamlit as st
from transformers import pipeline
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
nltk.download('stopwords')
nltk.download('wordnet')

# Initialize the zero-shot classification pipeline
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Define the candidate labels according to the Enneagram types
default_labels = ["Peacemaker", "Loyalist", "Achiever", "Reformer", "Individualist", "Helper", "Challenger", "Investigator", "Enthusiast"]

# Streamlit interface
st.title("Resume-based Personality Prediction")
resume_text = st.text_area("Enter Resume Text Here", height=300)

# User-defined labels option
user_labels = st.text_input("Enter custom labels separated by comma (optional)")
labels = user_labels.split(',') if user_labels else default_labels

# Prediction confidence threshold
confidence_threshold = st.slider("Confidence Threshold", 0.0, 1.0, 0.5)

if st.button("Predict Personality"):
    # Text Preprocessing
    def preprocess_text(text):
        text = re.sub(r'\W', ' ', str(text))
        text = text.lower()
        text = re.sub(r'\s+[a-z]\s+', ' ', text)
        text = re.sub(r'^[a-z]\s+', ' ', text) 
        text = re.sub(r'\s+', ' ', text)
        stop_words = set(stopwords.words('english'))
        lemmatizer = WordNetLemmatizer()
        tokens = text.split()
        tokens = [lemmatizer.lemmatize(word) for word in tokens if word not in stop_words]
        return ' '.join(tokens)

    processed_text = preprocess_text(resume_text)
    
    # Make prediction
    result = classifier(processed_text, labels)
    
    # Display the results
    st.write("Predictions (above confidence threshold):")
    displayed = False
    for label, score in zip(result['labels'], result['scores']):
        if score >= confidence_threshold:
            st.write(f"{label}: {score*100:.2f}%")
            displayed = True
    if not displayed:
        st.write("No predictions exceed the confidence threshold.")
        """
import streamlit as st
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

# Initialize the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained('facebook/bart-large-mnli')
model = AutoModelForSequenceClassification.from_pretrained('facebook/bart-large-mnli')

# Move model to appropriate device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# Streamlit app
def main():
    st.title("Natural Language Inference with BART")

    # Text input for premise and hypothesis
    premise = st.text_area("Enter the premise:", value="", height=150)
    hypothesis = st.text_input("Enter the hypothesis:")

    if st.button("Analyze"):
        if premise and hypothesis:
            # Tokenize and encode the premise and hypothesis
            inputs = tokenizer.encode(premise, hypothesis, return_tensors='pt', truncation_strategy='only_first').to(device)

            # Model inference
            with torch.no_grad():
                logits = model(inputs)[0]

            # Calculate probabilities
            entail_contradiction_logits = logits[:, [0, 2]]
            probs = entail_contradiction_logits.softmax(dim=1)
            prob_label_is_true = probs[:, 1].item()

            # Display results
            st.write(f"Probability of Entailment: {prob_label_is_true:.4f}")
        else:
            st.error("Please enter both a premise and a hypothesis.")

if __name__ == "__main__":
    main()
"""
