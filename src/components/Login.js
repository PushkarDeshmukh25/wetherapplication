import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import LOGIN from '../images/login.svg'
//import IMG from '../images/wether.png'
 
export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = false
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn
        }

        this.onchangehandler = this.onchangehandler.bind(this)
        this.submitform = this.submitform.bind(this)
    }
    onchangehandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitform(e) {
        e.preventDefault()
        const { username, password } = this.state
        if (username === "pushkar" && password === "2504") {
            localStorage.setItem("token", `username:-${this.state.username} password:-${this.state.password}`)
            this.setState({
                loggedIn: true
            })

        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/mainpage" />
        }
        return (
           

             
            <div  className="container bg-image">
            <div className="card card-login mx-auto text-center bg-dark">
                <div className="card-header mx-auto bg-dark">
                    <span>  </span><br/>
                                <span className="logo_title mt-5"> Login Dashboard </span>
      
        
                </div>
                <div className="card-body">
                    <form  onSubmit={this.submitform}  >
                        <div className="input-group form-group">

                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="username" className="form-control"   value={this.state.username} placeholder="username"  onChange={this.onchangehandler}/>
                        </div>
        
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" name="password" className="form-control"  value={this.state.password} placeholder="password"  onChange={this.onchangehandler}/>
                        </div>
                         
        
                        <div className="form-group">
                            <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn"/>
                        </div>
        
                    </form>
                </div>
            </div>
        </div>

        
        

        
        )
    }
}
 























































            
                 
                 

            