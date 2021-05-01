import React from "react";
import FadeInSection from "./FadeInSection";

const Gallery = (props) => (
  <div className="container-fluid">
    <div className="title-box">
      <h1 className="vertical-line">|</h1>
      <h1 className="title">Gallery</h1>
      <p className="subtitle">...parts of my life journey through the lens</p>
    </div>
    <FadeInSection>
      <div className="row">
        <div className="col-7 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1-_QbO-OPAKYA2KdCFCmL53FAGQJArhtb"
            alt="Gallery Photo"
            style={{ borderRadius: "3rem 0 0 0" }}
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1z-1sdBUjLvgzWYE2ua9AOWY6mTss0hEm"
            alt="Gallery Photo"
          />
        </div>
        <div className="col-5 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1YigaiIc9tJij6KrpUm9BFHptqarUD09T"
            alt="Gallery Photo"
            style={{ borderRadius: "0 3rem 0 0" }}
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1iqyBz9IWVt7-Cl3v3goeya5Xn-IZHHQF"
            alt="Gallery Photo"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1xMB5C_L4UTiL75AkqGtu3U9kRaayaERT"
            alt="Gallery Photo"
          />
        </div>
      </div>
    </FadeInSection>

    <FadeInSection>
      <div className="row">
        <div className="col-12 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1sGwdS0_S8Wi8bcDzX2gPMD8KXhf1lj2d"
            alt="Gallery Photo"
          />
        </div>
      </div>
    </FadeInSection>

    <FadeInSection>
      <div className="row">
        <div className="col-4 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1fiUmJoH3w3bGVCmH5ZPQUvGdaNDx3hxR"
            alt="Gallery Photo"
          />
        </div>
        <div className="col-4 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1wHsZhtbEgL2cKmVjDSoJu0gpqOhQIJy_"
            alt="Gallery Photo"
          />
        </div>
        <div className="col-4 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1x59UGOFN8hPIefI_XY4SzpQ_XiXkWuci"
            alt="Gallery Photo"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1jly1E6olTwNMfs-qfnOCz2h-fmev1luh"
            alt="Gallery Photo"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=169SUrIOr4DJNZ7xdgoDuldrm6TdfXfyn"
            alt="Gallery Photo"
            style={{ borderRadius: "0 0 0 6rem" }}
          />
        </div>
        <div className="col-7 custom-col">
          <img
            src="https://drive.google.com/uc?export=view&id=1YjI1s_PZjTwK5PUdvtJFMgU0g0mOUmkI"
            alt="Gallery Photo"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1_z2Z81fTZOyAPNFP9ZUtZufyKWZV9FnM"
            alt="Gallery Photo"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1t9UhDf02ZTvFt9cnmeP6ek4OiMZ7R2kU"
            alt="Gallery Photo"
            style={{ borderRadius: "0 0 6rem 0" }}
          />
        </div>
      </div>
      <div className="title-box">
        <p className="subtitle-2">thank you for visiting my site :)!</p>
      </div>
    </FadeInSection>
  </div>
);

export default Gallery;
