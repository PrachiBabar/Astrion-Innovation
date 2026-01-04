"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      router.replace("/admin/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/"); 
  };

  return (
    <div className="flex min-h-screen mt-15">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex-shrink-0">
        <h2 className="text-xl font-bold mb-8 border-b border-gray-700 pb-3">
          Admin Panel
        </h2>

        <nav className="flex flex-col space-y-4">
          <Link
            href="/admin/dashboard"
            className="px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/blog/manageblog"
            className="px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Manage Blogs
          </Link>

          {/* <Link
            href="/admin/blog/add"
            className="px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Add Blog
          </Link> */}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-white shadow flex items-center justify-end px-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-10 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function AdminLayout({ children }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token || role !== "admin") {
//       router.replace("/admin/login");
//       return;
//     }

//     setLoading(false);
//   }, [router]);

//   // 🔑 ONLY LOADING STATE — NO AUTH STATE
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg font-semibold">Loading Admin Panel...</p>
//       </div>
//     );
//   }

//   const handleLogout = () => {
//     localStorage.clear();
//     router.replace("/admin/login");
//   };

//   return (
//     <div className="flex min-h-screen mt-15">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white p-6">
//         <h2 className="text-xl font-bold mb-8 border-b border-gray-700 pb-3">
//           Admin Panel
//         </h2>

//         <nav className="flex flex-col space-y-4">
//           <Link href="/admin/dashboard" className="px-4 py-2 hover:bg-gray-800 rounded">
//             Dashboard
//           </Link>
//           <Link href="/admin/blog/manageblog" className="px-4 py-2 hover:bg-gray-800 rounded">
//             Manage Blogs
//           </Link>
//           <Link href="/admin/blog/add" className="px-4 py-2 hover:bg-gray-800 rounded">
//             Add Blog
//           </Link>
//         </nav>
//       </aside>

//       {/* Main */}
//       <div className="flex-1 flex flex-col">
//         <header className="h-16 bg-white shadow flex justify-end items-center px-6">
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </header>

//         <main className="flex-1 p-10 bg-gray-100">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
