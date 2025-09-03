const express = require("express");
const { getYearlyReport, exportYearlyReportCSV } = require("../controllers/reportController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/yearly", protect, getYearlyReport);
router.get("/yearly/csv", protect, exportYearlyReportCSV);

module.exports = router;
