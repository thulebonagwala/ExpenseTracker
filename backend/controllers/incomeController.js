const income = require("../models/income");

exports.addIncome = async (req, res) => {

    try {
        const { date, category, amount, description } = req.body;
        console.log(req.body);

        if (!date || !category || !amount || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userId = req.user._id; //since using JWT authentication
        console.log(req.user._id);
        const Income = await income.create(
            { user: userId, date, category, amount, description }
        )

        res.status(200).json(Income);
    } catch (error) {
        console.error("Error adding expense", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }

}

exports.removeIncome = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID", id);
        const deletedIncome = await income.findByIdAndDelete(id);

        if (!deletedIncome) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({ message: "Expense deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

exports.getAllIncome = async (req, res) => {
    try {
        const allIncomes = await income.find({ user: req.user._id }).sort({ date: -1 });
        res.json(allIncomes);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}