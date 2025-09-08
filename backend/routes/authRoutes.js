const express = require("express");
const { registerUser, login, getMe, uploadProfilePic } = require("../controllers/authController");
const { protect } = require("../middleware/authmiddleware");
const {uploadMiddleware} = require("../middleware/aploadMiddleware");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/userinfo", protect, getMe);
router.post("/upload-profile-pic", protect,uploadMiddleware,uploadProfilePic);

module.exports = router;