const mongoose = require("mongoose");
const config = require("config");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Database connected");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
