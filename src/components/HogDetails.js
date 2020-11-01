import React, { Component } from "react";

function HogDetails({chosenHog, closeHog}){

  const {name, specialty, weight, greased, ['highest medal achieved']: medal} = chosenHog

  return(
    <div>
      <h3>Name: {name}</h3>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased ? "Greased" : "Nongreased"}</p>
      <p>Highest Medal Achieved: {medal}</p>
      <button onClick={closeHog}>Close Hog</button>
    </div>
  )
}

export default HogDetails;