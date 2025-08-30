const expense = require("../models/expense");

exports.addExpense = async (req, res) => {
    
    try {
        const { date, category, amount, description } = req.body;

        if(!date || !category || !amount || !description){
            return res.status(400).json({message: "All fields are required"});
        }

        const userId = req.user._id; //since using JWT authentication
        console.log(req.user._id);
        const Expense = await expense.create(
            { user: userId, date, category, amount, description }
        )

        res.status(200).json({message: "Expense added succesfully", Expense});
    } catch (error) {
            console.error("Error adding expense", error);
            res.status(500).json({message: "Server error", error: error.message});
    }

}