import { useState } from "react"

const City = ({ city, update, remove, toogle }) => {

    const [isChanging, setIsChanging] = useState(false)
    const [name, setName] = useState(city.city)

    const handleClick = () => {
        setIsChanging(!isChanging)
    }
    const changeCity = (e) => {
        setName(e.target.value)
    }
    const saveNewCity = (event) => {
        event.preventDefault()
        update(city.id, name)

        setIsChanging(!isChanging)
    }
    const handleRemove = () => {
        remove(city.id)
    }
    const handleVisit = () => {
        toogle(city.id)
    }

    let resultCity;

    if (!isChanging) {
        resultCity = (
            <div className="ToDo">
                <span
                    onClick={handleVisit}
                    className={city.visit ? "ToDoTask completed" : "ToDoTask"}>
                    {city.city}
                </span>
                <div>
                    <button
                        className="Edit"
                        onClick={handleClick}>
                        change
                    </button>
                    <button
                        className="Edit"
                        onClick={handleRemove}>
                        DELETE
                    </button></div>
            </div >
        )
    } else {
        resultCity = (
            <div className="ToDo">
                <form onSubmit={saveNewCity}>
                    <input className="Input"
                        onChange={changeCity}
                        value={name} />
                    <button
                        className="Btn">SAVE</button>

                </form>
            </div>
        )
    }
    return (resultCity)

}

export default City