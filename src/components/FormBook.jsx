"use client";

import { createBook, imageBook } from "@/fetcher/books";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";

export const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (uploadSuccess) {
      // window.location.reload();
    }
  }, [uploadSuccess]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      setLoading(true);
      const imageUrl = await imageBook(file);
      const bookResponse = await createBook({
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages),
        image: imageUrl,
      });

      if (!bookResponse || bookResponse.status !== 200) {
        throw new Error("Failed to create book");
      }
      setTitle("");
      setAuthor("");
      setYear("");
      setPublisher("");
      setPages("");
      setFile(null);
      setUploadSuccess(true);
      setError(null);

      setTimeout(() => {
        setUploadSuccess(false);
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error creating book:", error);
      setError(error.message || "An error occurred while uploading.");
      setUploadSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadSuccess(false);
  };

  return (
    <div>
      <form onSubmit={handleCreate} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-white">
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-white">
            Author:
          </label>
          <input
            type="text"
            id="author"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input input-bordered w-full max-w-xs text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="publisher" className="block text-white">
            Publisher:
          </label>
          <input
            type="text"
            id="publisher"
            placeholder="Enter Author Name"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="input input-bordered w-full max-w-xs text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="year" className="block text-white">
            Publish Year:
          </label>
          <input
            type="number"
            id="year"
            placeholder="Enter Publish Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-black input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div>
          <label htmlFor="pages" className="block text-white">
            Number of Pages:
          </label>
          <input
            type="number"
            id="pages"
            placeholder="Enter Number of Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="text-black input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-white">
            Upload Image:
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="input-file input input-bordered w-full max-w-xs"
            required
          />
        </div>
        {error && (
          <div role="alert" className="alert alert-error text-white">
            <span>Error! {error}</span>
          </div>
        )}
        {uploadSuccess && (
          <div role="alert" className="alert alert-success text-white">
            <span>File Upload Successful</span>
          </div>
        )}
        <button
          type="submit"
          className={`btn btn-outline btn-accent text-white rounded-lg p-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Book"}
        </button>
      </form>
    </div>
  );
};
