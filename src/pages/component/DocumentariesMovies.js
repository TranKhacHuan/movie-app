import React, { useState, useEffect } from "react";
import styled from "./DocumentariesMovies.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_DocumentariesList = API_link.fetchDocumentaries;

function DocumentariesMovies() {
  const [movieDocumentaries, setMovieDocumentaries] = useState();
  async function getDocumentariesListAPI() {
    const res = await fetch(
      `https://api.themoviedb.org/3${API_DocumentariesList}`
    );
    const resJSON = await res.json();
    const data = resJSON.results;

    setMovieDocumentaries(data);
  }
  useEffect(() => {
    getDocumentariesListAPI();
  }, []);
  return (
    <React.Fragment>
      <div className={styled["documentariesList-container"]}>
        <h3 className={styled["documentariesList-title"]}>Documentaries</h3>
        <ListStyle>
          {movieDocumentaries &&
            movieDocumentaries.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}
export default DocumentariesMovies;
