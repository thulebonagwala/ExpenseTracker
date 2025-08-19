import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const CustomPieCart = () => {
    const pieData = [
        { name: "Groceries", value: 50 },
        { name: "Rent", value: 600 },
        { name: "Salary", value: 3400 },
        { name: "Electricity", value: 100 },
    ];

    const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"];
    
    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieCart