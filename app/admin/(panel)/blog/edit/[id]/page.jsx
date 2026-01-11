"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CONFIG from "../../../../../constance";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    category: "",
    image: "",
    content: "",
    read_time: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Fetch current blog 
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          // `http://localhost:5000/api/blog/id/${id}`
          `${CONFIG.API_BASE_URL}/blog/id/${id}`
        );
        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to load blog");
          return;
        }

        setForm({
          title: data.title || "",
          slug: data.slug || "",
          author: data.author || "",
          category: data.category || "",
          image: data.image || "",
          content: data.content || "",
          read_time: data.read_time || "",
        });
      } catch (err) {
        setError("Server error",err);
      }
    };

    fetchBlog();
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
  return setError("Session expired. Please login again.");
}


        const res = await fetch(`${CONFIG.API_BASE_URL}/blog/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
        });


      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Update failed");
        return;
      }

      router.push("/admin/blog/manageblog");
    } catch (err) {
      setError("Server error",err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  setForm((prev) => ({
    ...prev,
    image: file,
  }));
};


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-1 font-medium">Slug</label>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
          />
        </div>

        {/* Image */}
        <div>
        <label className="block mb-1 font-medium">Upload Image</label>
        <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-400 rounded px-4 py-2 bg-white"
        />
        </div>


        {/* Read Time */}
        <div>
          <label className="block mb-1 font-medium">Read Time (min)</label>
          <input
            name="read_time"
            value={form.read_time}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            name="content"
            rows={8}
            value={form.content}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded px-4 py-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
}
