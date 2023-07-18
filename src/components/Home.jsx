import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import NewTodo from './NewTodo';
import { useState } from 'react';

// const dummyTodos = [
//   {
//     id:uuidv4(),
//     title:"title 0",
//     desc:"desc 0"

//   },
//   {
//     id:uuidv4(),
//     title:"title 1",
//     desc:"desc 1"

//   },
//   {
//     id:uuidv4(),
//     title:"title 2",
//     desc:"desc 2"

//   },
// ]


const Home = () => {
  const [todos,setTodos]=useState([])

  const handleAddTodo = (todo) =>{
    setTodos((prevTodos)=>{
      return [...prevTodos, {id:uuidv4(),todo}]
    })
  }
  const handleRemoveTodo = (id) =>{
    const filteredTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(filteredTodos)
  }
  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home