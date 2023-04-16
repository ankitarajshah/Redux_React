import axios from "axios";

export async function AxiosRequest(url,method,headers,params) 
{
  return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    
  }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    }
  )
}
//get all data from api
const GetApiDetails=()=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details','GET',headers,{})
}
export{GetApiDetails}
//delete data from api

const DeleteApiDetails=(id)=>{
  const headers={
    'Content-Type':'application/json'
  }
  return AxiosRequest('http://localhost:3000/details/'+id,'DELETE',headers,{})
}
export{DeleteApiDetails}

//post data(add) in api
const PostApiDetails=(data)=>{
  return axios.post('http://localhost:3000/details',data)

}

export{PostApiDetails}