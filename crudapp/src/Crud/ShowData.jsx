import React, { useEffect } from 'react';

import { GetApiAction, DeleteApiAction} from '../Actions/index';
import { useDispatch, useSelector } from 'react-redux';

function ShowData(props) {
  const dispatch = useDispatch();
  const responseData = useSelector((state)=>state.reducer.details);
  const isDeleteResponse =useSelector((state)=>state.reducer.isDeleteResponse)
  console.log(responseData);

  useEffect(()=>{
    dispatch(GetApiAction())
  },[dispatch])

  if(isDeleteResponse)
  {
    alert("Your data has been deleted!");
  }
  const result = responseData?responseData.map((data)=>{
    console.log(data);
    return<> 
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
        <td><button className='btn btn-success'onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button></td>
      </tr>
    </>
  }):null;
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <h1 className='text-danger text-center'>Welcome to CRUD App</h1>
                <table className='table mx-auto text-center mt-5 table-bordered'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <tbody>
                      {result}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
      
    </>
  );
}
export default ShowData;