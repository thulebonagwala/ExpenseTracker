import React, { useEffect } from 'react';
import InfoCard from "../dashboard/infoCard";
import { useState } from "react";
import CustomTable from '../Charts/CustomTable';
import { API_PATHS } from '../../utils/apiPaths';
import api from '../../utils/axiosInstance';

const ExpenseContent = ({ forms, handleChange, resetForms }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpense();
    }, []);

    const fetchExpense = async () => {
        try {
            const res = await api.get(API_PATHS.EXPENSE.EXPENSES);
            setExpenses(res.data);
        } catch (error) {
            console.log("error:", error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            console.log("Path:", API_PATHS.EXPENSE.EXPENSES + id);
            const deletedExpense = await api.delete(API_PATHS.EXPENSE.EXPENSES + id);
            setExpenses(expenses.filter(exp => exp._id !== id));
            console.log("Expense deleted successfully");
        } catch (error) {
            console.error("Error deleting expense", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(API_PATHS.EXPENSE.ADD, forms.expense);

            setExpenses(
                (prev) => {
                   const updated= [res.data, ...prev];
                   return updated.sort((a,b) => new Date(b.date)- new Date(a.date));

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
                <h1 className="text-3xl font-bold">Expenses</h1>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit}>
                <InfoCard title="">
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <input
                            type="date"
                            name="date"
                            value={forms.expense.date || ""}
                            onChange={handleChange("expense")}
                            className="border rounded-lg p-2"
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={forms.expense.category || ""}
                            onChange={handleChange("expense")}
                            className="border rounded-lg p-2"
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={forms.expense.amount || ""}
                            onChange={handleChange("expense")}
                            className="border rounded-lg p-2"
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={forms.expense.description || ""}
                            onChange={handleChange("expense")}
                            className="border rounded-lg p-2"
                        />
                    </div>
                </InfoCard>

                <button
                    type="Submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Expense
                </button>
            </form>


            {/* Expenses Table */}
            <div className="max-h-50 overflow-y-auto">
                <CustomTable transaction={expenses} handleDelete={handleDelete} />


            </div>
        </main>
    )
}

export default ExpenseContent;