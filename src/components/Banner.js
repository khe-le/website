import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const Banner = () => (
  <section id="banner">
    <div class="inner">
      <p className="greeting">Hi, my name is</p>
      <h1 className="name">Kate Le</h1>
      <h1 className="pitch">Let's connect.</h1>
      <p className="intro">
        Welcome to my website, where I share both of my professional and
        personal journeys.
      </p>
      <ScrollIntoView selector="#about">
        <button
          type="button"
          className="banner-button btn btn-lg btn-outline-light"
        >
          Discover
          <span className="icon fa-long-arrow-right"></span>
        </button>
      </ScrollIntoView>
    </div>
  </section>
);

export default Banner;
