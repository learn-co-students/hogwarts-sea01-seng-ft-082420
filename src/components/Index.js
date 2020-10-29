import React, { Component } from 'react';
import PigCard from "./PigCard.js";


export default class Index extends Component {



    render() {

        return(
            <ul>
            {this.props.hogs.map(pig => <PigCard pig={pig}/>)}
            </ul>
        )

    }
}

// {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)}