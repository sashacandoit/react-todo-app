import React from "react"

const Todo = ({ id, todo, completed }) => {
    return (
        <li className="Todo">
            {todo}
            <span className="Todo-delete">X</span>
        </li>
    )
}

export default Todo;