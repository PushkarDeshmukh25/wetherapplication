import React, { Component } from 'react'
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
export default class Logout extends Component {
   constructor(props) {
       super(props)
   localStorage.removeItem("token")
       
   }
   
    render() {
        return (
           
< div className="child3">
              <div className="child">
                  <alert >Logged out Successfully</alert> 

                  <br/>
                  <br/>
                  <br/>
                  <Link to="/" class="btn btn-secondary " >Login Again</Link>
              </div>
          
                {/* <h1 className="child">you logged out</h1> */}
                <div  className="child1" >
               
                
            </div>
            </div>
            
        )
    }
}
