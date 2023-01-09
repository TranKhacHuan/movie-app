import React, { useState, useEffect } from "react";
import styled from "./RomanceMovies.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_RomanceList = API_link.fetchRomanceMovies;
function RomanceMovies() {
  const [movieRomance, setMovieRomance] = useState();
  async function getRomanceListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_RomanceList}`);
    const resJSON = await res.json();
    const data = resJSON.results;

    setMovieRomance(data);
  }
  useEffect(() => {
    getRomanceListAPI();
  }, []);
  return (
    <React.Fragment>
      <div className={styled["romanceList-container"]}>
        <h3 className={styled["romanceList-title"]}>Romance</h3>
        <ListStyle>
          {movieRomance &&
            movieRomance.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}
export default RomanceMovies;
