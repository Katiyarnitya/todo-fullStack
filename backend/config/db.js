const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully connected to ${conn.connection.name}`);
  } catch (error) {
    console.error(`Can not conncet to DB ${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
