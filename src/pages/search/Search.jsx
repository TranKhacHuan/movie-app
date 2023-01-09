import React from "react";
import Navbar from "../component/Navbar";
import styled from "./Search.module.css";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <SearchForm ></SearchForm>
    </div>
  );
};

export default Search;
