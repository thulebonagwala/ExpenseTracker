import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



const CustomBarChart = ({data}) => {

    if(!data){
        return(
            <p>No data to display</p>
        )
    }
    
    const incomeVsExpenses = [
    { month: "Jan", Income: data.find(m => m.month === 1).income, Expense: data.find(m => m.month === 1).expense },
    { month: "Feb", Income: data.find(m => m.month === 2).income , Expense: data.find(m => m.month === 2).expense },
    { month: "Mar", Income: data.find(m => m.month === 3).income, Expense: data.find(m => m.month === 3).expense },
    { month: "Apr", Income: data.find(m => m.month === 4).income, Expense: data.find(m => m.month === 4).expense },
    { month: "May", Income: data.find(m => m.month === 5).income, Expense: data.find(m => m.month === 5).expense },
    { month: "Jun", Income: data.find(m => m.month === 6).income, Expense: data.find(m => m.month === 6).expense },
    { month: "Jul", Income: data.find(m => m.month === 7).income, Expense: data.find(m => m.month === 7).expense },
    { month: "Aug", Income: data.find(m => m.month === 8).income, Expense: data.find(m => m.month === 8).expense },
    { month: "Sep", Income: data.find(m => m.month === 9).income, Expense: data.find(m => m.month === 9).expense },
    { month: "Oct", Income: data.find(m => m.month === 10).income, Expense: data.find(m => m.month === 10).expense },
    { month: "Nov", Income: data.find(m => m.month === 11).income, Expense: data.find(m => m.month === 11).expense },
    { month: "Dec", Income: data.find(m => m.month === 12).income, Expense: data.find(m => m.month === 12).expense },
];
    return (
        <ResponsiveContainer width="100%" height={180}>
            <BarChart width={600} height={300} data={incomeVsExpenses}>
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