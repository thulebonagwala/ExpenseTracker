// is how you load environment variables from a .env file into your Node.js app.
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes =require("./routes/incomeRoutes");
const transationsRoutes = require("./routes/transationsRoutes");
const reportRoutes = require("./routes/reportRoutes");

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
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/transactions",transationsRoutes);
app.use("/api/v1/report", reportRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${PORT}`));



