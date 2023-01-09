import React, { useEffect, useState } from "react";
import styled from "./TrendingMovies.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_TrendingList = API_link.fetchTrending;

function TrendingMovies() {
  const [movieTrending, setMovieTrending] = useState();
  async function getTrendingListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_TrendingList}`);
    const resJSON = await res.json();
    const data = resJSON.results;

    setMovieTrending(data);
  }
  useEffect(() => {
    getTrendingListAPI();
  }, []);

  return (
    <React.Fragment>
      <div className={styled["TrendList-container"]}>
      <h3 className={styled["TrendList-title"]}>Trending</h3>
        <ListStyle>
          {movieTrending &&
            movieTrending.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}

export default TrendingMovies;
