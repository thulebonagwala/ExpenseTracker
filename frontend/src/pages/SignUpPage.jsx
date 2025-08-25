import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import AuthLayout from '../components/layouts/AuthLayout';

const signUpPage = ({forms, handleChange}) => {

  // const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //call API
    console.log(forms.register);
    try {
      const res = await api.post(API_PATHS.AUTH.REGISTER, forms.register);
      console.log("Registration sucess:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
    };
  }

  return (
    <div className="min-h-screen flex">

      <AuthLayout/>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={forms.register.fullName || ""}
              onChange={handleChange("register")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={forms.register.email || ""}
              onChange={handleChange("register")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={forms.register.password || ""}
              onChange={handleChange("register")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-semibold hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signUpPage