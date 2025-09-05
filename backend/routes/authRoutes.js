const express = require("express");
const { registerUser, login, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authmiddleware");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/userinfo", protect, getMe);

module.exports = router;