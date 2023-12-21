
import { todoService } from "../sevices/todo.service.js"
import { TodoPreview } from "./TodoPreview.jsx"

const { useNavigate } = ReactRouterDOM

export function TodoList({ todos, loadTodos }) {
    const navigate = useNavigate()


    function onRemoveTodo(todoId) {
        todoService.remove(todoId)
            .then(loadTodos)
            .catch(err => console.log('err: ', err))

    }
    function setTodoDone(todo){
        todo.isDone =!todo.isDone 
        todoService.save(todo)
    }

    return (
        <section className="todo-list">

            {todos && todos.map((todo) => (
                    <TodoPreview key={todo.id} todo={todo}  onRemoveTodo={onRemoveTodo} setTodoDone={setTodoDone}/>
            ))
            }
        </section>
    )
}