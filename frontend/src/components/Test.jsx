import React, { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", Income: 4000, Expense: 2400 },
  { month: "Feb", Income: 3500, Expense: 2600 },
  { month: "Mar", Income: 4200, Expense: 2900 },
  { month: "Apr", Income: 4600, Expense: 3100 },
  { month: "May", Income: 5000, Expense: 3400 },
];

const COLORS = ["#22c55e", "#ef4444", "#3b82f6"]; // Tailwind green, red, blue

const Test = () => {

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Monthly Income vs Expense</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Income" fill="#22c55e" />
        <Bar dataKey="Expense" fill="#ef4444" />
      </BarChart>
    </div>
  );
};

export default Test;
