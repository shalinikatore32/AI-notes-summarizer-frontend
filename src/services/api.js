import axios from "axios";

// Use Render backend in production, localhost in development
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Summarize transcript API
export const summarizeTranscript = async (transcript, prompt) => {
  try {
    const response = await API.post("/summarize", { transcript, prompt });
    return response.data;
  } catch (error) {
    console.error("Error in summarizeTranscript:", error);
    throw error;
  }
};

// ✅ Send email API
export const sendEmail = async (to, summary) => {
  try {
    const response = await API.post("/send-email", { to, summary });
    return response.data;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw error;
  }
};
