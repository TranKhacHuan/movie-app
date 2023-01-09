import React, { useState, useEffect } from "react";
import styled from "./HorrorMovies.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_HorrorList = API_link.fetchHorrorMovies;
function HorrorMovies() {
  const [movieHorror, setMovieHorror] = useState();
  async function getHorrorListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_HorrorList}`);
    const resJSON = await res.json();
    const data = resJSON.results;

    setMovieHorror(data);
  }
  useEffect(() => {
    getHorrorListAPI();
  }, []);
  return (
    <React.Fragment>
      <div className={styled["horrorList-container"]}>
        <h3 className={styled["horrorList-title"]}>Horror</h3>
        <ListStyle>
          {movieHorror &&
            movieHorror.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}
export default HorrorMovies;
