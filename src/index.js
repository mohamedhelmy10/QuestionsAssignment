require("dotenv").config();
const express = require("express");
const { connectDB } = require("./configs/db");


const app = express();

// db connection
connectDB();

app.use("/search", require("./routes/questions"));

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
});
