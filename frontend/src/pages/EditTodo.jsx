import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditTodo() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(console.log("Title:", title, "Description:", description));
    navigate("/");
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
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4 text-light">Edit Task</h3>

        <div className="mb-3">
          <label className="form-label text-light">Task Title</label>
          <input
            type="text"
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Update task title"
            onChange={(e) => {
              setTitle(e.target.value);
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
            onChange={(e) => {
              setDescription(e.target.value);
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
