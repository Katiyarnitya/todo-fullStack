import Navbar from "../components/Navbar";
import AddTodo from "../components/AddTodo";
import TodoContainer from "../components/TodoContainer";
import Welcome from "../components/Welcome";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoHome() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend on page load
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/todos/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Welcome />
      <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
      <TodoContainer todos={todos} setTodos={setTodos}></TodoContainer>
    </div>
  );
}
