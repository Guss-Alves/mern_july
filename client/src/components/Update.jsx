import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const Update = () => {

    const [update, setUpdate] = useState({})
    let [formerror, setFormError] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setUpdate(res.data.results))
            .catch(err => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/edit/${id}`, update)
            .then(res =>{
                console.log(res)
                if(res.data.errors){
                    setFormError(res.data.errors)
                }else{
                    navigate('/')
                }
            })
            .catch(err=>{
                console.log('Something went wrong', err)
            })
    };

    return (
        <div>
            <Link to='/' className='ms-3'>back to home</Link>
            <h1 className='ms-3'>Edit {update.name}</h1>
            <form onSubmit={submitHandler} className='ms-3 border border-secondary p-3 d-flex' style={{width: '500px'}} >
                <div className="left-form">
                <div className="form-group me-3">
                    <label>Pet Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='name' value={update.name} />
                    <p className='text-danger'>{formerror.name?.message}</p>
                </div>
                <div className="form-group">
                    <label>Pet type:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='type' value={update.type} />
                    <p className='text-danger'>{formerror.type?.message}</p>
                </div>
                <div className="form-group">
                    <label>Pet description:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='description' value={update.description} />
                    <p className='text-danger'>{formerror.description?.message}</p>
                </div>
                <input className='mt-2 btn btn-success' type="submit" value="Edit Pet" />
                </div>
                <div className="right-form d-inline">
                <p>Skills (optional)</p>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillOne' value={update.skillOne}/>
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillTwo' value={update.skillTwo} />
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillThree' value={update.skillThree} />
                </div>
                
                </div>
            </form>
        </div>
    );
};


export default Update;