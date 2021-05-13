import React, { Component } from 'react'


import {Link, Redirect} from "react-router-dom"
// import BootstrapModal from './Aboutus'
 

 
import About from './About'
import CurApiDataC from './CurApiDataC'
 

export default class Mainpage extends Component {
    constructor(props) {
        super(props)
    
        //const token=localStorage.getItem("token")
        let loggedIn=true
        // if(token==null){
        //     loggedIn=false
        // }
        this.state={
            loggedIn
        }
    }
    
    render() {
        // if(this.state.loggedIn===false){
        //     return <Redirect to='/'/>
        // }
        return (
            <div className="homeimg">
                
                 <Link to="/logout"  className="logoutbtn btn btn-danger mt-3" >  Logout</Link> 
                 


    {/* <Container>
        <Row>
        <Col sm={6} className="col66"> */}
                 {/* <CurApiDatacContainer5/>  */}
                 <CurApiDataC/> 
                 {/* </Col> 
                 <Col sm={6} className="col66">
                      
                 </Col>
                
         </Row>
     </Container> */}  
                {/* <BootstrapModal/> */}
 
                  {/* <About/>   */}
                 {/* <BootstrapModal/>    */}
            </div>
        )
    }
}
