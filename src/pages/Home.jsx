import React, { useState } from "react";
import FileUpload from "../components/Fileupload";
import PromptInput from "../components/PromptInput";
import SummaryEditor from "../components/SummaryEditor";
import EmailForm from "../components/EmailForm";
import { summarizeTranscript } from "../services/api";

const Home = () => {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!transcript.trim()) {
      alert("Please upload a transcript first.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await summarizeTranscript(transcript, prompt);
      setSummary(res.summary); // ✅ fixed: no .data here
    } catch (err) {
      console.error("Error generating summary:", err);
      setError("⚠️ Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          AI Meeting Notes Summarizer
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Upload your transcript, add a custom prompt, and instantly generate a
          clean summary you can share.
        </p>

        <div className="space-y-6">
          {/* File Upload */}
          <FileUpload onUpload={setTranscript} />

          {/* Prompt Input */}
          <PromptInput prompt={prompt} setPrompt={setPrompt} />

          {/* Button */}
          <div className="text-center">
            <button
              onClick={handleSummarize}
              disabled={loading}
              className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transform transition duration-300 ease-in-out ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
              }`}
            >
              {loading ? "⏳ Generating..." : "🚀 Generate Summary"}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-center text-red-500 font-medium">{error}</p>
          )}
        </div>

        {/* Summary + Email */}
        {summary && (
          <div className="mt-8 space-y-6">
            <SummaryEditor summary={summary} setSummary={setSummary} />
            <EmailForm summary={summary} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
