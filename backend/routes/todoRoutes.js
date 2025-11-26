const express = require("express");
const {
  getTodo,
  getSingleTodo,
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
router.get("/:id", protect, getSingleTodo); // For getting a single todo item for edit age

module.exports = router;
