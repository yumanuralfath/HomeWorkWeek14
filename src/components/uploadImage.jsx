"use client";

import { imageBook } from "@/fetcher/books";
import { useState } from "react";

export const UploadForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      await imageBook(file);
      setFile(null);
      setError(null); // Reset error state
    } catch (err) {
      setError(err.message || "An error occurred while uploading.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};
