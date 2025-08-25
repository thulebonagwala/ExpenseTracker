import React from 'react';
import InfoCard from "../dashboard/infoCard";
import { useState } from "react";
import CustomTable from '../Charts/CustomTable';

const ExpenseContent = ({forms, handleChange}) => {

    const [expenses, setExpenses] = useState([
        { date: "04/27/2024", category: "Rent", amount: 600, description: "April rent" },
        { date: "04/26/2024", category: "Salary", amount: 3400, description: "Salary for April" },
        { date: "04/25/2024", category: "Electricity Bill", amount: 100, description: "Electricity bill" },
        { date: "04/25/2024", category: "Electricity Bill", amount: 100, description: "Electricity bill" },
        { date: "04/25/2024", category: "Electricity Bill", amount: 100, description: "Electricity bill" },
        { date: "04/25/2024", category: "Electricity Bill", amount: 100, description: "Electricity bill" },
    ]);

    // const [newExpense, setNewExpense] = useState({
    //     date: "",
    //     category: "",
    //     amount: "",
    //     description: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewExpense({ ...newExpense, [name]: value });
    // };

    // const addExpense = () => {
    //     if (newExpense.date && newExpense.category && newExpense.amount) {
    //         setExpenses([newExpense, ...expenses]);
    //         setNewExpense({ date: "", category: "", amount: "", description: "" });
    //     }
    // };


    return (
        <main className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Expenses</h1>
            </div>

            {/* Input Form */}
            <InfoCard title="">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <input
                        type="date"
                        name="date"
                        value={forms.expense.date}
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
                // onClick={addExpense}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Add Expense
            </button>

            {/* Expenses Table */}
            <div className="max-h-50 overflow-y-auto">
                <CustomTable transaction={expenses} />

            </div>
        </main>
    )
}

export default ExpenseContent;