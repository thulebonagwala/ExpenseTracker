const express =  require("express");
const { addExpense } = require("../controllers/expenseController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/add",protect,addExpense);

module.exports = router;