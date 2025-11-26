import TodoItem from "./TodoItem";
export default function TodoContainer({ todos, setTodos }) {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
