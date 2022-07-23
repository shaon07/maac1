import { GET_AREA_DATA } from "../constants/All"

const initData = {
    data:[]
}

const getArea = (state=initData,action) => {
    switch (action.type) {
        case GET_AREA_DATA:
            return {
                data:[action.payload]
            }
    
        default:
            return state
    }
}
export default getArea;