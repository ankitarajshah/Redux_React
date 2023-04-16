import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostApiAction } from '../Actions';

function Form(props) {

    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[country,setcountry]=useState('');

    const nameHandler=(e)=>{
        setname(e.target.value);
    }
    const emailHandler=(e)=>{
        setemail(e.target.value);
    }
    const phoneHandler=(e)=>{
        setphone(e.target.value);
    }
    const countryHandler=(e)=>{
        setcountry(e.target.value);
    }

    let dispatch =useDispatch();

    const ClickHandler=(e)=>{
        console.log('called');
        const Finaldata ={
            name:name,
            email:email,
            phone:phone,
            country:country
        }
        dispatch(PostApiAction(Finaldata))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3 mt-3">
                            <label for='name' className='form-label'>Name:</label>
                            <input type="text" 
                                    className='form-control' 
                                    id='name'
                                    placeholder='Enter your name'
                                    name='name'
                                    onChange={(e)=>{nameHandler(e)}}/>
                        </div>
                        <div className="mb-3 mt-3">
                        <label for='email' className='form-label'>Email:</label>
                            <input type="email" 
                                    className='form-control' 
                                    id='email'
                                    placeholder='Enter your email'
                                    name='email'
                                    onChange={(e)=>{emailHandler(e)}}/>
                        </div>
                        <div className="mb-3 mt-3">
                        <label for='phone' className='form-label'>Phone:</label>
                            <input type="text" 
                                    className='form-control' 
                                    id='phone'
                                    placeholder='Enter your Phone number'
                                    name='phone'
                                    onChange={(e)=>{phoneHandler(e)}}/>
                        </div>
                        <div className="mb-3 mt-3">
                        <label for='country' className='form-label'>Country:</label>
                            <input type="text" 
                                    className='form-control' 
                                    id='country'
                                    placeholder='Enter your country'
                                    name='country'
                                    onChange={(e)=>{countryHandler(e)}}/>
                          <button type="button" class="btn btn-primary" onClick={(e)=>ClickHandler(e)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Form;