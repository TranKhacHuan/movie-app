import React, { useState, useEffect } from "react";
import styled from "./MoviesDetail.module.css";

const API_KEY = "ab4ec50031b603de35479ee93ede7859";
// https://api.themoviedb.org/3//movie/{movie_id}/videos?api_key=<api_key>

function MoviesDetail(props) {
  const [movieYoutube, setMovieYoutube] = useState();
  console.log(props);
  const { id } = props.data;
  let filterMovie = [];

  async function getMoviesDetailAPI(id) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      } else {
        const resJSON = await res.json();
        const data = resJSON.results;
        {
          data.map((item) => {
            if (
              item.site === "YouTube" &&
              (item.type === "Teaser" || item.type === "Trailer")
            ) {
              filterMovie.push(item);
            }
          });
        }
        console.log("This is filteredMovie: ", filterMovie);
        filterMovie && setMovieYoutube(filterMovie[0].key);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getMoviesDetailAPI(id);

  filterMovie && console.log(filterMovie);

  movieYoutube && console.log(movieYoutube);

  return (
    <React.Fragment>
      <div className={styled["detailMovie-Container"]}>
        <div className={styled["detailMovie-Infor"]}>
          <h1 className={styled["detailMovie-Title"]}>
            {props.data.original_title}
          </h1>

          <h3>Release Date : {props.data.release_date}</h3>
          <h3>Vote: {props.data.vote_average}/10</h3>
          <p className={styled["detailMovie-Overview"]}>
            {props.data.overview}
          </p>
        </div>
        {movieYoutube && (
          <iframe
            className={styled["detailMovie-Videos"]}
            width="50%"
            height="400"
            src={`https://www.youtube.com/embed/${movieYoutube}`}
          ></iframe>
        )}
        {!movieYoutube && (
          <img
            src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`}
          ></img>
        )}
      </div>
    </React.Fragment>
  );
}

export default MoviesDetail;
