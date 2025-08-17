import React, { useState } from "react";
import { sendEmail } from "../services/api";

const EmailForm = ({ summary }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      const res = await sendEmail(email, summary);
      setMessage("✅ " + (res.data?.message || "Email sent successfully!"));
    } catch (err) {
      setMessage(
        "❌ Failed to send email: " +
          (err.response?.data?.error || err.message || "Unknown error")
      );
    }
  };

  return (
    <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        📧 Share Summary via Email
      </h3>

      {/* Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Recipient Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSend}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        🚀 Send Email
      </button>

      {/* Message */}
      {message && (
        <p
          className={`mt-3 text-sm text-center font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
