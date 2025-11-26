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

// get single todo
const getSingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
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

// edit todos
const editTodo = async (req, res) => {
  try {
    const todo_id = req.params.id;
    const { title, description } = req.body;

    const todo = await Todo.findById(todo_id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (todo.user.toString() !== req.user._id.toString()) {
      // Authorization step
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      todo_id,
      {
        title,
        description,
      },
      { new: true }
    );
    return res.status(200).json(updatedTodo);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//DeleteTodos

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    if (todo.user.toString() !== req.user._id.toString()) {
      // Checking that whether the user deleting a particular todo is owner of that todo
      return res.status(401).json({ message: "Not authorized" });
    }

    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getTodo, getSingleTodo, addTodo, editTodo, deleteTodo };
