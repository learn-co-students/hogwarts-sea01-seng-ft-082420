import React, { Component } from "react";


class HogMenu extends Component{


    handleClick = () =>{
        this.props.selectedHog(this.props.hoga)
    }

    render(){
        let imageName = this.props.hoga.name;
        imageName = imageName.toLowerCase().split(" ").join("_");
        const pigImage = require(`../hog-imgs/${imageName}.jpg`);
        return (
            <div onClick={this.handleClick} className="ui eight wide column pigTile">
                <img src={pigImage} alt="pig" />
                {this.props.hoga.name}
            </div> 
        )
    }
}

export default HogMenu