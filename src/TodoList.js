import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo"
import { v4 as uuid } from "uuid";
import "./TodoList.css"

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), todo: 'Make first todo!'}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }]);
    }

    // delete a todo by id
    const completeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="TodoList">
            <h1>React Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <ol>
                {todos.map(({id, todo}) => <Todo id={id} todo={todo} key={id} completeTodo={completeTodo} />)}
            </ol>
        </div>
    )
}

export default TodoList;