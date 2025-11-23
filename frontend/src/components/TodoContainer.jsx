import TodoItem from "./TodoItem";
export default function TodoContainer({ todos }) {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}
