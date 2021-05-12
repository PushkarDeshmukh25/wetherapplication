import axios from "axios";
 //import { FETCH_CUR_API_FAILURE, FETCH_CUR_API_REQUEST, FETCH_CUR_API_SUCCESS } from "./ApiActionTypes5";
import { FETCH_API_FAILURE, FETCH_API_REQUEST, FETCH_API_SUCCESS } from "./ApiActionTypes5D";

export const fetchSuccess = (dData) => ({
    type: FETCH_API_SUCCESS,
    payload:dData
})
export const fetchRequest = () => ({
    type: FETCH_API_REQUEST,
})

export const fetchFailure = (error) => ({
    type: FETCH_API_FAILURE,
    payload:error
})


export const fetchDatas =  (city) => {
    // alert("i am called")
return (dispatch)=>{
   // alert("called")
dispatch(fetchRequest())
axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}%20&appid=3fbb2b31fd3e77c536be64abc677a4d1`).then(res=>{
    console.log("weather data "+  res.data.list[0].weather[0].main)
    dispatch(fetchSuccess(res.data.list))
}).catch(error=>{
dispatch(fetchFailure(error.messsage))
})
}
}
// http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fbb2b31fd3e77c536be64abc677a4d1

