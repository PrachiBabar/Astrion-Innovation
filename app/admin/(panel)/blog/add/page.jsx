"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";

export default function AddBlog() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async () => {
    if (!title || !slug || !content) {
      setError("Title, slug and content are required");
      return;
    }

    if (!token) {
      setError("You must be logged in");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("read_time", readTime || "5 min read");
      if (imageFile) formData.append("image", imageFile);

      const res = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
        body: formData,
      });
      console.log("TOKEN BEING SENT:", token);


      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to create blog");
      } else {
        alert("Blog created successfully");
        router.push("/admin/blog/manageblog"); 
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Add Blog</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="p-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Slug"
          className="p-3 border rounded"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author (optional)"
          className="p-3 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="p-3 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="p-3 border rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="text"
          placeholder="Read Time (e.g. 5 min read)"
          className="p-3 border rounded"
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
        />

        <div>
          <label className="block mb-1">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border rounded"
          />
          {/* {preview && (
            <Image src={preview} alt="Preview" className="mt-2 max-h-48 rounded" />
          )} */}
          {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 max-h-48 rounded"
          />
        )}

        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 rounded mt-4 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </div>
    </div>
  );
}
