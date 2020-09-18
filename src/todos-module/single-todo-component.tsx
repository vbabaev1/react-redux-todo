import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Todo from '../common/interfaces/todo.interface'
import { deleteTodo } from '../redux/actions/todo-actions'

interface SingleTodoInterface {
    todo: Todo
}

export const SingleTodo = (props: SingleTodoInterface) => {
    const [viewMode, setViewMod] = useState('view')
    const [text, setText] = useState(props.todo.text)

    const dispatch = useDispatch()

    const clickHandle = (event: React.MouseEvent) => {
        const id = (event.target as HTMLInputElement).id;
        dispatch(deleteTodo(id))
    }

    const blurHandle = (event: React.FocusEvent) => {
        console.log(5000)
        setViewMod('edit')
    }

    if (viewMode === 'view') {
        return (
            <div>
                    <div 
                        style={{background: "red"}} 
                        onDoubleClick={() => setViewMod('edit')} 
                        
                    >
                    {text}
                    </div>
                    <input type="checkbox" checked={props.todo.checked} />
                    <button id={props.todo.id} onClick={clickHandle}>x</button>
            </div>
        )
    } 

    if (viewMode === 'edit') {
        return (
            <div>
                    <input 
                    type="text" 
                    onChange={(e) => setText(e.target.value)}
                    value={text} 
                    autoFocus={true} 
                    onBlur={blurHandle}/>
                    <input type="checkbox" checked={props.todo.checked} />
                    <button id={props.todo.id} onClick={clickHandle}>x</button>
            </div>
        )
    }

    return null

}