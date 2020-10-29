import React, { Component } from 'react';


export default class PigCard extends Component {

    constructor() {
        super()
        this.state = {
            isClick: false,
            isHide: false
        }
    }

    handleClick = () => {
        let clickState = !this.state.isClick
        this.setState({
            isClick: clickState
        })
    } 




    getImgName = () => {
        let img = this.props.pig.name.split(' ').join('_').toLowerCase() + '.jpg'
        return img
    } 

    handleHide= () => {
        let hideState = !this.state.isHide
        this.setState({
            isHide: hideState
        })
    }


    render() {
        let pigImage = require(`../hog-imgs/${this.getImgName()}`)
        let {name, specialty, greased, weight} = this.props.pig
        return(
            <div onClick={this.handleClick} className= 'pigTile'>
                {this.state.isHide ? <div><p>hidden</p><button onClick={this.handleHide}>hide?</button>
                </div>: <div>
                {this.state.isClick ? 
                <div>
                <h2>{name}</h2>
                <p>{specialty}</p>
                <p>{greased ? "Is greased" : "Not greased"}</p>
                <p>Weight: {weight}</p>
                <p>highest medal: {this.props.pig['highest medal achieved']}</p>
                <img className='minPigTile' src={pigImage}/>
                </div> : <img className='minPigTile' src={pigImage}/>}
                <button onClick={this.handleHide}>hide?</button> </div>}
            </div>
        )

    }
}


{/* <div className='pigTile'>
<div>{name}</div>
<div>{specialty}</div>
<div>{greased ? "is greased" : "not greased"}</div>
<div>weight: {weight}</div>
<div>highest medal: {this.props.pig['highest medal achieved']}</div>
<img className='minPigTile' src={pigImage}/>
</div>, */}
// name: 'Babe',
// specialty: 'Being incredibly cute',
// greased: false,
// weight: 2.0,
// 'highest medal achieved': 'bronze'