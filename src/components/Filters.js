import React, { Component } from "react";

class Filters extends Component {

    handleChange= (e) => {
        // console.log(e.target.value)
        this.props.onChangeType(e.target.value)
      }


      handleClick = () => {
        this.props.onFindPigsClick()
      }





    render() {
      return (
          <div>
        <div className="field">
        <select 
          onChange={this.handleChange}
        name="type" id="type">
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
              <div className="field">
              <button onClick={this.handleClick} className="ui secondary button">Sort Pigs</button>
            </div>
            </div>

      );
    }
  }
  
  export default Filters;