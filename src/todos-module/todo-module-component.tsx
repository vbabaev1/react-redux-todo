import React from 'react'
import { useStore } from 'react-redux'
import { AddTodo } from './add-todo-component'
import TodoList from './todo-list-component'

export const TodosModule = () => {
    return (
        <div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
        </div>
    )
}