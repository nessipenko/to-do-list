import { useState } from "react"

const AddToDo = ({ todos, createTodo }) => {
    const [newTodo, setNewTodo] = useState()



    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodoObj = { id: todos.length + 1, task: newTodo, completed: false }
        createTodo(newTodoObj)
        setNewTodo('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="NewTodo-title">New todo</h3>
            <input
                className="Input"
                placeholder="New ToDo"
                onChange={handleChange}
                value={newTodo}
            />
            <button
                className="Btn"> add todo
            </button>
        </form>
    )
}

export default AddToDo 