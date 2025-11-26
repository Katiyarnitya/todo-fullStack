import { useState } from "react";
import axios from "axios";

export default function AddTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!title || !description) return;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/todos/",
        {
          title,
          description,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos([...todos, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form
      className="d-flex justify-content-center"
      style={{ maxWidth: "600px", margin: "100px auto" }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        class="form-control me-2"
        type="search"
        placeholder="Add Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button class="btn btn-success" type="button" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
}
