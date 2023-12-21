const {useState}=React
export function TodoPreview({ todo, onRemoveTodo, setTodoDone }) {
 
    const dynclass = todo.isDone === true ? 'done' : 'undone'


    return (
        <section className={`todo-preview ${dynclass}`}>

           
        <div className="todo-info" onClick={() => setTodoDone(todo)}>
            <span className="todo-subject" >{todo.subject}</span>
            </div>
             <button classname="delete-btn" title="remove todo" onClick={() => onRemoveTodo(todo.id)}>x</button>
        </section>
    )

}
