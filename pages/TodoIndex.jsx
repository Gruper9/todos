
import { todoService } from "../sevices/todo.service.js"
import { TodoFilter } from "../cmps/TodoFilter.jsx"
import { TodoList } from "../cmps/TodoList.jsx"
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import {  SET_TODOS , REMOVE_TODOS,UPDATE_TODOS  } from '../store/store.js'

const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

export function TodoIndex() {
    const dispatch = useDispatch()

    const todos = useSelector(storeState => storeState.todos)

    // const [todos, setTodos] = useState(null)
    const [filterBy, setFilterBy] = useState(todoService.getDefaultFilter())

    useEffect(() => {
        loadTodos()
        return () => {
            console.log('Unmounted')
        }
    }, [filterBy])

    function loadTodos() {
        todoService.query(filterBy)
            .then((todos)=>  {
                // setCars(cars)
                dispatch({ type: SET_TODOS, todos })
                console.log(todos)
            } )
            .catch((err) => console.log('err:', err))
    }

    
    function onRemoveTodo(todoId) {
        todoService.remove(todoId)
            .then(() => {
                dispatch({ type: REMOVE_TODOS, todoId })
                showSuccessMsg('todo removed')
            })
            .catch(err => {
                console.log('Cannot remove todo', err)
                showErrorMsg('Cannot remove todo')
            })
    }


    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (todos) {
        return (
            <section className="todo-index">
                <div className="main-layout flex ">
                    <div className="todo-list-continer">
                          
                            <TodoFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                       
                        <TodoList todos={todos} setTodoDoneUndone={setTodoDoneUndone} loadTodos={loadTodos} onRemoveTodo={onRemoveTodo} />
                    </div>
                </div>
            </section>
        )
    } else {
        return (<span className="loader"></span>)
    }
}
