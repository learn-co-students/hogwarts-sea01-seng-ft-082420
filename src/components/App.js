import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import HogBrowser from "./HogBrowser";

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <Header />
        <HogBrowser />
      </div>
    );
  }
}

export default App;
