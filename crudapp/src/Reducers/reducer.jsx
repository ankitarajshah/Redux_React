const InitialData={
    details:[],
    isDeleteResponse:false,
    isPostResponse:false
}

const reducer=(state= InitialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
        case 'DELETE_DETAILS':
            return{
                isDeleteResponse:action.payload
            }
            case 'POST_DETAILS':
                return{
                    isPostResponse:action.payload
                }
        default:return state;
    }
}
export  default reducer;