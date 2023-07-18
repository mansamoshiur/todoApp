/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {BsTrash} from 'react-icons/bs'

const Todo = ({todo,id, onRemoveTodo}) => {
    const {title,desc}=todo
  
    const handleClick = (id) =>{
      onRemoveTodo(id)
    }
  return (
    <div key={id}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <button onClick={()=>{handleClick(id)}}>
          <BsTrash />
        </button>
      </div>
    </div>
  )
}

export default Todo