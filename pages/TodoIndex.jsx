
import { todoService } from "../sevices/todo.service.js"
import { TodoFilter } from "../cmps/TodoFilter.jsx"
import { TodoList } from "../cmps/TodoList.jsx"


const { Link } = ReactRouterDOM
const { useState, useEffect } = React

export function TodoIndex() {
    const [todos, setTodos] = useState(null)
    const [filterBy, setFilterBy] = useState(TodoService.getDefaultFilter())

    useEffect(() => {
        loadTodos()
        return () => {
            console.log('Unmounted')
        }
    }, [filterBy])



    function loadTodos() {
        todoService.query(filterBy)
            .then((todos) => setTodos(todos))
            .catch((err) => console.log('err:', err))
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (todos) {
        return (
            <section className="todo-index">
                <div className="main-layout flex ">
                    <TodoFolders />
                    <div className="todo-list-continer">
                          
                            <TodoFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                       
                        <TodoList todos={todos} loadTodos={loadTodos} />
                    </div>
                </div>
            </section>
        )
    } else {
        return (<span className="loader"></span>)
    }
}
