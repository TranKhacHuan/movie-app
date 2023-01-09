import React, { useState, useEffect } from "react";
import styled from "./SearchList.module.css";
function SearchList(props) {
  console.log(props.data);
  return (
    <React.Fragment>
      <div className={styled["searchList-Container"]}>
        {props.data &&
          props.data.map((item, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            ></img>
          ))}
      </div>
    </React.Fragment>
  );
}
export default SearchList;
