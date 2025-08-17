# AI Meeting Notes Summarizer - AI-notes-summarizer-frontend

This is the frontend of the **AI Meeting Notes Summarizer** application.  
It provides a clean and responsive interface for uploading/transcribing meeting notes and generating concise AI-powered summaries.

---

## 🚀 Features
- User-friendly interface for entering or uploading meeting notes.
- Real-time communication with backend API for summarization.
- Displays AI-generated summaries.

---

## 🛠️ Tech Stack
- **React.js**
- **Axios** for API calls
- **Tailwind CSS**
- **Create React App** 

---

## ⚙️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone AI-notes-summarizer-frontend
   cd AI-notes-summarizer-frontend

2. Install dependencies
   ```bash
   npm install

3. Create a .env file in the root folder with:
   ```bash
   REACT_APP_BACKEND_URL=your_hosted_backend_url

4. Run the development server
   ```bash
   npm start

5. API Communication
1. The frontend communicates with the backend REST API for:
     Submitting meeting notes
     Receiving AI-generated summaries

6. Build for Production
   ```bash
   npm run build

7. Deployment
   Deployed using Vercel
