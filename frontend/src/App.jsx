import { useState } from 'react'
import {
  Routes, Route, Navigate,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import AuthLayout from './components/layouts/AuthLayout';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/register" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </div>
  )
}

export default App
