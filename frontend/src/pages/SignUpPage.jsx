import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const signUpPage = () => {

  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //call API
    console.log(form);
    try {
      const res = await api.post(API_PATHS.AUTH.REGISTER, form);
      console.log("Registration sucess:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
    };
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default signUpPage