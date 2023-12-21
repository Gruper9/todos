const {useState}=React

export function TodoPreview({ todo, onRemoveTodo, setTodoDoneUndone }) {
    const [todoIsDone, setTodoIsDone] = useState(todo.isDone)

    const dynclass = todo.isDone === true ? 'done' : ''

    function updateTodoDone(todo) {
        setTodoIsDone(!todo.isDone)
        setTodoDoneUndone(todo)
    }


    return (
        
        <section className={`todo-preview ${dynclass}`}>
        <div className="todo-info" onClick={() => updateTodoDone(todo)}>
            <span className="todo-subject" >{todo.subject}</span>
             <button className="delete-btn" title="remove todo" onClick={() => onRemoveTodo(todo.id)}>x</button>
            </div>
        </section>
    )

}
