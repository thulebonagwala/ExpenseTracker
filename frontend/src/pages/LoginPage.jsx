import React from 'react'
import { useState } from 'react';
import { API_PATHS } from '../utils/apiPaths';
import api from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("Email:", formData.email);
        // console.log("Password:, formData.password");
        // alert(`Login attempt with email: ${formData.email}`);

        //send to Backend
        try {
            const res = await api.post(API_PATHS.AUTH.LOGIN, formData);

            //Save to localStorage
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");

        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
        }

    }
    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
};
export default LoginPage;