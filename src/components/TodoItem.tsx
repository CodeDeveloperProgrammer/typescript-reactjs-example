//Interface de todo con los tipos de datos que tendrán
import { Todo } from "../App"

interface Props {
  //
  todo: Todo;
  toogleTodo: (selectedTodo: Todo) => void;
  removeTodo: (selectedTodo: Todo) => void;
}

const RemoveTodo = ({todo, toogleTodo, removeTodo}:Props) => {
  return (
    <>
        <article>
          <label htmlFor="todo">
            <input
              type="checkbox"
              id="todo"
              checked={todo.complete}
              onChange={() => toogleTodo(todo)}
            />
            {todo.text}
          </label>
          <button className="contrast" onClick={() => removeTodo(todo)}>
            Remove Todo
          </button>
        </article>
    </>
  )
}

export default RemoveTodo