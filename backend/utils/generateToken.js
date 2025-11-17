const jwt = require("jsonwebtoken");

const generateToken = async function (id) {
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
module.exports = generateToken;
