import Todo from "../../common/interfaces/todo.interface";

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// actions
export const addTodo = (singleTodo: Todo) => {
    return { type: ADD_TODO, payload: singleTodo }
}

// export const completeTodo = (id: number) => {
//     return { type: COMPLETE_TODO, id }
// }

// export const setVisibility = (filter: string) => {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }