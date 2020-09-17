import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import Todo from "../common/interfaces/todo.interface";
import { addTodo, ADD_TODO } from "../redux/actions/todo-actions";


interface NewTodo {
    text: string;
}

export const AddTodo = () => {
    const dispatch = useDispatch();
    let text = '';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        text = e.target.value
    }

    const generateTodo = () => {
        const newTodo: Todo = {
            id: Math.round(Math.random()*1000),
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
