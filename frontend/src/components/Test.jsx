import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Test = () => {
  const [year, setYear] = useState("2024");

  // Sample data
  const expensesData = [
    { month: "Jan", expenses: 10500 },
    { month: "Feb", expenses: 10000 },
    { month: "Mar", expenses: 9800 },
    { month: "Apr", expenses: 11500 },
    { month: "May", expenses: 13000 },
    { month: "Jun", expenses: 17000 },
    { month: "Jul", expenses: 8000 },
    { month: "Aug", expenses: 8500 },
    { month: "Sep", expenses: 9000 },
    { month: "Oct", expenses: 8800 },
    { month: "Nov", expenses: 9500 },
    { month: "Dec", expenses: 8700 },
  ];

  const incomeVsExpenses = [
    { month: "Jan", income: 14000, expenses: 10500 },
    { month: "Feb", income: 13500, expenses: 10000 },
    { month: "Mar", income: 12000, expenses: 9800 },
    { month: "Apr", income: 15000, expenses: 11500 },
    { month: "May", income: 16000, expenses: 13000 },
    { month: "Jun", income: 20000, expenses: 17000 },
    { month: "Jul", income: 12000, expenses: 8000 },
    { month: "Aug", income: 12500, expenses: 8500 },
    { month: "Sep", income: 13000, expenses: 9000 },
    { month: "Oct", income: 12500, expenses: 8800 },
    { month: "Nov", income: 13500, expenses: 9500 },
    { month: "Dec", income: 12800, expenses: 8700 },
  ];

  // Totals
  const totalIncome = incomeVsExpenses.reduce((sum, d) => sum + d.income, 0);
  const totalExpenses = incomeVsExpenses.reduce(
    (sum, d) => sum + d.expenses,
    0
  );
  const netSavings = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-6xl">
        {/* Navbar */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Spendly</h1>
          <div className="flex gap-6 text-gray-600 font-medium">
            <button>Dashboard</button>
            <button>Expenses</button>
            <button>Income</button>
            <button className="text-blue-600">Reports</button>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Reports Section */}
        <h2 className="text-3xl font-bold mb-6">Reports</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
            <h4 className="text-lg font-semibold text-blue-600">Total Income</h4>
            <p className="text-2xl font-bold text-gray-800">
              ${totalIncome.toLocaleString()}
            </p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow text-center">
            <h4 className="text-lg font-semibold text-red-600">Total Expenses</h4>
            <p className="text-2xl font-bold text-gray-800">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
          <div
            className={`p-6 rounded-xl shadow text-center ${
              netSavings >= 0 ? "bg-green-100" : "bg-yellow-100"
            }`}
          >
            <h4
              className={`text-lg font-semibold ${
                netSavings >= 0 ? "text-green-600" : "text-yellow-600"
              }`}
            >
              Net Savings
            </h4>
            <p className="text-2xl font-bold text-gray-800">
              ${netSavings.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Year Selector + Button */}
        <div className="flex items-center gap-4 mb-6">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Generate Report
          </button>
        </div>

        {/* Expenses Chart */}
        <h3 className="text-xl font-semibold mb-4">Expenses</h3>
        <div className="w-full h-80 mb-12">
          <ResponsiveContainer>
            <BarChart data={expensesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expenses" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Income vs Expenses Chart */}
        <h3 className="text-xl font-semibold mb-4">Income vs Expenses</h3>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart data={incomeVsExpenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#22c55e" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expenses" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Test;
