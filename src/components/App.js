import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Index from "./Index.js";
import Filters from "./Filters.js";

class App extends Component {

  constructor() {
    super()

    this.state = {
      pigs: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    this.setState({
      ...this.state, filters: {type: value}
    })
  }

  onFindPigsClick= () => {
    if(this.state.filters.type === 'all') {

        this.setState({
          ...this.state, pigs: hogs
        })
    } else if (this.state.filters.type === 'greased') {
        let pigs = hogs.filter(pig => pig.greased=== true)
        this.setState({
          ...this.state, pigs
        })
    } else if (this.state.filters.type === 'name') {
      let pigs = hogs.sort(function(a,b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      })
      this.setState({
        ...this.state, pigs
      })
    } else if (this.state.filters.type === 'weight') {
      let pigs = hogs.sort(function(a,b){
        return a.weight - b.weight 
     })
      this.setState({
        ...this.state, pigs
      })
    }

  }



  render() {
    return (
      <div className="App">
        <Nav />
        <Filters onChangeType={this.onChangeType} onFindPigsClick={this.onFindPigsClick}/>
        <Index hogs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;
