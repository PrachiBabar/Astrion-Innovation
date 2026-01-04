"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    if (!themeToggle) return;

    if (localStorage.getItem("theme") === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
      themeToggle.textContent = "☀️";
    }

    themeToggle.onclick = () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        html.classList.add("light");
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
      } else {
        html.classList.remove("light");
        html.classList.add("dark");
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
      }
    };
  }, []);

  return (
    <nav className="glass fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo/astrion-logo.png"
              alt="Astrion Innovation Logo"
              width={60}
              height={40}
              className="hover:scale-105 rounded-full mt-3 transition-all duration-300"
            />
            {/* <span className="text-2xl font-bold gradient-text transition-all duration-300 hover:scale-105 hover:brightness-125"> Astrion Innovation </span> */}
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-400 hover:text-teal-400">Home</Link>
            <Link href="/services" className="text-gray-400 hover:text-teal-400">Services</Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-teal-400">Portfolio</Link>
            <Link href="/" className="text-gray-400 hover:text-teal-400">Products</Link>
            <Link href="/" className="text-gray-400 hover:text-teal-400">Pricing</Link>
            <Link href="/blog" className="text-gray-400 hover:text-teal-400">Blog</Link>
            <Link href="/career" className="text-gray-400 hover:text-teal-400">Career</Link>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              href="/contactus"
              className="gradient-bg px-4 py-2 rounded-full text-sm font-semibold"
            >
              Contact Us
            </a>

            <button
              id="theme-toggle"
              className="w-10 h-10 glass rounded-full flex items-center justify-center"
            >
              🌙
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center glass rounded-full"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden glass-strong px-4 py-4 space-y-3">
          <Link onClick={() => setOpen(false)} href="/" className="block">Home</Link>
          <Link onClick={() => setOpen(false)} href="/services" className="block">Services</Link>
          <Link onClick={() => setOpen(false)} href="/portfolio" className="block">Portfolio</Link>
          <Link onClick={() => setOpen(false)} href="/" className="block">Products</Link>
          <Link onClick={() => setOpen(false)} href="/" className="block">Pricing</Link>
          <Link onClick={() => setOpen(false)} href="/blog" className="block">Blog</Link>
          <Link onClick={() => setOpen(false)} href="/career" className="block">Career</Link>
        </div>
      )}
    </nav>
  );
}
