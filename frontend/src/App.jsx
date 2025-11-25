import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import EditTodo from "./pages/EditTodo.jsx";
import TodoHome from "./pages/TodoHome.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditTodo />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <TodoHome />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
