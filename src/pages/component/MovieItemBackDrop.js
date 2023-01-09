import React, { useState, useEffect } from "react";
import styled from "./MovieItemBackDrop.module.css";
import MoviesDetail from "./MoviesDetail";
import { createPortal } from "react-dom";

function MovieItemBackDrop(props) {
  const [isClicked, setIsClicked] = useState(false);
  const MovieBackDropData = props.movie;

  const moviesClickHandler = (id, e) => {
    if (id != MovieBackDropData) {
      setIsClicked(false);
    }
    setIsClicked(!isClicked);
    console.log(e.target);
    let rect = e.target.getBoundingClientRect();
    console.log(window.pageYOffset);
    window.scrollTo(0, window.pageYOffset + rect.y - 105);
  };

  return (
    <React.Fragment>
      <div className={styled["movieBackDrop-container"]}>
        <img
          onClick={(e) => {
            moviesClickHandler(MovieBackDropData.id, e);
          }}
          src={`https://image.tmdb.org/t/p/original${
            MovieBackDropData && MovieBackDropData.backdrop_path
          }`}
        ></img>
      </div>
      {isClicked &&
        createPortal(
          <MoviesDetail data={MovieBackDropData}></MoviesDetail>,
          document.body
        )}
    </React.Fragment>
  );
}
export default MovieItemBackDrop;
