import React, { Component } from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

function HogsMenu({hogs, selectHog, greaseFilter, sortType}){


  const greaseState = greaseFilter === 'greased'
  const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter((hog) => hog.greased === greaseState)

  const sortHogs = () => {
    if(sortType === 'none'){
      return filteredHogs
    }

    if(sortType === 'weight'){
      return [...filteredHogs].sort((a, b) => a.weight - b.weight)
    }

    return [...filteredHogs].sort((a, b) => {
      if (a.name < b.name){
        return -1
      }
    })
  }

  return(
    <div className="ui grid container">
      {sortHogs().map (hog => <HogTile hog={hog} key={hog.name} selectHog={selectHog} />)}
    </div>
  )

  }

export default HogsMenu;