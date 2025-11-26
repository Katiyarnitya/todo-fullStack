import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoItem({ todo, todos, setTodos }) {
  const navigate = useNavigate();

  // Handling delete functionality
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((t) => t._id !== todo._id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
      style={{
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <span>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
      </span>
      <div>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => navigate(`/edit/${todo._id}`)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
