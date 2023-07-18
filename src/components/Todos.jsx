/* eslint-disable react/prop-types */
import Todo from "./Todo"

const Todos = ({todos, onRemoveTodo}) => {
  return (
    <div>
      <h1>All Todos</h1>
        {todos.map((todo)=>(<Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={onRemoveTodo} />))}
    </div>
  )
}

export default Todos