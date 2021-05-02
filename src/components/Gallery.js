import React from "react";
import FadeInSection from "./FadeInSection";
import GalleryPic from "./GalleryPic";

const Gallery = (props) => (
  <div id="gallery-pic" className="container-fluid">
    <div className="title-box">
      <h1 className="vertical-line">|</h1>
      <h1 className="title">Gallery</h1>
      <p className="subtitle">...parts of my life journey through the lens</p>
    </div>
    {/* <FadeInSection> */}
    <div className="row">
      <div className="col-7 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1-_QbO-OPAKYA2KdCFCmL53FAGQJArhtb"
          picDesc="Ninh Binh, Hanoi"
          picStyle={{ borderRadius: "3rem 0 0 0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1z-1sdBUjLvgzWYE2ua9AOWY6mTss0hEm"
          picDesc="Tacos"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
      <div className="col-5 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1YigaiIc9tJij6KrpUm9BFHptqarUD09T"
          picDesc="Monstera"
          picStyle={{ borderRadius: "0 3rem 0 0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1iqyBz9IWVt7-Cl3v3goeya5Xn-IZHHQF"
          picDesc="Lake Michigan"
          picStyle={{ borderRadius: "0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1xMB5C_L4UTiL75AkqGtu3U9kRaayaERT"
          picDesc="Autumn in CC Aboretum"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
    </div>
    {/* </FadeInSection>

    <FadeInSection> */}
    <div className="row">
      <div className="col-12 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1sGwdS0_S8Wi8bcDzX2gPMD8KXhf1lj2d"
          picDesc="Alba Valley Hue"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
    </div>
    {/* </FadeInSection>

    <FadeInSection> */}
    <div className="row">
      <div className="col-4 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1fiUmJoH3w3bGVCmH5ZPQUvGdaNDx3hxR"
          picDesc="HCMC"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
      <div className="col-4 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1wHsZhtbEgL2cKmVjDSoJu0gpqOhQIJy_"
          picDesc="Sunset"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
      <div className="col-4 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1x59UGOFN8hPIefI_XY4SzpQ_XiXkWuci"
          picDesc="Snow"
          picStyle={{ borderRadius: "0" }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-5 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=169SUrIOr4DJNZ7xdgoDuldrm6TdfXfyn"
          picDesc="Smile"
          picStyle={{ borderRadius: "0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1jly1E6olTwNMfs-qfnOCz2h-fmev1luh"
          picDesc="Cave"
          picStyle={{ borderRadius: "0 0 0 6rem" }}
          leftCornerPic
        />
      </div>
      <div className="col-7 custom-col">
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1YjI1s_PZjTwK5PUdvtJFMgU0g0mOUmkI"
          picDesc="PUurple"
          picStyle={{ borderRadius: "0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1_z2Z81fTZOyAPNFP9ZUtZufyKWZV9FnM"
          picDesc="violin"
          picStyle={{ borderRadius: "0" }}
        />
        <GalleryPic
          picSrc="https://drive.google.com/uc?export=view&id=1t9UhDf02ZTvFt9cnmeP6ek4OiMZ7R2kU"
          picDesc="sea"
          picStyle={{ borderRadius: "0 0 6rem 0" }}
        />
      </div>
    </div>
    <div className="title-box">
      <p className="subtitle-2">thank you for visiting my site :)</p>
    </div>
    {/* </FadeInSection> */}
  </div>
);

export default Gallery;
