import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
    console.log("Sending:", email, password);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Response received:", response);
      if (response.data.success) {
        setMessage("Login successfull");
        localStorage.setItem("token", response.data.token);
        // Store user details
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: response.data.name, // your backend sends 'name'
            email: response.data.email,
          })
        );

        navigate("/");
      } else {
        setMessage(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong!");
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
          backgroundColor: "#30363cff", // extra dark gray
        }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4 text-light">Login</h3>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-light">
            Email address
          </label>
          <input
            type="email"
            className="form-control bg-dark text-light border-1 border-secondary"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-light"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control bg-dark text-light border-1 border-secondary"
            id="exampleInputPassword1"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        {/* Signup Link */}
        <div className="text-center mt-3 text-light">
          <small>
            No account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Create Account
            </span>
          </small>
        </div>
      </form>
      <p className="mt-3 text-danger">{message}</p>
    </div>
  );
}
