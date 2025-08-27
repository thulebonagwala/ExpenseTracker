import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomPieCart = () => {

    const data = [
        { name: "Income", value: 4000 },
        { name: "Expense", value: 2500 },
        { name: "Savings", value: 1500 },
    ];

    const COLORS = ["#4040e7ff", "#ef4444", "#4B0082"];
    const hasData = data && data.length > 0;

    if (!hasData) {
        return (
            <div className="flex flex-col items-center justify-center h-64  bg-gray-50">
                <p className="text-gray-500 text-lg">No data to display</p>
                <p className="text-gray-400 text-sm">Add some records to see the chart</p>
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="80%"
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