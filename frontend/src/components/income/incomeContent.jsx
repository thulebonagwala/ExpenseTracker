import React from 'react'
import InfoCard from "../dashboard/infoCard";
import { useState } from "react";
import CustomTable from '../Charts/CustomTable';

const IncomeContent = () => {

  const [incomes, setIncomes] = useState([
    { date: "04/27/2024", category: "Rent", amount: 600, description: "April rent" },
    { date: "04/26/2024", category: "Salary", amount: 3400, description: "Salary for April" },
    
  ]);

  const [newIncome, setNewIncome] = useState({
    date: "",
    category: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIncome({ ...newIncome, [name]: value });
  };

  const addIncome = () => {
    if (newIncome.date && newIncome.category && newIncome.amount) {
      setIncomes([newIncome, ...incomes]);
      setNewIncome({ date: "", category: "", amount: "", description: "" });
    }
  };

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Incomes</h1>
      </div>

      {/* Input Form */}
      <InfoCard title="">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <input
            type="date"
            name="date"
            value={newIncome.date}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newIncome.category}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newIncome.amount}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newIncome.description}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>
      </InfoCard>

      <button
        onClick={addIncome}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Income
      </button>

      {/* Expenses Table */}
      <div className="max-h-50 overflow-y-auto">
        <CustomTable transaction={incomes} />
      </div>
    </main>
  )
}

export default IncomeContent;