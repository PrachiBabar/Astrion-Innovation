"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const url = isLogin
      ? "http://localhost:5000/api/users/login"
      : "http://localhost:5000/api/users/register";

    const payload = isLogin
      ? { phone, password }
      : { name, phone, password };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) return alert(data.message);

    // LOGIN SUCCESS
    if (isLogin) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      if (data.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } else {
      alert("Registration successful. Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md text-white">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Admin Login" : "Register Account"}
        </h2>

        {!isLogin && (
          <input
            className="w-full p-3 mb-4 rounded bg-black/40"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          className="w-full p-3 mb-4 rounded bg-black/40"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-black/40"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded font-semibold"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="text-sm text-center mt-4 cursor-pointer text-gray-300"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don’t have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
