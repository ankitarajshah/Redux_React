import {GetApiDetails,DeleteApiDetails,PostApiDetails} from "../API/axiosrequest";

export const GetApiAction =()=>{
    return function(dispatch)
    {
        return GetApiDetails().then((res)=>{
            dispatch({
                type :'GET_DETAILS',
                payload : res.data
            })
        })
    }
}

export const DeleteApiAction=(id)=>{
    return function(dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            dispatch({
                type:'DELETE_DETAILS',
                payload : true,
            })
        })
    }
}

export const PostApiAction=(data)=>{
    return function(dispatch)
    {
        return PostApiDetails(data).then((res)=>{
            console.log("Response from post data",res);
            dispatch({
                type:'POST_DETAILS',
                payload:'',
            })
        })
    }
}