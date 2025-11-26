import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Fetching the particular todo
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/todos/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNewTitle(response.data.title);
        setNewDescription(response.data.description);
      } catch (error) {
        navigate("/login"); // unauthorized redirect
      }
    };
    fetchTodo();
  }, [id, navigate]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        { title: newTitle, description: newDescription },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/");
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#101930ff" }} // full dark background
    >
      <form
        className="p-4 rounded shadow"
        style={{
          width: "400px",
          backgroundColor: "#30363cff", // card dark
        }}
        onSubmit={handleEdit}
      >
        <h3 className="text-center mb-4 text-light">Edit Task</h3>

        <div className="mb-3">
          <label className="form-label text-light">Task Title</label>
          <input
            type="text"
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Update task title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Description</label>
          <textarea
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Update description"
            rows="3"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-2">
          Update Task
        </button>
      </form>
    </div>
  );
}
