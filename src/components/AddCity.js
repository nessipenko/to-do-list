import { useState } from "react"
import uuid from "react-uuid"

const AddCity = ({ cities, createCity }) => {
    const [newCity, setNewCity] = useState('')
    const [showWarning, setShowWarning] = useState(false)

    const handleChange = (event) => {
        setNewCity(event.target.value)
        setShowWarning(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newCity.trim() !== '') {
            const newCityObj = { id: uuid(), city: newCity }
            createCity(newCityObj)
            setNewCity('')
            setShowWarning(false)
        } else {
            setShowWarning(true)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>New City</h2>
            <input
                className="Input"
                placeholder="New City"
                onChange={handleChange}
                value={newCity}
            />
            <button
                className="Btn"> add todo
            </button>
            {showWarning && <p style={{ color: 'red' }}>ENTER THE CITY</p>}
        </form>
    )
}

export default AddCity