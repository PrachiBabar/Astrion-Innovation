"use client";

import { useState, useEffect } from "react";
// import AdminLayout from "../../layout";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";


export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewBlog, setViewBlog] = useState(null);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blog", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/blog/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1> */}
      <div className="flex items-center justify-between mb-6 ">
  <h1 className="text-2xl font-bold ">Manage Blogs</h1>

  <Link
    href="/admin/blog/add"
    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition"
  >
    + Add Blog
  </Link>
</div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 bg-white rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-200">ID</th>
                <th className="px-4 py-2 border border-gray-200">Title</th>
                <th className="px-4 py-2 border border-gray-200">Category</th>
                <th className="px-4 py-2 border border-gray-200">Author</th>
                <th className="px-4 py-2 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="text-center">
                  <td className="px-4 py-2 border border-gray-200">{blog.id}</td>
                  <td className="px-4 py-2 border border-gray-200">{blog.title}</td>
                  <td className="px-4 py-2 border border-gray-200">{blog.category}</td>
                  <td className="px-4 py-2 border border-gray-200">{blog.author}</td>
                  <td className="px-4 py-3 border border-gray-200 flex items-center justify-center gap-3">
                  <button onClick={() => setViewBlog(blog)} className="text-blue-500">
                    <FiEye />
                  </button>
                  <a href={`/admin/blog/edit/${blog.id}`} className="text-green-500">
                    <FiEdit />
                  </a>
                  <button onClick={() => handleDelete(blog.id)} className="text-red-500">
                    <FiTrash2 />
                  </button>
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Modal */}
    {viewBlog && (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded w-full max-w-2xl relative max-h-[90vh] overflow-y-auto p-6">
      {/* Close button */}
      <button
        onClick={() => setViewBlog(null)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">{viewBlog.title}</h2>

      {/* Image */}
      {viewBlog.image && (
        <Image
          src={`http://localhost:5000${viewBlog.image}`}
          alt={viewBlog.title}
          width={400}
          height={300}
          className="mb-4 object-cover rounded w-full"
          unoptimized
        />
      )}

      {/* Info */}
      <p className="mb-2"><strong>Author:</strong> {viewBlog.author}</p>
      <p className="mb-2"><strong>Category:</strong> {viewBlog.category}</p>
      <p className="mb-2"><strong>Read Time:</strong> {viewBlog.read_time}</p>

      {/* Content */}
      <p>{viewBlog.content}</p>
    </div>
  </div>
)}

    </>
  );
}
