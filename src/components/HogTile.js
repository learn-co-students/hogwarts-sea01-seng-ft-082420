import React, {Component} from 'react'

class HogTile extends Component {

    constructor(props){
        super(props);
        this.state = {
            showDetails: false
        }
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    
    detailDisplay = () => {
        const {specialty, greased, weight } = this.props.hog
        if(this.state.showDetails){
            return(
            <div className="hogDetails">
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? 'Yes, highly...' : 'No, has dry skin.'}</p>
                <p>Weight: {weight}</p>
                <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
            </div>
            )
        } else {
            return null;
        }
    }
    
    render(){
        let pigImage = require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)        
        return(
            <div onClick={this.handleClick}className="pigTile ui eight wide column">
                <h3>{this.props.hog.name}</h3>
                <img src={pigImage}/>
                {this.detailDisplay()}
            </div>
        )
    }

}

export default HogTile