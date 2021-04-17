import React from "react";
import FadeInSection from "./FadeInSection";

const Contact = () => (
  <section id="contact">
    <div className="container-fluid">
      <FadeInSection>
        {/* Contact Area */}
        <div className="front">
          <h2 className="subtitle">What's next?</h2>
          <h1 className="title">Get In Touch</h1>
          <p className="content">
            Feel free to connect with me. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <a href="mailto:levanyenkhe@gmail.com">
            <button className="email-button btn">Say Hello</button>
          </a>
          <hr></hr>
          <ul className="contact-social-icons">
            <li>
              <a
                className="icon alt2 fa-github"
                href="https://github.com/khe-le"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="icon alt2 fa-linkedin"
                href="https://www.linkedin.com/in/khe-v-le/"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            {/* <li>
              <a
                className="icon alt2 fa-instagram"
                href="https://www.instagram.com/khe_levy/?hl=en"
              >
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                className="icon alt2 fa-youtube"
                href="https://www.youtube.com/channel/UCVLkEtPgGuJr2MtABha7_og"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
          </ul>
          <a href="https://github.com/khe-le/website">
            <p className="claim">Designed & Built by Khe Le</p>
          </a>
        </div>
      </FadeInSection>

      {/* Empty Footer */}
    </div>
  </section>
);

export default Contact;
