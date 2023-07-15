import {ChangeEvent, FormEvent, useState} from 'react'


interface Props {
  addTodo: (text: string) => void;
}

const FormAddTodo = ({addTodo}:Props) => {

const [text, setText] = useState('')

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text.trim() === '') {
        return;
    }
    addTodo(text);
    setText('');
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input 
          type="text" 
          id="todo" 
          placeholder="Ingrese una tarea" 
          value={text}
          onChange={hadleChange}
          />
          <button type="submit">Add Todo</button>
        </label>
      </form>
    </>
  )
}

export default FormAddTodo