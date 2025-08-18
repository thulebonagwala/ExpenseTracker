import { useState } from 'react'
import {
  Routes, Route, Navigate,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import AuthLayout from './components/layouts/AuthLayout';
import Test from './components/Test';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  )
}

export default App
