const Todo = require("../models/todoSchema");

// Get Todos

const getTodo = async (req, res) => {
  try {
    const Todos = await Todo.find({ user: req.user._id });
    res.json(Todos);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
// add Todos

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ user: req.user._id, title, description });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getTodo, addTodo };
