export default function AddTodo() {
  return (
    <form
      className="d-flex justify-content-center"
      style={{ maxWidth: "600px", margin: "200px auto" }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Add Task"
        aria-label="Type"
      />
      <button class="btn btn-danger" type="submit">
        Add
      </button>
    </form>
  );
}
