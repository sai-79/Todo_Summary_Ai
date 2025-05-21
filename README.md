# 🧠 Todo Summary Assistant

A full-stack Todo Manager that lets users:

- ✅ Create, read, and delete todos
- 🧠 Summarize their todo list using a real LLM (OpenAI)
- 🔔 Send that summary to a Slack channel via Incoming Webhooks

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: MySQL (local)
- **LLM Integration**: Cohere API
- **Slack Integration**: Incoming Webhooks

---

## 📦 Features

- MySQL persistence for todos
- RESTful API endpoints
- Real LLM summary using Cohere Ai
- Summary is posted to Slack

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sai-79/Todo_Summary_Ai.git
cd Todo_Summary_Ai
cd backend-services
npm install express mysql2 dotenv axios cohere-ai nodemon
nodemon index.js

```

### create .env file

## Add your local database configuration

## Your Personal Cohere-ai API KEY

## Your SlacK WebHook URL

```bash
cd ..
cd frontend-services
npm install
npm install axios
npm start
```

### create .env file

## add Your localhost Backend API
