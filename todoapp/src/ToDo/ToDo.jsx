import React, { useState } from 'react';

import {AddToDo} from '../Action/index'
import { useSelector,useDispatch } from 'react-redux';

function ToDo(props) {
    const [indata,setindata]= useState('')
    const list =useSelector((state)=>state.listdata.list
        )
    // console.log(list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <input type="text" 
                                className='form-control'
                                value={indata}
                                onChange={(event)=>{
                                    {setindata(event.target.value)}
                                }} />
                        <br/>
                        <button type='button'
                                className='btn btn-primary'
                                onClick={()=>
                                {  dispatch
                                    (AddToDo(indata),
                                    setindata(""))
                                }}>
                        Add Button</button>

                        {list.map((ele,i)=>{
                            return(
                                <>
                                    <h1>{ele.data}</h1>
                                    <button className='btn btn-success'>Delete</button>
                                </>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default ToDo;