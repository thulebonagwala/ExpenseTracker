const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const { recentTransactions, getBalance } = require("../controllers/transactionsController");

const router = express.Router();

router.all("/recent", protect, recentTransactions);
router.get("/balance", protect, getBalance);

module.exports = router;