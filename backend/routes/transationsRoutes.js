const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const { recentTransactions } = require("../controllers/transactionsController");

const router = express.Router();

router.all("/recent",protect,recentTransactions);

module.exports = router