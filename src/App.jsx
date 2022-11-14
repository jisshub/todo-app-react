import { useState } from 'react'
import './App.css'

let globalId = 0
function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  function createTodo(event) {
    event.preventDefault()
    setTodos(prevTodo => {
      setTask('')
      return [...prevTodo, {todo: task, id: globalId++}]
    })
  }

  function deleteTodo(id) {
    setTodos(prevTodos => 
      prevTodos.filter((todo) => todo.id !== id)  
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={createTodo}>
        <label htmlFor="todo" style={{paddingRight: '1rem'}}>Enter Task:</label>
        <input 
          type="text" 
          name="todo" 
          id="todo"
          value={task}
          onChange={event => setTask(event.target.value)}
          />
        <button 
          type="submit"
          >
          Add Todo
        </button>
      </form>
      <ul>
        {
          todos.map((item, index) => (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button 
                onClick={()=>deleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default App
