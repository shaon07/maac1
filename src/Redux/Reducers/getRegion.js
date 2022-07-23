import { GET_REGION_DATA } from "../constants/All"

const initData = {
    data:[]
}

const getRegion = (state=initData,action) => {
    switch (action.type) {
        case GET_REGION_DATA:
            return {
                data:[action.payload]
            }
    
        default:
            return state
    }
}
export default getRegion;