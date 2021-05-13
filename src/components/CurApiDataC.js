import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchDatas } from '../Redux/API_5D/ApiAction5D'
import { fetchData } from '../Redux/API_CUR_DATA/ApiActions'
import About from './About'
 
import COLD from '../images/cold.png'
import HUMIDITY from '../images/humidity.png'
import DEG from '../images/deg.png' 
import SPEED from '../images/speed.png' 
import MAIN from '../images/main.svg'
import DES from '../images/des.png' 
import SCATTERED  from '../images/scattered.png'
import MAIN1 from '../images/main1.png'
function CurApiDataC() {
    // const state = useSelector(state =>state.curApi.data)

    const s = useSelector((state) => state)

    console.log(s.curApi.loading)
    //console.log(s.length())
    //  console.log(state.map((obj)=>{
    //     return obj
    //  }))






    const dispatch = useDispatch()
    const dispatch1 = useDispatch()

    const [city, setCity] = useState('mumbai')
    // const [weatherObj, setWeatherObj] = useState({})
    //let datas=[]
    // datas=state.data.clouds
    //console.log(datas)
    // const { loading, error, data } = state
    //  console.log(state.data.weather[0])

    let onchangecity = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
        // console.log(city)

        dispatch(fetchDatas(city))
        dispatch1(fetchData(city))

    }

    useEffect(() => {
        dispatch1(fetchData(city))
        dispatch(fetchDatas(city))


    }, [])

    //const{error,loading}= s
    

// <Spinner animation="border" role="status">
//   <span className="sr-only">Loading...</span>
// </Spinner>
//     const singleData= s.loading ?  <Backdrop className={classes.backdrop} open>
//     <CircularProgress color="inherit" />
//   </Backdrop> : error ? error.messsage :s.curApi.data.map(u =><h3>{u.main}</h3>)

    // const day5Data = s.Api5Day.data.map((e) => {
       
    //     return e.weather.map((obj) => {

    //         return (
    //             <ul>
    //                 <li>icon: <img src={`http://openweathermap.org/img/wn/${obj.icon}@2x.png`} /></li>
                    
    //                 <li>id : {obj.id} </li>
    //                 <li>main: <img src={MAIN1}/> {obj.main}</li>
    //                 <li>description: <img src= {SCATTERED}/>{obj.description} </li>
                    
                    
    //             </ul>
    //         )
    //     })
    // })


    const day5Data2 = s.Api5Day.data.map((e) => {
            
        
        

            return (
                <ul>
                    <li>id : {e.clouds.all} </li>
                     <li> temp: <img src={COLD}/> {e.main.temp}°C</li>
                 <li> humidity:<img src={HUMIDITY}/> {e.main.humidity} %</li> 
                 <li> <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} />{e.weather[0].main}</li>
                 <li> description:<img src={DES}/> {e.weather[0].description}</li>
                <li> wind_deg: <img src={DEG}/>{e.wind.deg} </li>
                 <li>wind_speed: <img src={SPEED}/> {e.wind.speed} </li>
                 </ul>
              )
             })
    
    
    //   console.log(x)
    const singleData = s.curApi.data !== null && s.curApi.data.map(obj => {

        return (
            <>

                <ul>
                <li>icon: <img src={`http://openweathermap.org/img/wn/${obj.icon}@2x.png`} /></li>
                    <li>id : {obj.id} </li>
                    <li>main:<img src={MAIN}/> {obj.main}</li>
                    <li> description:<img src= {SCATTERED}/>{obj.description} </li>
                   
                </ul>

            </>
        )
    })




    return (
        <>
            <div>
                <form className="form1 pb-5"  >
                    <h5>Select City</h5>

                    <select value={city} id="browsers" onChange={onchangecity}>
                        <option value="mumbai" >mumbai</option>
                        <option value="pune" >pune</option>

                        <option value="bangalore" >bangalore</option>

                        <option value="aurangabad" >aurangabad</option>
                        
                        <option value="goa" >goa</option>
                    </select>
                </form>
            </div>





           
     {s.curApi.loading?
<Spinner animation="border" role="status"className="spin">
  <span className="sr-only">Loading...</span>
</Spinner> :s.curApi.error?s.curApi.error:

            <div className="container">
                <div className="row">
                    <div className="col-md-4 card-body shadow DisplayCol" >

                        {
                            singleData
                        }
                    </div>

                    <div className="col-md-4 card-body shadow  DisplayCol">

                        
                           {/* // {day5Data} */}
                            {day5Data2} 
                        
                        
                    </div>

                    <div className="col-md-4  ">

                        <About />
                    </div>
                </div>

            </div>


}






        </>
    )
}

export default CurApiDataC