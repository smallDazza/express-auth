const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
    let databaseUrl = process.env.DATABASE_URL; // || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

    try {
        await mongoose.connect(databaseUrl);
    console.log("Connected to the database !!");

    } catch (error) {
        console.error("Error connecting to mongoDB: ", error);
        process.exit(1);
    }
    
}

module.exports = { connectDB };