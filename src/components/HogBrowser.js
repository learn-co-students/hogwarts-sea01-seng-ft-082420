import React, { Component } from "react";
import HogsMenu from './HogsMenu'
import HogDetails from './HogDetails'
import FilterSort from './FilterSort'
import hogs from "../porkers_data";

class HogBrowser extends Component {

  state = {
    greaseFilter: 'all',
    sortType: 'none',
    chosenHog: null
  }

  //click on HogTile to show all info about that hog
  selectHog = (name) => {
    this.setState({chosenHog: hogs.find(hog => hog.name === name)})
  }

  //when we click on 'close' button, chosenHog sets back to null and all hogs appear on the screen
  closeHog = () => {
    this.setState ({chosenHog: null})
  }

  selectFilter = (greaseFilter) => {
    this.setState({greaseFilter})
  }

  selectSort = (sortType) => {
    this.setState({sortType})
  }
 

  render() {
    return (
      <div>
        <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort} />
        {this.state.chosenHog ?
        <HogDetails chosenHog={this.state.chosenHog} closeHog={this.closeHog}/> : 
        <HogsMenu 
          hogs={hogs}
          sortType={this.state.sortType}
          greaseFilter={this.state.greaseFilter}
          selectHog={this.selectHog} />
        }
      </div>
    );
  }
}

export default HogBrowser;
