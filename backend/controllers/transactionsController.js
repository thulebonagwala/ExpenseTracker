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