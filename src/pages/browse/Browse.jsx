import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import OriginalList from "../component/OriginalList";
import TrendingMovies from "../component/TrendingMovies";
import TopRateList from "../component/TopRateList";
import ActionMovie from "../component/ActionMovies";
import ComedyMovies from "../component/ComedyMovies";
import HorrorMovies from "../component/HorrorMovies";
import RomanceMovies from "../component/RomanceMovies";
import DocumentariesMovies from "../component/DocumentariesMovies";

function Browse() {
  return (
    <React.Fragment>
      <div className="app">
        <Navbar></Navbar>
        <Banner></Banner>
        <OriginalList></OriginalList>
        <TrendingMovies></TrendingMovies>
        <TopRateList></TopRateList>
        <ActionMovie></ActionMovie>
        <ComedyMovies></ComedyMovies>
        <HorrorMovies></HorrorMovies>
        <RomanceMovies></RomanceMovies>
        <DocumentariesMovies></DocumentariesMovies>
      </div>
    </React.Fragment>
  );
}

export default Browse;
