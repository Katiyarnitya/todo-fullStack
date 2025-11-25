import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return token ? { children } : <Navigate to="/login" />;
}
