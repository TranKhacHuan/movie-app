import React, { useState, useEffect } from "react";
import styled from "./ActionMovie.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_ActionList = API_link.fetchActionMovies;

function ActionMovie() {
  const [movieAction, setMovieAction] = useState();
  async function getActionListAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_ActionList}`);
    const resJSON = await res.json();
    const data = resJSON.results;
    console.log(data);
    setMovieAction(data);
  }
  useEffect(() => {
    getActionListAPI();
  }, []);

  return <React.Fragment>
     <div className={styled["actionList-container"]}>
      <h3 className={styled["actionList-title"]}>Action</h3>
        <ListStyle>
          {movieAction &&
            movieAction.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>

  </React.Fragment>;
}

export default ActionMovie;
