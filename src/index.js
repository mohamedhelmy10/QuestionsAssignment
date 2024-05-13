require("dotenv").config();
const express = require("express");
const { connectDB } = require("./configs/db.config");


const app = express();

// db connection
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
});
