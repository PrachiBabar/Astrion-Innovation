// "use client";

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { Calendar, Clock, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";


// const blogPosts = [
//   {
//     id: 1,
//     title: "AI-Powered Web Development: How Developers Are Working Smarter in 2025",
//     slug: "ai-powered-web-development-2025",
//     author: "Tech Desk",
//     date: "January 18, 2025",
//     readTime: "9 min read",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     content: `
//         AI is revolutionizing web development in 2025 like never before.

//         Modern developers are using AI-powered tools to:
//         • Generate clean, optimized code
//         • Detect bugs early
//         • Improve performance automatically
//         • Write unit and integration tests

//         Tools like GitHub Copilot, ChatGPT, and AI-powered IDEs are significantly
//         reducing development time while increasing code quality.

//         AI is no longer optional — it’s becoming a core skill for developers.
//             `
//   },
//   {
//     id: 2,
//     title: "Next.js 15 & React Server Components: What You Must Know",
//     slug: "nextjs-15-react-server-components",
//     author: "React Experts",
//     date: "January 14, 2025",
//     readTime: "7 min read",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
//     content: `
// Next.js 15 brings major improvements in performance and scalability.

// Key highlights:
// • Enhanced React Server Components
// • Faster page rendering
// • Reduced JavaScript bundle size
// • Improved SEO by default

// React Server Components allow rendering heavy logic on the server,
// making apps faster and more efficient.

// Next.js is now the preferred framework for production-grade web apps.
//     `
//   },
//   {
//     id: 3,
//     title: "Capacitor vs Flutter vs React Native: Best Choice in 2025?",
//     slug: "capacitor-vs-flutter-vs-react-native-2025",
//     author: "Mobile Dev Team",
//     date: "January 10, 2025",
//     readTime: "8 min read",
//     category: "Mobile Development",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     content: `
// Choosing the right cross-platform framework is crucial in 2025.

// Comparison:
// • Capacitor – Best for web-first apps using React / Angular
// • React Native – Near-native performance with JavaScript
// • Flutter – Powerful UI but heavier learning curve

// Capacitor is ideal for Next.js and React developers,
// while Flutter is preferred for custom UI-heavy applications.

// Your choice should depend on team skills and project requirements.
//     `
//   },
//   {
//     id: 4,
//     title: "UI/UX Trends of 2025: Designing for AI, Motion & Micro-Interactions",
//     slug: "ui-ux-trends-2025",
//     author: "Design Studio",
//     date: "January 7, 2025",
//     readTime: "6 min read",
//     category: "Design",
//     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
//     content: `
// UI/UX design in 2025 focuses heavily on experience and emotion.

// Top trends include:
// • AI-driven personalization
// • Smooth micro-interactions
// • Motion-based storytelling
// • Dark mode by default

// Design is no longer just about looks — it’s about usability,
// accessibility, and emotional connection with users.
//     `
//   },
//   {
//     id: 5,
//     title: "Is Web3 Still Relevant in 2025? Reality vs Hype",
//     slug: "web3-relevance-2025",
//     author: "Industry Analyst",
//     date: "January 3, 2025",
//     readTime: "5 min read",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
//     content: `
// Web3 promised decentralization, but adoption has been slower than expected.

// Reality in 2025:
// • Blockchain is useful for finance & identity
// • NFTs are stabilizing
// • Web3 is evolving, not dying

// The hype is fading, but practical use cases are emerging.
// Web3 is shifting from buzzwords to real-world value.
//     `
//   },
//   {
//     id: 6,
//     title: "Cybersecurity for Developers: Must-Follow Practices in 2025",
//     slug: "cybersecurity-for-developers-2025",
//     author: "Security Team",
//     date: "December 30, 2024",
//     readTime: "7 min read",
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//     content: `
// Security is a top priority for developers in 2025.

// Essential practices:
// • Secure authentication & authorization
// • Protect APIs with rate limiting
// • Use HTTPS everywhere
// • Prevent SQL Injection & XSS

// Cybersecurity is not optional — it must be integrated
// into development from day one.
//     `
//   }
// ];


// export default function BlogDetailsPage() {
//   const { slug } = useParams();
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch("/api/blogs");
//         console.log(res)
//         const data = await res.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Failed to fetch blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const blog = blogPosts.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen blog-bg text-white py-20 px-4">
//       <div className="max-w-4xl mx-auto">

//         {/* Back */}
//         <Link
//           href="/blog"
//           className="flex items-center gap-2 text-teal-400 mb-6"
//         >
//           <ArrowLeft size={18} /> Back to Blog
//         </Link>

//         {/* Image */}
//         <div className="rounded-2xl overflow-hidden mb-8">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             width={900}
//             height={500}
//             className="w-full h-96 object-cover"
//           />
//         </div>

//         {/* Meta */}
//         <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
//           <Clock size={14} /> {blog.readTime}
//           <Calendar size={14} /> {blog.date}
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
//           {blog.title}
//         </h1>

//         {/* Author */}
//         <p className="text-gray-400 mb-8">
//           By <span className="text-white">{blog.author}</span>
//         </p>

//         {/* Content */}
//         <div className="text-gray-300 leading-relaxed whitespace-pre-line">
//           {blog.content}
//         </div>

//       </div>
//     </div>
//   );
// }






"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import CONFIG from "../../constance";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${CONFIG.API_BASE_URL}/blog/slug/${slug}`);
        if (!res.ok) throw new Error("Blog not found");

        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Blog fetch error:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const getImageUrl = (img) => {
  if (!img) return "/placeholder.jpg"; // fallback
  if (img.startsWith("data:image")) return img; // base64
  if (img.startsWith("http")) return img; // external URL
  // local uploads
  return `${CONFIG.API_BASE_URL}/${img.split("/").pop()}`;
};


  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading blog...
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found
      </div>
    );
      // const isBase64 = blog.image?.startsWith("data:image");

  return (
 <div className="glass-strong min-h-screen bg-white dark:bg-[#0b0f19] text-black dark:text-white py-20 px-4">

  <div className="max-w-5xl mx-auto">
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 mb-8"
    >
      <ArrowLeft size={18} /> Back to Blogs
    </Link>

    <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl">
      <img
        src={getImageUrl(blog.image)}
        alt={blog.title}
        className="w-full h-105 object-cover"
      />
    </div>

    <div className="flex flex-wrap gap-6 text-sm text-gray-700 dark:text-gray-400 mb-6">
      <div className="flex items-center gap-2">
        <Clock size={14} /> {blog.read_time || "5 min read"}
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={14} /> {new Date(blog.created_at).toDateString()}
      </div>
      {blog.author && <div className="flex items-center gap-2">✍️ {blog.author}</div>}
    </div>

    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text dark:gradient-text-dark">{blog.title}</h1>

    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 dark:via-white/20 to-transparent mb-8" />

    <article className="prose max-w-none dark:prose-invert text-gray-400">{blog.content}</article>
  </div>
</div>


  );
}
