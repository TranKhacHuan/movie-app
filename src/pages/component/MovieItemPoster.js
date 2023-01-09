import React,{useState} from "react";

import styled from "./MovieItemPoster.module.css";
import MoviesDetail from "./MoviesDetail";
import { createPortal } from "react-dom";

function MovieItemPoster(props) {
  const [isClicked, setIsClicked] = useState(false);
  const MoviePosterData = props.movie;

  const moviesClickHandler = (e) => {
    
    setIsClicked(!isClicked);
    let rect = e.target.getBoundingClientRect();
    console.log(window.pageYOffset);
    window.scrollTo(0, window.pageYOffset + rect.y - 20);
  };
  return (
    <React.Fragment>
      <div className={styled["originalItem"]}>
        <img
          onClick={(e) => {
            moviesClickHandler(e);
          }}
          src={`https://image.tmdb.org/t/p/original${
            MoviePosterData && MoviePosterData.poster_path
          }`}
        ></img>
      </div>
      {isClicked &&
        createPortal(
          <MoviesDetail data={MoviePosterData}></MoviesDetail>,
          document.body
        )}
    </React.Fragment>
  );
}

export default MovieItemPoster;
