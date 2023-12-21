

const { createStore } = Redux
export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODOS = 'REMOVE_TODOS'

/// user
export const SET_USER = 'SET_USER'
export const SET_USER_SCORE = 'SET_USER_SCORE'

const initialState = {
    todos: []
}

function appReducer(state = initialState, action = {}) {
    let todos
    switch (action.type) {
        case SET_TODOS:
            return { ...state, todos: action.todos }
        case REMOVE_TODOS:
            todos = state.todos.filter(todo => todo.id !== action.todoId)
            return { ...state, todos }
      

        default:
            return state
    }
}

export const store = createStore(appReducer)
window.gStore = store
// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })