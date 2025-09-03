const income = require("../models/income");
const expense = require("../models/expense");
const { Parser } = require("json2csv"); // library for CSV export

// GET /api/report/yearly?year=2025
exports.getYearlyReport = async (req, res) => {
    try {
        const userId = req.user._id;
        const year = parseInt(req.query.year);

        if (!year) {
            return res.status(400).json({ message: "Year is required" });
        }

        const startOfYear = new Date(year, 0, 1); // Jan 1
        const endOfYear = new Date(year, 11, 31, 23, 59, 59); // Dec 31

        // Aggregate income by month
        const incomes = await income.aggregate([
            {
                $match: {
                    user: userId,
                    date: { $gte: startOfYear, $lte: endOfYear },
                },
            },
            {
                $group: {
                    _id: { month: { $month: "$date" } },
                    totalIncome: { $sum: "$amount" },
                },
            },
            { $sort: { "_id.month": 1 } },
        ]);

        // Aggregate expenses by month
        const expenses = await expense.aggregate([
            {
                $match: {
                    user: userId,
                    date: { $gte: startOfYear, $lte: endOfYear },
                },
            },
            {
                $group: {
                    _id: { month: { $month: "$date" } },
                    totalExpense: { $sum: "$amount" },
                },
            },
            { $sort: { "_id.month": 1 } },
        ]);

        // Map results into a unified structure (12 months)
        const monthlyData = Array.from({ length: 12 }, (_, i) => {
            const monthIncome =
                incomes.find((inc) => inc._id.month === i + 1)?.totalIncome || 0;
            const monthExpense =
                expenses.find((exp) => exp._id.month === i + 1)?.totalExpense || 0;

            return {
                month: i + 1,
                income: monthIncome,
                expense: monthExpense,
                savings: monthIncome - monthExpense,
            };
        });

        // Totals
        const totalIncome = monthlyData.reduce((acc, m) => acc + m.income, 0);
        const totalExpense = monthlyData.reduce((acc, m) => acc + m.expense, 0);
        const netSavings = totalIncome - totalExpense;

        res.json({
            year,
            totalIncome,
            totalExpense,
            netSavings,
            monthlyData,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// GET /api/report/yearly/csv?year=2025
exports.exportYearlyReportCSV = async (req, res) => {
    try {
        const userId = req.user._id;
        const year = parseInt(req.query.year);

        if (!year) {
            return res.status(400).json({ message: "Year is required" });
        }

        // Reuse the same aggregation logic
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year, 11, 31, 23, 59, 59);

        const incomes = await income.aggregate([
            { $match: { user: userId, date: { $gte: startOfYear, $lte: endOfYear } } },
            { $group: { _id: { month: { $month: "$date" } }, totalIncome: { $sum: "$amount" } } },
        ]);

        const expenses = await expense.aggregate([
            { $match: { user: userId, date: { $gte: startOfYear, $lte: endOfYear } } },
            { $group: { _id: { month: { $month: "$date" } }, totalExpense: { $sum: "$amount" } } },
        ]);

        const monthlyData = Array.from({ length: 12 }, (_, i) => {
            const monthIncome = incomes.find((inc) => inc._id.month === i + 1)?.totalIncome || 0;
            const monthExpense = expenses.find((exp) => exp._id.month === i + 1)?.totalExpense || 0;

            return {
                month: i + 1,
                income: monthIncome,
                expense: monthExpense,
                savings: monthIncome - monthExpense,
            };
        });

        const fields = ["month", "income", "expense", "savings"];
        const parser = new Parser({ fields });
        const csv = parser.parse(monthlyData);

        res.header("Content-Type", "text/csv");
        res.attachment(`yearly-report-${year}.csv`);
        return res.send(csv);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
