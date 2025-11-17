const express = require("express");
const { getTodo, addTodo } = require("../controllers/todoController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/getTodo", protect, getTodo);
router.post("/addTodo", protect, addTodo);

module.exports = router;
