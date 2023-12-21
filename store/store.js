import { userService } from "../services/user.service.js"

const { createStore } = Redux

/// user
export const SET_USER = 'SET_USER'
export const SET_USER_SCORE = 'SET_USER_SCORE'

const initialState = {
    count: 101,
    todos: [],
    loggedinUser: userService.getLoggedinUser(),

}

function appReducer(state = initialState, action = {}) {

    let cars
    let shoppingCart
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'CHANGE_BY':
            return { ...state, count: state.count + action.diff }

        // car
        case SET_CARS:
            return { ...state, cars: action.cars }

        case REMOVE_CAR:
            cars = state.cars.filter(car => car._id !== action.carId)
            return { ...state, cars }

        case ADD_CAR:
            cars = [...state.cars, action.car]
            return { ...state, cars }

        case UPDATE_CAR:
            cars = state.cars.map(car => car._id === action.car._id ? action.car : car)
            return { ...state, cars }



        // user
        case SET_USER:
            return { ...state, loggedinUser: action.user }
        case SET_USER_SCORE:
            const user = {...state.loggedinUser, score: action.score}
            return { ...state, loggedinUser: user }
        default:
            return state
    }
}

export const store = createStore(appReducer)

window.gStore = store
// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })