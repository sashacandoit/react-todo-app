import React from "react"
import "./Todo.css"

const Todo = ({ id, todo, completeTodo }) => {
    const handleDelete = () => completeTodo(id);

    return (
        <li className="Todo">
            {todo}
            <span className="Todo-delete" onClick={handleDelete}>X</span>
        </li>
    )
}

export default Todo;