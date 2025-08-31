const expense = require("../models/expense");

exports.addExpense = async (req, res) => {

    try {
        const { date, category, amount, description } = req.body;
        console.log(req.body);

        if (!date || !category || !amount || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userId = req.user._id; //since using JWT authentication
        console.log(req.user._id);
        const Expense = await expense.create(
            { user: userId, date, category, amount, description }
        )

        res.status(200).json(Expense);
    } catch (error) {
        console.error("Error adding expense", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }

}

exports.removeExpense = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID", id);
        const deletedExpense = await expense.findByIdAndDelete(id);

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({ message: "Expense deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

exports.getAllExpense = async (req, res) => {
    try {
        const allExpenses = await expense.find({ user: req.user._id }).sort({ date: -1 });
        res.json(allExpenses);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}