import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogTile from "./hogtile";


class App extends Component {



  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogTile />
      </div>
    );
  }
}

export default App;
