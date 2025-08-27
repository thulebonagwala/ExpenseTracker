import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Test = ({ data }) => {
  const hasData = data && data.length > 0;

  if (!hasData) {
    // Fallback placeholder UI
    return (
      <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50">
        <p className="text-gray-500 text-lg">No data to display</p>
        <p className="text-gray-400 text-sm">Add some records to see the chart</p>
      </div>
    );
  }

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Test;
