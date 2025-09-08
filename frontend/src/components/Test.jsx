import React, { useState } from "react";

export default function ProfilePictureUploader({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview image before upload
    setPreview(URL.createObjectURL(file));

    // Pass file back to parent (for uploading to server)
    onUpload(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Preview Image */}
      {preview ? (
        <img
          src={preview}
          alt="Profile Preview"
          className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* File Input */}
      <label className="cursor-pointer bg-indigo-600 text-white px-3 py-1 rounded">
        Choose File
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
