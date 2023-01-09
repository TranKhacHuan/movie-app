import React, { useState, useEffect } from "react";
import styled from "./ComedyMovies.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_ComedyList = API_link.fetchComedyMovies;

function ComedyMovies() {
  const [movieComedy, setMovieComedy] = useState();
  async function getComedyListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_ComedyList}`);
    const resJSON = await res.json();
    const data = resJSON.results;

    setMovieComedy(data);
  }
  useEffect(() => {
    getComedyListAPI();
  }, []);

  return (
    <React.Fragment>
      <div className={styled["comedyList-container"]}>
        <h3 className={styled["comedyList-title"]}>Comedy</h3>
        <ListStyle>
          {movieComedy &&
            movieComedy.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}
export default ComedyMovies;
