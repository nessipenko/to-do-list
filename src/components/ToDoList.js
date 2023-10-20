import { useState } from "react"
import ToDo from "./ToDo"
import '../styles/ToDo.css'
import AddToDo from "./AddToDo"
import uuid from "react-uuid"


const ToDoList = () => {

    const [todos, setTosdos] = useState(
        [
            { id: uuid(), task: 'Сделать зарядку.', completed: false },
            { id: uuid(), task: 'Обновить резюме.', completed: false },
            { id: uuid(), task: 'Сделать покупки', completed: false },
        ]
    )

    const toogleComplete = (id) => {
        const updToDos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTosdos(updToDos)
    }
    const create = (newTodoObj) => {
        setTosdos([...todos, newTodoObj])
    }

    const updateTodo = (id, newTask) => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: newTask }
            }
            return todo;
        })
        setTosdos(updateTodos)
    }

    const removeTask = (id) => {
        let filerTodos = todos.filter((task) => task.id !== id)
        setTosdos(filerTodos)
    }
    const todoList = todos.map((todo, index) => (
        <ToDo
            update={updateTodo}
            remove={removeTask}
            key={index}
            toogleComplete={toogleComplete}
            todo={todo} />))


    return (

        <div className="ToDoList_container">
            <div className="Header">
                <h1 className="Todo_header">Todo List</h1>
                <h4 className="Todo_subheader">A simple React Todo List App</h4>
                <div className="divider"></div>
            </div>

            {todoList}
            <div />
            <div>
                <AddToDo createTodo={create} todos={todos} />
            </div>
        </div>
    )
}

export default ToDoList