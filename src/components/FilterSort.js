import React, { Component } from "react";
import Filter from './Filter'
import Sort from './Sort'


function FilterSort({selectFilter, selectSort}){
  //takes props from HogsBrowser and passes them here

  return(
    <div>  
      <Filter selectFilter={selectFilter} />
      <Sort selectSort={selectSort} />
    </div>

  )
}

export default FilterSort;