const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");


//generate Jwt toket
const tokenGenerate = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ Message: "All fields are required." });
        
    }
    
    try {
        
        const userExist = await User.findOne({ email });
        
        if (userExist) {
            
            return res.status(400).json({ message: "Email already exist" });
            
        }
        const user = await User.create(
            {
                fullName,
                email,
                password,
            }
        )
        console.log("enters2");
        // const payload = {id: user._id};
        // const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: "1h"})

        res.status(201).json(
            {
                id: user._id,
                user,
                token: tokenGenerate(user._id)
            }
        )
    } catch (err) {
        res.status(500).json({ message: "Error registering user", error: err.message });
    }



}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({ token: tokenGenerate(user._id) });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

};

exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        // don't send password
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Upload profile picture
exports.uploadProfilePic = async (req, res) => {
    try {
        const userId = req.user._id; // from auth middleware
        const filePath = `/uploads/${req.file.filename}`; // static path

        const user = await User.findByIdAndUpdate(
            userId,
            { profileImageUrl: filePath },
            { new: true }
        ).select("-password");

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

