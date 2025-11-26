export default function Welcome() {
  return (
    <div
      className="text-center py-4 px-3 rounded"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)", // subtle transparent background
        color: "#0d0c0cff", // light gray text
        maxWidth: "800px",
        margin: "130px auto 0px auto", // increased top margin for more space from navbar
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)", // subtle shadow
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#10214bff",
        }}
      >
        Welcome to Your Todo App!
      </h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        Add your tasks, edit them, and delete tasks you no longer need. Stay
        organized and manage your day efficiently!
      </p>
    </div>
  );
}
