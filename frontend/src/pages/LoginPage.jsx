import React from 'react'
import { useState } from 'react';
import { API_PATHS } from '../utils/apiPaths';
import api from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';


const LoginPage = ({ forms, handleChange }) => {
    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: ""
    // });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const handleChange = (e) => {
    //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // clear old errors
        //console.log("Email:", formData.email);
        // console.log("Password:, formData.password");
        // alert(`Login attempt with email: ${formData.email}`);

        //send to Backend
        try {
            const res = await api.post(API_PATHS.AUTH.LOGIN, forms.login);

            //Save to localStorage
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");

        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError("Invalid credentials. Please try again.");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        }

    }
    return (
        <div className="min-h-screen flex">
            <AuthLayout />
            <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={forms.login.email || ""}
                            onChange={handleChange("login")}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={forms.login.password || ""}
                            onChange={handleChange("login")}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Login
                        </button>
                        {error && <p className="text-sm text-red-600">{error}</p>}
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <a href="/register" className="text-indigo-600 font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
};
export default LoginPage;