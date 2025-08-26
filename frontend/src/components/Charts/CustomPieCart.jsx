import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomPieCart = () => {

    const data = [
        { name: "Income", value: 4000 },
        { name: "Expense", value: 2500 },
        { name: "Savings", value: 1500 },
    ];

    const COLORS = ["#22c55e", "#ef4444", "#083783ff"]; // Tailwind green, red, blue

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieCart