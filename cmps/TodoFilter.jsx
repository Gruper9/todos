const { useState, useEffect } = React


export function TodoFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function onSetFilterBy(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange(event) {
        const target = event.target
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }


    const { txt, status } = filterByToEdit

    return (
        <section className="todo-filter">

            <form onSubmit={onSetFilterBy} className="search-todo">
                <input value={txt} onChange={handleChange} type="text" name="txt" placeholder="search" />

                <select value={status} onChange={handleChange} name="status" id="status">
                    <option value="">all</option>
                    <option value="done">Done</option>
                    <option value="active">Active</option>

                </select>
            </form>
        </section>
    )
}