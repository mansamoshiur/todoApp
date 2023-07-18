/* eslint-disable react/prop-types */
import { useState } from "react"

const NewTodo = ({onAddTodo}) => {
  const [todo,setTodo]=useState({title:'',desc:''})
  const {title,desc}=todo
    const handleChange =(e)=>{
      const name = e.target.name
      setTodo((oldTodo)=>{
        return{...oldTodo, [name]:e.target.value}
      })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onAddTodo(todo)
        setTodo({title:' ', desc:' '})
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" onChange={handleChange}  value={title} />
        <label htmlFor="desc">Desc:</label>
        <textarea type="text" name="desc" id="desc" onChange={handleChange} value={desc} />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo