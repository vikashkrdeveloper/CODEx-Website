// pages/register.tsx
'use client';

import Head from "next/head";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const googleFormUrl = "https://forms.gle/YOUR_GOOGLE_FORM_LINK"; // Replace this with actual form link

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(googleFormUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>Event Registration | CODEX</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-lg w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Event Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="event" className="block mb-1 text-sm font-medium text-gray-300">
                Select Event
              </label>
              <select
                id="event"
                name="event"
                required
                value={formData.event}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">-- Choose an Event --</option>
                <option value="hackathon">Hackathon</option>
                <option value="webinar">Webinar</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:to-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Register Now
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 text-center">
            You will be redirected to our Google Form upon submission.
          </p>
        </div>
      </div>
    </>
  );
}
