import React from 'react';
import { useDispatch,useSelector  } from 'react-redux';
//import { } from 'react-redux';
import { decNumber,incNumber } from '../Action/index';

function Counter(props) {
    const dispData=useSelector((state)=>state.ChangeNumber)
    const dispatch =useDispatch();
    return (
    
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                    <button className='btn btn-primary' onClick={()=>dispatch(decNumber())}>Decrement</button>
                        <input type="text" value={dispData} />
                        <button className='btn btn-primary' onClick={()=>dispatch(incNumber())}>Increment</button>
                    </div>
                </div>
            </div>
        
    );
}

export default Counter;