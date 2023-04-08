const IntialData={
    list:[]
}

const MyData=(state=IntialData,action)=>{
    switch(action.type)
    {
        case 'ADDTODO':
            const id =action.payload.id;
            console.log(id);
            const data =action.payload.data;
            console.log(data);
            return{
                ...state,
                list:[
                    ...state.list,{
                        id:id,
                        data:data
                    }
                ]
            }
    }
}

export default MyData;