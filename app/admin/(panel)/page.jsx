"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRoot() {
  const router = useRouter();

  // useEffect(() => {
    // const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

  //   if (!token) {
  //     router.replace("/admin/login");
  //   } else if (role !== "admin") {
  //     router.replace("/");
  //   } else {
  //     router.replace("/admin/dashboard");
  //   }
  // }, []);

  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return null;
}
