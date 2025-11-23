export default function Navbar() {
  return (
    <nav
      class="navbar fixed-top"
      style={{
        padding: "0.5rem 2rem",
        marginTop: "10px",
        backgroundColor: "#101930ff",
      }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          style={{ color: "grey", fontSize: "1.8rem", fontWeight: "700" }}
        >
          Todo App
        </a>
        <form class="d-flex" role="search">
          <button
            class="btn btn-outline-secondary"
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1.2rem",
              margin: "0 8px",
            }}
            type="submit"
          >
            Login
          </button>
          <button
            class="btn btn-outline-success"
            style={{ fontSize: "1rem", padding: "0.5rem 1.2rem" }}
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </nav>
  );
}
