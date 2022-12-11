import React, { useState } from "react";
import "./NewTodoForm.css"

/** Form for creating a new todo to add to TodoList.
 *
 * Has state for the todo/completed; 
 * on submission, sends {todo, completed} to fn rec'd from parent.
 */

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = { todo: "", completed: false };
    const [todoData, setTodoData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodoData(todoData => ({
            ...todoData,
            [name]: value
        }));
    };
    /** Send {todo, completed} to parent & clear form. */
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...todoData });
        //pass in the entire form data object to addItem()
        setTodoData(INITIAL_STATE);
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <span className="NewTodoForm-inputGroup">
                <label htmlFor="todo" >Todo: </label>
                <input
                    id="todo"
                    type="text"
                    name="todo"
                    placeholder="Something that needs to get done"
                    value={todoData.todo}
                    onChange={handleChange} />
            </span>
            <span className="NewTodoForm-button">
                <button>Add</button>
            </span>
        </form>
    )
};

export default NewTodoForm;