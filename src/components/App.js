import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogTile from "./HogTile";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filtered: false,
      hogs: hogs
    }
  }

  handleHog = () => {
    if (!this.state.filtered){
      return this.state.hogs.map(hog => <HogTile hog={hog}/>)
    } else {
      const filteredHogs = this.state.hogs.filter(hog => hog.greased);
      return filteredHogs.map(hog => <HogTile hog={hog}/>)
    }
  }



  handleFilter = () => {
    this.setState({
      ...this.state,
      filtered: !this.state.filtered
  })
  }
  
  handleChange = (event) => {
    let sortedHogs;
    if (event.target.value === 'name'){
      sortedHogs = this.state.hogs.sort((hog1,hog2) => {return hog1.name.localeCompare(hog2.name)})
    } else {
      sortedHogs = this.state.hogs.sort((hog1,hog2) => {return hog1.weight - hog2.weight})
    }
    this.setState({
      ...this.state,
      hogs: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <button onClick={this.handleFilter} className="button">{this.state.filtered ? 'Show All Dem Pigs' : 'Show Dem Greased Hogs'}</button>
        <label for="hogs">Sort Hogs By:</label>
            <select onChange={this.handleChange} name="hogs" id="hogSort">
            <option value="name">Name</option>
            <option value="weight">Weight</option>
</select>
        <div className="ui grid container">
          {this.handleHog()}
        </div>
      </div>
    );
  }
}

export default App;
