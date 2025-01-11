# Team Gen-X Plan

## **Pre-trained and Fine-tuned Resources**

### **Pre-trained Resources**
These are being directly used without additional fine-tuning:  

#### **General Chatbot Functionality**
- **Mistral**:  
  - Generates general responses for non-medical queries.

#### **Feature Extraction**
- **BERT-based Emotion Classifier**:  
  - Identifies user emotions like urgency or stress.
- **Gemma**:
  - For Highend Text Based Classification Writing Emails.
- **Med7**:  
  - Extracts medical terms (e.g., diseases, symptoms, medicines).
- **UMLS (Unified Medical Language System)**:  
  - Maps medical concepts to standardized terms.
- **TF-IDF**:  
  - Extracts keywords from user queries to associate with symptoms or medicines.
- **DrugBank API**:  
  - Provides drug-related information like dosage and interactions.
- **Google Search API**:  
  - Enriches responses by searching for medicines and symptoms.

#### **Document Processing**
- **Tesseract OCR**:  
  - Extracts text from scanned images (e.g., prescriptions).
- **PyPDF2 and docx**:  
  - Extract text from PDF and DOCX files.
- **DrugBank and RxNorm**:  
  - Verifies dosage and drug details.

#### **Map and Location Services**
- **Geolocation API**:  
  - Fetches user location for nearest doctor searches.
- **Leaflet.js**:  
  - Displays doctor locations on an interactive map.

#### **Email Sending**
- **SMTP.js**:  
  - Sends emails with patient details and attachments.

---

### **Fine-tuned Resources**
These are models you’re customizing for specific medical chatbot tasks:

#### **Medical Responses**
- **BioGPT**:  
  - Fine-tuned for medical knowledge, symptom assessment, and treatment information.
- **ClinicalBERT**:  
  - Fine-tuned for understanding medical language in conversations.
- **PubMedBERT**:  
  - Fine-tuned for biomedical text understanding and research-based content.

#### **Conversation Summarization**
- **BioGPT**:  
  - Fine-tuned to summarize conversations for doctor emails and PDF generation.

#### **Prescription Summarization**
- **BioGPT**:  
  - Fine-tuned for summarizing medical prescriptions when requested.

#### **Doctor Recommendations**
- **UMLS**:  
  - Pre-trained, but used to map user symptoms to doctor specialties.

---

## **Summary Table**

| **Task**                          | **Pre-trained**                   | **Fine-tuned**            |
|-----------------------------------|-----------------------------------|---------------------------|
| General Chatbot                   | Mistral                          | None                      |
| Medical Knowledge Base            | None                              | BioGPT, ClinicalBERT, PubMedBERT |
| Symptom Assessment                | None                              | BioGPT, ClinicalBERT, PubMedBERT |
| Treatment Information             | None                              | BioGPT, ClinicalBERT, PubMedBERT |
| Emotion Handling                  | BERT-based Emotion Classifier     | None                      |
| Medical Term Extraction           | Med7                              | None                      |
| Medical Concept Mapping           | UMLS                              | None                      |
| Keyword Extraction                | TF-IDF                            | None                      |
| Drug Information                  | DrugBank API                      | None                      |
| Prescription Summarization        | None                              | BioGPT                    |
| Conversation Summarization        | None                              | BioGPT                    |
| Doctor Recommendations            | Geolocation API, Leaflet.js, UMLS| None                      |
| Email Sending                     | SMTP.js                           | None                      |

---

## **Details by Section**

### **1. Pre-trained Models**  
- Mistral for general chatbot responses.  
- Med7, UMLS, and DrugBank API for feature extraction and medical information processing.  
- Tesseract OCR, PyPDF2, and docx for document processing.  
- Geolocation API and Leaflet.js for doctor mapping.  
- SMTP.js for email generation.  

### **2. Fine-tuned Models**  
- Fine-tuning **BioGPT, ClinicalBERT, and PubMedBERT** for medical knowledge, symptom assessment, and treatment information.  
- Fine-tuning **BioGPT** for prescription summarization and conversation summarization.  

---

