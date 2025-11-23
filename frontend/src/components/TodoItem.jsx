export default function TodoItem({ todo }) {
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
        <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </div>
  );
}
