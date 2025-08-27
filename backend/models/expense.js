const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
        date: { type: Date, default: Date.now },
        category: { type: String, required: true, trim: true },
        amount: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, trim: true },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.Model("Expense", expenseSchema);