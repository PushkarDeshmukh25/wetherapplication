import { combineReducers } from "redux";
import ApiReducer5Days from "./Redux/API_5D/ApiReducer5D";
import curApiRed from "./Redux/API_CUR_DATA/ApiReducer";
 

const rootreducer=combineReducers({
    Api5Day:ApiReducer5Days ,
    curApi:curApiRed
})
export default rootreducer;