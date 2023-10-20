import { useState } from "react"
import City from "./City"
import AddCity from "./AddCity"

const CityList = () => {

    const [cities, setCity] = useState([
        { id: 1, city: 'Minsk', visit: false },
        { id: 2, city: 'Alanya', visit: false },
        { id: 3, city: 'Poznan', visit: false },
    ])

    const toogleVisit = (id) => {
        const updCity = cities.map(city => {
            if (city.id === id) {
                return { ...city, visit: !city.visit }
            }
            return city
        })
        setCity(updCity)
    }

    const create = (newCityObj) => {
        setCity([...cities, newCityObj])
    }

    const changeCity = (id, newCity) => {
        let changeCities = cities.map(city => {
            if (city.id === id) {
                return { ...city, city: newCity }
            }
            return city;
        })
        setCity(changeCities)
    }

    const removeCity = (id) => {
        let filteredCities = cities.filter((city) => city.id !== id)
        setCity(filteredCities)
    }
    const cityList = cities.map((city, index) => (
        <City
            update={changeCity}
            remove={removeCity}
            key={index}
            toogle={toogleVisit}
            city={city}
        />
    ))

    return (
        <div className="ToDoList_container">
            {cityList}
            <div>
                <AddCity createCity={create} cities={cities} />
            </div>
        </div>

    )
}

export default CityList;