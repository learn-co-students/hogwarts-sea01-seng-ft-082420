import React, { Component } from "react";



class HogDetail extends Component{


    handleClick = () =>{
        this.props.closedHog()
    }

    render(){

        // const{name, weight, specialty, greased,['highest medal achieved']:medal} = this.props.selectedHog

        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <li>{this.props.hoga.name}</li>
                <li>{this.props.hoga.weight}</li>
                <li>{this.props.hoga.specialty}</li>
                <li>{this.props.hoga.greased ? "true" : "false"}</li>
                <li>{this.props.hoga['highest medal achieved']}</li>
            </div>
        )
    }
}

export default HogDetail