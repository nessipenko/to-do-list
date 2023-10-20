import './App.css';
import './styles/AddToDoForm.css'
import './styles/ToDo.css'
import './styles/Header.css'
import './styles/ToDoList.css'
// import CityList from './components/CityList';
import ToDoList from './components/ToDoList';

function App() {

    return (
        <div className='Container'>
            <ToDoList />
            {/* <CityList /> */}

        </div>
    );
}

export default App;
