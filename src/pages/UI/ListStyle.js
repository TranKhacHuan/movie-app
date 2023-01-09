import React from "react";
import styled from "./ListStyle.module.css";
import HorizontalScroll from "react-scroll-horizontal";

function ListStyle(props) {
  return (
    <React.Fragment>
      <div className={styled["listStyle-container"]}>
      <HorizontalScroll>
        <div className={styled["listStyle-content"]}>{props.children}</div>
      </HorizontalScroll>
      </div>
    </React.Fragment>
  );
}

export default ListStyle;
