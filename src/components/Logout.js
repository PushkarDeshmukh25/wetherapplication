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
                  <alert>𝓛𝓸𝓰𝓰𝓮𝓭 𝓸𝓾𝓽 𝓢𝓾𝓬𝓬𝓮𝓼𝓼𝓯𝓾𝓵𝓵𝔂</alert> 

                  <br/>
                  <br/>
                  <br/>
                  <Link to="/" class="btn btn-danger" >Login Again</Link>
              </div>
          
                {/* <h1 className="child">you logged out</h1> */}
                <div  className="child1" >
               
                
            </div>
            </div>
            
        )
    }
}
