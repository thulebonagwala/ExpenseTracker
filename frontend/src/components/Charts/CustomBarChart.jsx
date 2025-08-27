import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", Income: 4000, Expense: 2400 },
    { month: "Feb", Income: 3500, Expense: 2600 },
    { month: "Mar", Income: 4200, Expense: 2900 },
    { month: "Apr", Income: 4600, Expense: 3100 },
    { month: "May", Income: 5000, Expense: 3400 },
    { month: "Jun", Income: 2400, Expense: 17000 },
    { month: "Jul", Income: 12000, Expense: 8000 },
    { month: "Aug", Income: 12500, Expense: 8500 },
    { month: "Sep", Income: 13000, Expense: 9000 },
    { month: "Oct", Income: 12500, Expense: 8800 },
    { month: "Nov", Income: 13500, Expense: 9500 },
    { month: "Dec", Income: 12800, Expense: 8700 },
];

const CustomBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={180}>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Income" fill="#4040e7ff" />
                <Bar dataKey="Expense" fill="#ef4444" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default CustomBarChart