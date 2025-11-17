const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes.js");

const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const app = express(); // craete an express app
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send(`API is working on port...`);
});
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`listening to port ${Port}`);
});
