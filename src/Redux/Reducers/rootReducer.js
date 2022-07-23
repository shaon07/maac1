import { combineReducers } from "redux";
import getApiMethod from "./getAPiMethod";
import getArea from './getArea';
import getRegion from "./getRegion";
import postTokenReducer from "./postTokenReducer";



const rootReducer = combineReducers({
    getRegion,
    getArea,
    postTokenReducer,
    getApiMethod
});

export default rootReducer;