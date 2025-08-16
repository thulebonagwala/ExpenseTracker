// is how you load environment variables from a .env file into your Node.js app.
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

//is importing the CORS middleware package into your Node.js/Express app.
const cors = require("cors");

const app = express();
app.use(express.json());

connectDB();

app.use(
    cors(
        {
            origin: process.env.CLIENT_URL || "*", 
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        }
    )
)

app.use("/api/v1/auth",authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${PORT}`));



