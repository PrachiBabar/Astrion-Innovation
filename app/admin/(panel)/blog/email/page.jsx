"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "../../../../constance";

const SendMail = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Fetch doctors on load
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(
        `${CONFIG.API_BASE_URL}/mail/doctors`
      );

      setDoctors(res.data.data);

    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${CONFIG.API_BASE_URL}/mail/send-mail`,
        form
      );

      //  Always re-fetch from DB (single source of truth)
      await fetchDoctors();

      setForm({ name: "", email: "" });
      setOpenModal(false);

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen shadow-lg border border-white/20 bg-white/30 backdrop-blur-md">  

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Doctors</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Send Mail
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Doctor Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Send Date</th>
            </tr>
          </thead>

          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-400">
                  No doctors yet
                </td>
              </tr>
            ) : (
              doctors.map((doc) => (
                <tr key={doc.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{doc.id}</td>
                  <td className="p-3">{doc.name}</td>
                  <td className="p-3">{doc.email}</td>
                  <td className="p-3">
                    {doc.created_at
                      ? new Date(doc.created_at).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Send Mail to Doctor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Doctor Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Doctor Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default SendMail;