import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CustomBarChart from "../Charts/CustomBarChart";
import ChartsCard from "./ChartsCard";
import { useReportDataHandler } from "../../hooks/useReportDataHandler";


const ReportContent = () => {

    const { data, error, fetchYearlyReport } = useReportDataHandler();

    const [year, setYear] = useState("2024");

    const incomeVsExpenses = [
        { month: "Jan", income: 0 , expenses: 10500 },
        { month: "Feb", income: 13500, expenses: 10000 },
        { month: "Mar", income: 12000, expenses: 9800 },
        { month: "Apr", income: 15000, expenses: 11500 },
        { month: "May", income: 16000, expenses: 13000 },
        { month: "Jun", income: 20000, expenses: 17000 },
        { month: "Jul", income: 12000, expenses: 8000 },
        { month: "Aug", income: 12500, expenses: 8500 },
        { month: "Sep", income: 13000, expenses: 9000 },
        { month: "Oct", income: 12500, expenses: 8800 },
        { month: "Nov", income: 13500, expenses: 9500 },
        { month: "Dec", income: 12800, expenses: 8700 },
    ];

    return (
        <main className="p-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-1">
                <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
                    <h4 className="text-lg font-semibold text-blue-600">Total Income</h4>
                    <p className="text-2xl font-bold text-gray-800">
                        R{(data.totalIncome || 0).toLocaleString()}
                    </p>
                </div>
                <div className="bg-red-100 p-6 rounded-xl shadow text-center">
                    <h4 className="text-lg font-semibold text-red-600">Total Expenses</h4>
                    <p className="text-2xl font-bold text-gray-800">
                        R{(data.totalExpense || 0).toLocaleString()}
                    </p>
                </div>
                <div
                    className={`p-6 rounded-xl shadow text-center ${data.netSavings >= 0 ? "bg-green-100" : "bg-yellow-100"
                        }`}
                >
                    <h4
                        className={`text-lg font-semibold ${data.netSavings >= 0 ? "text-green-600" : "text-yellow-600"
                            }`}
                    >
                        Net Savings
                    </h4>
                    <p className="text-2xl font-bold text-gray-800">
                        R{(data.netSavings || 0).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Year Selector + Button */}
            <div className="flex items-center gap-4 mb-1">
                <select
                    //value={year}
                    onChange={(e) => {
                        const selectedYear = e.target.value;
                        setYear(selectedYear);
                        fetchYearlyReport(selectedYear);
                    }}

                    className="border rounded-lg p-2"
                >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Generate Report
                </button>
            </div>

            {/* Income vs Expenses Chart */}
            {/* <h3 className="text-xl font-semibold mb-4">Income vs Expenses</h3> */}
            <ChartsCard title="Income vs Expenses">
                <CustomBarChart data={data.monthlyData}/>
            </ChartsCard>
        </main >
    )
}

export default ReportContent;