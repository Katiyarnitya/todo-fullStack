const express = require("express");
const {
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/", protect, getTodo);
router.post("/", protect, addTodo);
router.put("/:id", protect, editTodo);
router.delete("/:id", protect, deleteTodo);

module.exports = router;
