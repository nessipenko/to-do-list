import { useState } from "react"
import recycle from '../icons/recycle-bin.svg'
import pencil from '../icons/pencil.svg'

const ToDo = ({ todo, update, remove, toogleComplete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)


    const handleClick = () => {
        console.log('click')
        setIsEditing(!isEditing)
    }
    const editTask = (event) => {
        setTask(event.target.value)
    }

    const saveNewTodo = (e) => {
        e.preventDefault()
        update(todo.id, task)

        setIsEditing(!isEditing)
    }
    const handleRemove = () => {
        remove(todo.id)
    }
    const handleComplete = () => {
        toogleComplete(todo.id)
    }
    let result;

    if (!isEditing) {
        result = (
            <div className="ToDo" >
                <span onClick={handleComplete}
                    className={todo.completed ? "ToDoTask completed" : "ToDoTask"}>
                    {todo.task}
                </span>
                <div className="Btns">
                    <button
                        className="Edit"
                        onClick={handleClick} >
                        <img className='Icon'
                            src={pencil} alt="Recycle" />
                    </button>
                    <button
                        className="Edit"
                        onClick={handleRemove} >
                        <img className='Icon'
                            src={recycle} alt="Recycle" />
                    </button>
                </div>
            </div>
        )
    } else {
        result = (
            <div className="ToDo" >
                <form onSubmit={saveNewTodo}>
                    <input
                        className="Input"
                        onChange={editTask}
                        value={task} />
                    <button
                        className="Btn">
                        save
                    </button>
                </form>
            </div>
        )
    }

    return (
        result
    )
}

export default ToDo