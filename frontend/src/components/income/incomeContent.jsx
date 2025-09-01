import React from 'react'
import InfoCard from "../dashboard/infoCard";
import { useState, useEffect } from "react";
import CustomTable from '../Charts/CustomTable';
import api from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const IncomeContent = ({ forms, handleChange, resetForms }) => {

  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchIncome();
  }, []);

  const fetchIncome = async () => {
    try {
      const res = await api.get(API_PATHS.INCOME.INCOMES);
      setIncomes(res.data);
    } catch (error) {
      console.log("error:", error.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      
      const deletedIncome = await api.delete(API_PATHS.INCOME.INCOMES + id);
      setIncomes(incomes.filter(inc => inc._id !== id));
      console.log("Expense deleted successfully");
    } catch (error) {
      console.error("Error deleting expense", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(API_PATHS.INCOME.ADD, forms.income);

      setIncomes(
        (prev) => {
          const updated = [res.data, ...prev];
          return updated.sort((a, b) => new Date(b.date) - new Date(a.date));

        })
      resetForms();
      console.log("income added successfully");
    } catch (error) {
      console.log("error:", error.message);
    }


  }

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Income</h1>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>

        <InfoCard title="">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <input
              type="date"
              name="date"
              value={forms.income.date || ""}
              onChange={handleChange("income")}
              className="border rounded-lg p-2"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={forms.income.category || ""}
              onChange={handleChange("income")}
              className="border rounded-lg p-2"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={forms.income.amount || ""}
              onChange={handleChange("income")}
              className="border rounded-lg p-2"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={forms.income.description || ""}
              onChange={handleChange("income")}
              className="border rounded-lg p-2"
            />
          </div>
        </InfoCard>

        <button
          //onClick={addIncome}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Income
        </button>
      </form>

      {/* Expenses Table */}
      <div className="max-h-50 overflow-y-auto">
        <CustomTable transaction={incomes} handleDelete={handleDelete} />
      </div>
    </main>
  )
}

export default IncomeContent;