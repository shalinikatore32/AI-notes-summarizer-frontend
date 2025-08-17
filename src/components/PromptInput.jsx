import React from "react";

const PromptInput = ({ prompt, setPrompt }) => {
  return (
    <div className="p-4 border rounded-xl shadow-sm mt-4 bg-white">
      <label
        htmlFor="customPrompt"
        className="block text-sm font-medium text-gray-700"
      >
        Custom Prompt
      </label>
      <input
        id="customPrompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., Summarize in bullet points"
        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
    </div>
  );
};

export default PromptInput;
