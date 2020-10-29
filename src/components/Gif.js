import React, { Component } from "react";

class Gif extends Component {

    getGif = () => {
        fetch('')
        .then(res => res.json())
        .then(gif => {
            return gif
        })
    }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Gif;
