const income = require("../models/income");
const expense = require("../models/expense");

exports.recentTransactions = async (req, res) => {

    try {
        const expenses = await expense.find({ user: req.user.id }).limit(3);
        const incomes = await income.find({ user: req.user.id }).limit(3);

        const transactions = [
            ...expenses.map(e => ({ ...e.toObject(), type: "expense" })),
            ...incomes.map(i => ({ ...i.toObject(), type: "income" })),
        ];

        const recentTransaction = transactions
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3);

        res.json(recentTransaction);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

exports.getBalance = async (req, res) => {

    try {
        const userId = req.user._id;

        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        const incomeMonth = await income.aggregate([
            {
                $match: {
                    user: userId,
                    date: { $gte: startOfMonth, $lte: endOfMonth },
                },
            },
            {
                $group: {
                    _id: null,
                    totalIncome: { $sum: "$amount" },
                },
            },
        ]);

        const incomes = await income.aggregate([
            { $match: { user: userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const expenses = await expense.aggregate([
            { $match: { user: userId } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const totalIncome = incomes[0]?.total || 0;
        const totalExpense = expenses[0]?.total || 0;
        const balance = totalIncome - totalExpense;
        const totalIncomeMonthly = incomeMonth.length > 0 ? incomeMonth[0].totalIncome : 0;

        res.json({ totalIncome, totalExpense, balance, totalIncomeMonthly });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }


}