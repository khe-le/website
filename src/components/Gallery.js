import React from "react";
import FadeInSection from "./FadeInSection";
import GalleryPic from "./GalleryPic";

const Gallery = (props) => (
  <div id="gallery-pic" className="container-fluid">
    <div className="title-box">
      <h1 className="vertical-line">|</h1>
      <h1 className="title">Gallery</h1>
      <p className="subtitle">...my life journey through the lens</p>
    </div>
    <FadeInSection>
      <div className="row">
        <div className="col-7 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/muacave.webp")}
            picDesc="Hang Mua | Mua Caves - Ninh Binh, Vietnam"
            picStyle={{ borderRadius: "3rem 0 0 0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/tacos.webp")}
            picDesc="Nori Tacos - Favorite Homemade Dish"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
        <div className="col-5 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/plants.webp")}
            picDesc="A Little Greenery - Home Mini Garden"
            picStyle={{ borderRadius: "0 3rem 0 0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/lake-close.webp")}
            picDesc="Lake Michigan - Chicago, IL"
            picStyle={{ borderRadius: "0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/fall.webp")}
            picDesc="The Arboretum - Connecticut College"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
      </div>
    </FadeInSection>

    <FadeInSection>
      <div className="row">
        <div className="col-4 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/halongbay.webp")}
            picDesc="Ha Long Bay - Quang Ninh, Vietnam"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
        <div className="col-8 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/bamboo.webp")}
            picDesc="Alba Wellness Valley - Hue, Vietnam"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
      </div>
    </FadeInSection>

    <FadeInSection>
      <div className="row">
        <div className="col-4 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/saigon.webp")}
            picDesc="Quoc Lo 52 | Highway 52 - Saigon, Vietnam"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
        <div className="col-4 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/sunset.webp")}
            picDesc="Walnut Beach - Milford, CT"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
        <div className="col-4 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/snow.webp")}
            picDesc="First Snow With Sylvia - New London, CT"
            picStyle={{ borderRadius: "0" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/cave.webp")}
            picDesc="Tuyet Tinh Coc | Am Tien Cave - Ninh Binh, Vietnam"
            picStyle={{ borderRadius: "0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/smile.webp")}
            picDesc="Say 'Beach' - Vung Tau, Vietnam"
            picStyle={{ borderRadius: "0 0 0 6rem" }}
            leftCornerPic
          />
        </div>
        <div className="col-7 custom-col">
          <GalleryPic
            picSrc={require("../assets/images/gallery/dawn.webp")}
            picDesc="Walnut Beach - Milford, CT"
            picStyle={{ borderRadius: "0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/violin.webp")}
            picDesc="Evans Hall - Connecticut College"
            picStyle={{ borderRadius: "0" }}
          />
          <GalleryPic
            picSrc={require("../assets/images/gallery/lake-wide.webp")}
            picDesc="Lake Michigan - Chicago, IL"
            picStyle={{ borderRadius: "0 0 6rem 0" }}
            rightCornerPic
          />
        </div>
      </div>
      <div className="title-box">
        <p className="subtitle-2">thank you for visiting my site :)</p>
      </div>
    </FadeInSection>
  </div>
);

export default Gallery;
