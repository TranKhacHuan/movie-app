import React, { useState, useEffect } from "react";
import styled from "./TopRateList.module.css";
import API_Request from "../API/API_Resquest";
import ListStyle from "../UI/ListStyle";
import MovieItemBackDrop from "./MovieItemBackDrop";

const API_link = API_Request;
const API_TopRateList = API_link.fetchTopRated;

function TopRateList() {
  const [topRate, setTopRate] = useState();

  async function getTopRateAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_TopRateList}`);
    const resJSON = await res.json();
    const data = resJSON.results;
    console.log(data);
    setTopRate(data);
  }
  useEffect(() => {
    getTopRateAPI();
  }, []);

  return (
    <React.Fragment>
      <h3 className={styled["TopRateList-title"]}>TopRate</h3>
      <div className={styled["topRate-container"]}>
        <ListStyle>
          {topRate &&
            topRate.map((item, index) => (
              <MovieItemBackDrop key={index} movie={item}></MovieItemBackDrop>
            ))}
        </ListStyle>
      </div>
    </React.Fragment>
  );
}

export default TopRateList;
