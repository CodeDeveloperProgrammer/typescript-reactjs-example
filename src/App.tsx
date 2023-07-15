import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "Learn React",
    complete: false,
  },
  {
    text: "Lear TypeScript",
    complete: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const toogleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
        <h1 className="text-center">
          <mark>Todo List</mark>
        </h1>
      
      <FormAddTodo addTodo={addTodo} />

      <div>
        <Todos todos={todos} toogleTodo={toogleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default App;
