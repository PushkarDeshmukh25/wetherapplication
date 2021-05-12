import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
      
    togglediv=()=>{
     const{show}=this.state
     this.setState({
         show:!show 
     })
    }
    render() {
        return (
            <div>
                <button className="buttomm btn btn-primary mt-5" onClick={this.togglediv}>AboutUs</button>
                {this.state.show && <Box/>}
            </div>
        )
    }
}

 class Box extends Component {
    render() {
        return (
            <div>
            <div className="TggleContent ">
                <h2> About Us Page</h2>
                In publishing and graphic design, Lorem ipsum is a placeholder text 
                 used to demonstrate the visual form of a document or a typeface withou
                 t relying on meaningful content.
                 Lorem ipsum may be used as a placeholder before final copy is available</div>    
            </div>
        )
    }
}



export default About
