import React from "react";
import { useState } from "react";

const GalleryPic = (props) => {
  const [isHovered, toggleHover] = useState(false);
  function handleHover() {
    toggleHover(!isHovered);
  }
  return (
    <div className="box">
      <img
        src={props.picSrc}
        alt={props.picDesc}
        style={props.picStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      <div
        className={
          props.leftCornerPic
            ? "desc-box left-box"
            : props.rightCornerPic
            ? "desc-box right-box"
            : "desc-box"
        }
        style={isHovered ? { display: "block" } : { display: "none" }}
      >
        {props.picDesc}
      </div>
    </div>
  );
};

export default GalleryPic;
