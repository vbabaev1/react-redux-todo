import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import Todo from "../common/interfaces/todo.interface";
import { addTodo } from "../redux/actions/todo-actions";


interface NewTodo {
    text: string;
}

export const AddTodo = () => {
    const dispatch = useDispatch();
    let text = '';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        text = e.target.value
    }

    const generateTodo = () => {
        const newTodo: Todo = {
            id: String(Math.round(Math.random()*1000)),
            text,
            checked: false,
        }
        dispatch(addTodo(newTodo))
    }

    return (
        <div>
            <div>
                <input onChange={handleChange} type="text" id="newTodo"/>
            </div>
            <button onClick={generateTodo}>Add</button>
        </div>
    )
        
}
