import React from 'react'
import { useSelector, useStore } from 'react-redux';

const TodoList = () => {
    const store = useStore();
    console.log(store.getState())
    const todoList = useSelector((state:any) => state.todosReducer.todos)
    const [isOpen, serIsOPen] = useState(false)
    

    const handleChange = () => {
        console.log('2: ', store.getState())
    }

    const unsubscribe = store.subscribe(handleChange)
    unsubscribe()

    return (
        <div>
            {todoList.map((todo: any) => (<p>{todo.text}</p>))}
        </div>
    )
}

export default TodoList