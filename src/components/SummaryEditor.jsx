import React from "react";

const SummaryEditor = ({ summary, setSummary }) => {
  return (
    <div className="p-4 border rounded-2xl mt-4 shadow-sm bg-white">
      <label
        htmlFor="summary-editor"
        className="block text-gray-700 font-medium mb-2"
      >
        ✏️ Generated Summary (Editable)
      </label>
      <textarea
        id="summary-editor"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full h-40 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-800"
        placeholder="Edit the generated summary here..."
      />
    </div>
  );
};

export default SummaryEditor;
