import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import styled from "./SearchForm.module.css";
import requests from "./../API/API_Resquest";
import SearchList from "./SearchList";


const API_SearchList = requests.fetchSearch;
function SearchForm() {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [movieSearch, setMovieSearch] = useState("");
  async function getSearchMovie() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${API_SearchList}&query=${enteredSearch}`
      );
      if (!res.ok) {
        setMovieSearch("")
        throw new Error(res.statusText);
      } else {
        const resJSON = await res.json();
        const data = resJSON.results;
        setMovieSearch(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const searchInputChangeHandler = (e) => {
    setEnteredSearch(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    getSearchMovie();
    movieSearch && console.log(movieSearch);
  };
  const formResetHandler = () => {
    enteredSearch && setEnteredSearch("");
    setMovieSearch("")
  };

  return (
    <React.Fragment>
      <form
        onSubmit={formSubmitHandler}
        className={styled["searchForm-container"]}
      >
        <div className={styled["searchForm-search"]}>
          <input
            onChange={searchInputChangeHandler}
            type="text"
            id="searchInput"
            placeholder="Search your movie"
            value={enteredSearch}
          ></input>
          <i className="fa-solid fa-magnifying-glass"> </i>
        </div>
        <div className={styled["searchButton-Container"]}>
          <button className={styled["searchForm-Button"]} type="submit">
            Search
          </button>
          <button
            className={styled["searchForm-Button"]}
            onClick={formResetHandler}
          >
            Reset
          </button>
        </div>
      </form>
      <SearchList data={movieSearch}></SearchList>
    </React.Fragment>
  );
}
export default SearchForm;
