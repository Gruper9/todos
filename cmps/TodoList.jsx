
import { todoService } from "../sevices/todo.service.js"
import { TodoPreview } from "./TodoPreview.jsx"



export function TodoList({ todos, onRemoveTodo }) {
   
    function setTodoDoneUndone(todo){
        todo.isDone =!todo.isDone 
        todoService.save(todo)
    }

    return (
        <section className="todo-list">

            {todos && todos.map((todo) => (
                    <TodoPreview key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} setTodoDoneUndone={setTodoDoneUndone}  />
            ))
            }
        </section>
    )
}