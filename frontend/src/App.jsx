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
import ExpensesPage from './pages/ExpensesPage';
import IncomePage from './pages/incomePage';
import ReportsPage from './pages/ReportsPage';
import { useFormHandler } from './hooks/useFormHandler';


function App() {
  const { forms, handleChange, resetForms } = useFormHandler({
    login: {},
    register: {},
    expense: {},
    income: {},
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage forms={forms} handleChange={handleChange} />} />
        <Route path="/register" element={<SignUpPage forms={forms} handleChange={handleChange} />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/expenses" element={<ExpensesPage forms={forms} handleChange={handleChange} resetForms={resetForms}/>} />
        <Route path="/income" element={<IncomePage forms={forms} handleChange={handleChange} resetForms={resetForms}/>} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
