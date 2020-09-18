import React, { useState } from 'react'
import { useSelector, useStore } from 'react-redux';
import Todo from '../common/interfaces/todo.interface';
import { SingleTodo } from './single-todo-component';

const TodoList = () => {
    const store = useStore();
    console.log(store.getState())
    const todoList = useSelector((state:any) => state.todosReducer.todos)
    const [isOpen, serIsOPen] = useState(false)

    console.log('todoList: ', todoList)

    const handleChange = () => {
        console.log('2: ', store.getState())
    }

    const unsubscribe = store.subscribe(handleChange)
    unsubscribe()

    return (
        <div>
            {todoList.map((todo: Todo) => (
                <div>
                {todo.text}
                <SingleTodo todo={todo} ></SingleTodo>
            </div>
            ))}
        </div>
    )
}

export default TodoList