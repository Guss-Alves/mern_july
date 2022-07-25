import './App.css';
import PetsList from './components/PetsList';
import Form from './components/Form'
import Details from './components/Details';
import Update from './components/Update';
import {
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1 className='mt-3 ms-3'>Pet Shelter</h1>
            <Routes>
                <Route exact path='/' element={<PetsList/>}></Route>
                <Route exact path='/api/pet/new' element={<Form/>}></Route>
                <Route exact path='/api/pet/:id' element={<Details/>}></Route>
                <Route exact path='/api/pet/edit/:id' element={<Update/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
