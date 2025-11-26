import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  // Extracting user's data from localstorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    localStorage.removeItem("user");
    setUserName("");
    navigate("/login");
  };
  return (
    <nav
      class="navbar fixed-top"
      style={{
        padding: "0.5rem 2rem",
        marginTop: "10px",
        backgroundColor: "#10214bff",
      }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          style={{ color: "grey", fontSize: "1.8rem", fontWeight: "700" }}
        >
          <span className="text-light me-3">Hi, {userName}</span>
        </a>
        <form class="d-flex" role="search">
          <button
            class="btn btn-outline-secondary"
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1.2rem",
              margin: "0 8px",
            }}
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
