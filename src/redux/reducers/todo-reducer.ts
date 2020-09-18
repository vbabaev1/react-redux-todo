import TodoActionInterface from '../../common/interfaces/action.interface'
import Todo from '../../common/interfaces/todo.interface'
import { ADD_TODO, CHANGE_TEXT, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER } from '../actions/todo-actions'

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            }
        };

        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter((item: Todo) => item.id !== action.payload)
            }
        }

        case CHANGE_TEXT: {
            return {
                ...state,
                todos: state.todos.map((item: Todo) => {
                    if (item.id !== action.payload.id) {
                        item.text = action.payload.text   
                    }
                    return item
                })
            }
        }

        // case COMPLETE_TODO: {
            
        // };

        // case DELETE_TODO: {
            
        // };
        
        default: {
            return state
        }
    }
}