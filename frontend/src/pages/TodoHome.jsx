import Navbar from "../components/Navbar";
import AddTodo from "../components/AddTodo";
import TodoContainer from "../components/TodoContainer";

export default function TodoHome() {
  const todos = [
    {
      _id: 1,
      title: "Learn React",
      description: "Start with components, props, and state basics",
    },
    {
      _id: 2,
      title: "Build a Todo App",
      description: "Create add, edit, delete features with React Router",
    },
    {
      _id: 3,
      title: "Learn Bootstrap",
      description: "Practice grid system, utilities, and components",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <AddTodo></AddTodo>
      <TodoContainer todos={todos}></TodoContainer>
    </div>
  );
}
