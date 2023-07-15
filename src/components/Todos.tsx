import TodoItem from "./TodoItem"

//SE PODRÍA IMPORTAR ESTO
/* 
interface Todo {
  text: string;
  complete: boolean;
}
*/

interface Props {
  todos: {
    text: string;
    complete: boolean;
  }[];
  toogleTodo: (selectedTodo: { text: string; complete: boolean }) => void;
  removeTodo: (selectedTodo: { text: string; complete: boolean }) => void;
}

const Todos = ({ todos, toogleTodo, removeTodo }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem 
        key={todo.text}
        todo={todo} 
        toogleTodo={toogleTodo} 
        removeTodo={removeTodo}  
        />
      ))}
    </>
  );
};

export default Todos;
