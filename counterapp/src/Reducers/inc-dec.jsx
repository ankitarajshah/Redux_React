//import incNumber from '../Action/index'
const intialData =0;
const ChangeNumber=(state=intialData,action) =>{
    switch(action.type)
    {
        case 'INCREMENT':
            return state+=1
        case 'DECREMENT':
            return state-=1
        default:
            return state;
        
    }
}

export default ChangeNumber