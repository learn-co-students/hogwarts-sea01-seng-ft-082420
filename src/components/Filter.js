import React, { Component } from "react";

function Filter({selectFilter}){

  const handleChange = (e) => {
    selectFilter(e.target.value)
  }

  return (
    <div>
      <input type='radio' name='grease' value='greased' id='greased' onChange={handleChange}/>
      <label htmlFor='greased'>Greased</label>

      <input type='radio' name='grease' value='nongreased' id='nongreased' onChange={handleChange}/>
      <label htmlFor='nongreased'>Nongreased</label>

      <input type='radio' name='grease' value='all' id='all' onChange={handleChange} />
      <label htmlFor='all'>All</label>

    </div>
  )
}

export default Filter;