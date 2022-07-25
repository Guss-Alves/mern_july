import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Details = () => {

    const [pet, setPet] = useState({})

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err));
    }, [id]);

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const likeOne = () => {
        let count = 0;
        let countElement = document.querySelector('#count');
        count++;
        countElement.innerHTML = count + 'like(s)'
    }

    return (
        <div>
            <Link to='/' className='ms-3'>back to home</Link>
            <div className="mt-3 d-flex align-items-center">
                <h3 className=' ms-3 me-5'>Details about: {pet.name} </h3>
                <button onClick={deletePet} className='btn btn-danger btn-sm'>Adopt {pet.name}</button>
            </div>
            <div className="border ms-3 p-1" style={{ width: '500px' }} >
                <div>
                    <h4 className='d-inline'>Pet Type :</h4> <span>{pet.type} </span><br />
                    <h4 className='d-inline'>Description :</h4> <span>{pet.description} </span><br />
                    <h4 className='d-inline'>Pet Skills :</h4> <span>{pet.skillOne} <br /> {pet.skillTwo} <br /> {pet.skillThree} </span><br />
                </div>
                <button onClick={likeOne} className='btn btn-success me-3 d-inline'>Like {pet.name}</button>
                <span id='count' className='font-weight-bold'>0 like(s)</span>
            </div>
        </div>
    );
};

export default Details;