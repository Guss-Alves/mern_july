import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Form = () => {

    let [forminfo, setFormInfo] = useState ({});
    let [formerror, setFormError] = useState({})

    const navigate = useNavigate();

    const changeHandler = (e)=>{
        setFormInfo({
            ...forminfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pet/new', forminfo)
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
            <h2 className='mt-3 ms-3'> Know a pet needing a home?</h2>
            <form onSubmit={submitHandler} className='ms-3 border border-secondary p-3 d-flex' style={{width: '500px'}} >
                <div className="left-form">
                <div className="form-group me-3">
                    <label>Pet Name:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='name' />
                    <p className='text-danger'>{formerror.name?.message}</p>
                </div>
                <div className="form-group">
                    <label>Pet type:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='type' />
                    <p className='text-danger'>{formerror.type?.message}</p>
                </div>
                <div className="form-group">
                    <label>Pet description:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='description' />
                    <p className='text-danger'>{formerror.description?.message}</p>
                </div>
                <input className='mt-2 btn btn-success' type="submit" value="Add Pet" />
                </div>
                <div className="right-form d-inline">
                <p>Skills (optional)</p>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillOne' />
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillTwo' />
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input onChange={changeHandler} type="text" className="form-control w-auto" name='skillThree' />
                </div>
                
                </div>
            </form>
        </div>
    );
};


export default Form;