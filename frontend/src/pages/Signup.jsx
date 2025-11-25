import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        { name, email, password }
      );

      if (response.data.success) {
        setMessage("Signup successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#101930ff" }}
    >
      <form
        className="p-4 rounded shadow"
        style={{
          width: "350px",
          backgroundColor: "#30363cff",
        }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4 text-light">Signup</h3>

        <div className="mb-3">
          <label className="form-label text-light">Full Name</label>
          <input
            type="text"
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Email address</label>
          <input
            type="email"
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Password</label>
          <input
            type="password"
            className="form-control bg-dark text-light border-1 border-secondary"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <button className="btn btn-primary w-100">Signup</button>
      </form>
      <p className="mt-3 text-danger">{message}</p>
    </div>
  );
}
