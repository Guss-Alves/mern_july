import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const PetsList = () => {

    let [allpets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data)
                setAllPets(res.data.results)
            })
            .catch(err => {
                console.log('Something went wrong', err)
            })
    }, []);

    return (
        <div>
            <Link to='/api/pet/new' className='btn btn-primary ms-3'>Add a new Pet</Link>
            <h2 className='ms-3 mt-3'>These pets are looking for a good home</h2>

            <table className="ms-3 me-3 table table-hover table-bordered w-50">
            <thead>
                <tr>
                <th scope="col">Pets</th>
                <th scope="col">Type</th>
                <th scope="col" className='text-center'>Actions</th>
                </tr>
            </thead>
            {
                allpets.map((item)=>{
                    return(
            <tbody key={item._id}>
                <tr>
                <td >{item.name}</td>
                <td >{item.type}</td>
                <td className='text-center'><Link to={`/api/pet/${item._id}`}>details</Link> | <Link to={`/api/pet/edit/${item._id}`}>edit</Link></td>
                
                </tr>
            </tbody>
                    )
                })
            }
            </table>
        </div>
    );
};


export default PetsList;