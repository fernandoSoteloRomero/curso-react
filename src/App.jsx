import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [count, setCount] = useState(0);
  const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el curso de intro a React", completed: false },
    { text: "Llorar con la llorona", completed: false },
  ];
  return (
    <>
      <div className="container">
        <TodoCounter completed={16} total={20} />
      </div>

      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;
