const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
            return res.status(400).json({ message: "Email already exist" })
        }
        const user = await User.create(
            {
                fullName,
                email,
                password,
            }
        )

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
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Server error"});
    }

};