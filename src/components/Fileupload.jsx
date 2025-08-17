import React from "react";

const FileUpload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (onUpload) {
        onUpload(event.target.result);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-2xl shadow-sm bg-white max-w-md mx-auto">
      <label
        htmlFor="file-upload"
        className="block font-medium text-gray-700 mb-2"
      >
        Upload Transcript
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-600 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-medium
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100
                   cursor-pointer"
      />
    </div>
  );
};

export default FileUpload;
