const express =  require("express");
const { addExpense, removeExpense, getAllExpense } = require("../controllers/expenseController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/add",protect,addExpense);
router.delete("/:id",protect,removeExpense);
router.get("",protect,getAllExpense);

module.exports = router;