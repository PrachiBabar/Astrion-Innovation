"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, ArrowRight, TrendingUp, SearchIcon } from "lucide-react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // FETCH BLOGS
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/blog", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          cache: "no-store",
        });

        const data = await res.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // FILTER LOGIC
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(blogs.map((b) => b.category).filter(Boolean))];
  const featuredPost = filteredBlogs[0];

  const getImage = (image) => {
    if (!image) return "/placeholder.jpg";
    if (image.startsWith("http")) return image;
    return `http://localhost:5000/uploads/${image.split("/").pop()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <TrendingUp size={20} className="text-teal-400" />
            <span className="text-sm text-teal-400 font-semibold">Latest Insights</span>
          </div>

          <h1 className="text-5xl font-bold gradient-text mb-4">Our Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials & industry trends from our experts.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-12">
         <div className="relative max-w-2xl mx-auto">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 z-10"/>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl glass-strong text-gray-300"
        />
      </div>


          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === cat ? "gradient-bg text-white" : "glass text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED BLOG */}
        {featuredPost && (
          <div className="mb-16 glass-strong rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <Image
                  src={getImage(featuredPost.image)}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover"
                  unoptimized
                />
              </div>

              <div className="md:w-1/2 p-8">
                <span className="px-3 py-1 gradient-bg rounded-full text-sm">
                  {featuredPost.category}
                </span>

                <h3 className="text-3xl font-bold mt-4 mb-4">{featuredPost.title}</h3>

                <p className="text-gray-300 mb-6">
                  {featuredPost.content?.slice(0, 150)}...
                </p>

                <Link
                  href={`/blogDetail/${featuredPost.slug}`}
                  className="gradient-bg px-6 py-3 rounded-full inline-flex items-center gap-2"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="glass-strong rounded-2xl overflow-hidden hover:scale-[1.03] transition"
            >
              <div className="relative w-full h-72">
                <Image
                  src={getImage(blog.image)}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="h-72 w-full object-cover rounded-t-2xl"
                  unoptimized
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Clock size={14} /> {blog.read_time || "5 min read"}
                  <Calendar size={14} />
                  {new Date(blog.created_at).toDateString()}
                </div>

                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>

                <Link
                  href={`/blogDetail/${blog.slug}`}
                  className="text-teal-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
