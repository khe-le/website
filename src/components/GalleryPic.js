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
      {isHovered && (
        <div className={props.leftCornerPic ? "desc-box right" : "desc-box"}>
          {props.picDesc}
        </div>
      )}
    </div>
  );
};

export default GalleryPic;
