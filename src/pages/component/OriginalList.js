import React, { useState, useEffect } from "react";
import styled from "./OriginalList.module.css";
import MovieItemPoster from "./MovieItemPoster";
import API_Request from "../API/API_Resquest";

import ListStyle from "./../UI/ListStyle";

const API_link = API_Request;
const API_OriginalList = API_link.fetchNetflixOriginals;

function OriginalList() {
  const [movieOriginal, setOriginal] = useState();
  async function getOriginalListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_OriginalList}`);
    const resJSON = await res.json();
    const data = resJSON.results;
    
    setOriginal(data);
  }
  useEffect(() => {
    getOriginalListAPI();
  }, []);
  return (
    <React.Fragment>
      <div className={styled["OriginalList-container"]}>
        <ListStyle>
          {movieOriginal &&
            movieOriginal.map((item, index) => (
              <MovieItemPoster key={index} movie={item}></MovieItemPoster>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}

export default OriginalList;
