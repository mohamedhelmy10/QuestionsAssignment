require("dotenv").config();
const express = require("express");
const { connectDB } = require("./configs/db");
const { importDataFromExcel, deleteAllData} = require('./services/manageData');


const app = express();

const startServer = async () => {
    try {
        // db connection
        connectDB();
        // Import data
        await deleteAllData();
        await importDataFromExcel(process.env.Excel_FILE_PATH);

        app.use("/search", require("./routes/questions"));

        app.listen(process.env.PORT, () => {
            console.log(`Server listening at ${process.env.PORT}`);
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
startServer();
