import React, { Component } from "react";
import hogs from "../porkers_data";
import HogDetail from "./hogDetail";
import HogMenu from "./hogMenu"

class HogTile extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedHog : null
        }
        this.selectedHog =  this.selectedHog.bind(this)
        this.closedHog =  this.closedHog.bind(this)
    }

    selectedHog = (e) =>{
        this.setState({selectedHog : e})
    }

    closedHog = () =>{
        this.setState({selectedHog : null})
    }

    generateHog = () => {
        return hogs.map(hog => {
          return <HogMenu selectedHog={this.selectedHog} hoga={hog}/>  
        })
      }


    render(){
        const showDetail = this.state.selectedHog;
        return (
            showDetail ?
            <div><HogDetail hoga={this.state.selectedHog}  closedHog={this.closedHog}/></div>
            :
            <div className="ui grid container"> 
                {this.generateHog()}
            </div>
        )
    }
}

export default HogTile