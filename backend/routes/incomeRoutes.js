const express = require("express");
const {addIncome, removeIncome, getAllIncome} = require("../controllers/incomeController");
const {protect} = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/add",protect, addIncome);
router.delete("/:id",protect,removeIncome);
router.get("",protect,getAllIncome);

module.exports = router;