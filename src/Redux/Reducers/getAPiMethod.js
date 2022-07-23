import { GET_API_METHOD, GET_API_USER } from "../constants/All";

const initData = {
    method : '',
    user:""
}

const getApiMethod = (state=initData,action) =>{
    switch (action.type) {
        case GET_API_METHOD:
            
            return {
                ...state,
                method:action.payload
            }
        case GET_API_USER :
            return {
                ...state,
                user:action.payload
            }
    
        default:
            return state;
    }
}

export default getApiMethod;