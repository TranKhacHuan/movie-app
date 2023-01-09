import styled from "./Banner.module.css";
import React, { useState, useEffect } from "react";

import API_Request from "../API/API_Resquest";

const API_link = API_Request;
const API_Banner = API_link.fetchNetflixOriginals;
console.log(API_link.fetchNetflixOriginals);

function Banner() {
  const [bannerData, setBannerData] = useState([]);

  async function getBannerAPI() {
    const res = await fetch(`https://api.themoviedb.org/3${API_Banner}`);
    const resJSON = await res.json();
    const data = resJSON.results;
    const ranDomMovie =data[Math.floor(Math.random() * data.length - 1)]
    setBannerData(ranDomMovie); 
  }
  useEffect(() => {
    getBannerAPI();
  },[]);
  
  return (
    <React.Fragment>
      <section>
        <div className={styled["banner-content"]}>
          <h1 className={styled["banner-name"]}>{bannerData&&bannerData.name}</h1>
          <div className={styled["banner-button"]}>
            <button>Play</button>
            <button>My List</button>
          </div>
          <p className={styled["banner-overview"]}>{bannerData&&bannerData.overview}</p>

        </div>
        <img className={styled['banner-img']} src={`https://image.tmdb.org/t/p/original${bannerData&&bannerData.backdrop_path}`}></img>
      </section>
    </React.Fragment>
  );
}

export default Banner;
