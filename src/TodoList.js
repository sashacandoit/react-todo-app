import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo"
import { v4 as uuid } from "uuid";

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), todo: 'Make first todo!', completed: false}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }]);
    }

    return (
        <div>
            <h1>React Todo List</h1>
            {/* <NewTodoForm addTodo={addTodo} /> */}
            <ol>
                {todos.map(({id, todo, completed}) => <Todo id={id} todo={todo} key={id} completed={completed} />)}
            </ol>
        </div>
    )
}

export default TodoList;