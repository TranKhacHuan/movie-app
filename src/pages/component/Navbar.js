import React, { useState, useEffect } from "react";
import styled from "./Navbar.module.css";

function Navbar() {
  const [isNav, setisNav] = useState(false);
  const homePageClickHandler = () => {
    window.location.replace("/");
  };
  const searchPageClickHandler = () => {
    window.location.replace("/search");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setisNav(true);
        
      } else {
        setisNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const hidden = isNav
    ? `${styled.scrolling} ${styled.fadein}`
    : `${styled.scrolling} ${styled.fadeOut}`;
  return (
    <React.Fragment>
      <div className={hidden}>
        <section className={styled.navBar}>
          <div className={styled["navBar-container"]}>
            <h2
              className={styled["navBar-Logo"]}
              onClick={homePageClickHandler}
            >
              Movie App
            </h2>
            <div className={styled["navBar-Search"]}>
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={searchPageClickHandler}
              >
                {" "}
              </i>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
