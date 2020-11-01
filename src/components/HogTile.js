import React, { Component } from "react";

function HogTile({hog, selectHog}){

  const {name} = hog
  const fileName = name.toLowerCase().split(' ').join('_')
  const pigImage = require(`../hog-imgs/${fileName}.jpg`)

  //when we click on div element, we will see that hog's info
  const handleClick =() => {
    selectHog(name)
  }

    return(
      <div className="ui eight wide column pigTile" onClick={handleClick}>
        <img src={pigImage} alt="pig" />
        <h3>{name}</h3>
      </div>
    )
}

export default HogTile;