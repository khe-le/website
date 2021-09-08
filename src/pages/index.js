import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import Project from "../components/Project";
import FadeInSection from "../components/FadeInSection";
import Gallery from "../components/Gallery";
import { useState } from "react";
// Imports
/* Profile Pictures */
import squareAva from "../assets/images/avatar-md.png";
import roundAva from "../assets/images/rsz_avatar-xs.png";

/* Project Images with width:height ratio of 1.6:1 */

//Project 1
import proj1a from "../assets/images/rsz_project1a.png";
import proj1b from "../assets/images/rsz_project1b.png";
import proj1c from "../assets/images/rsz_project1c.png";

//Project 2
import proj2a from "../assets/images/rsz_project2a.png";
import proj2b from "../assets/images/rsz_project2b.png";
import proj2c from "../assets/images/rsz_project2c.png";

//Project 3
import proj3a from "../assets/images/rsz_project3a.png";
import proj3b from "../assets/images/rsz_project3b.png";
import proj3c from "../assets/images/rsz_project3c.png";

const HomeIndex = () => {
  const [summary, toggleExpand] = useState(true);

  function handler() {
    toggleExpand(!summary);
  }

  return (
    <Layout>
      {/* Gatsby React Helmet */}
      <Helmet
        title="Khe Le"
        meta={[
          { name: "description", content: "Personal Website" },
          { name: "keywords", content: "personal webstite, portfolio" },
        ]}
      ></Helmet>
      <link
        rel="preload"
        as="image"
        href="../assets/images/banner.png"
        style={{ display: "none" }}
      />
      <link
        rel="preload"
        as="image"
        href="../assets/images/banner-sm.png"
        style={{ display: "none" }}
      />
      <link
        rel="preload"
        as="image"
        href="../assets/images/banner-xs.png"
        style={{ display: "none" }}
      />
      {/* Banner */}
      <Banner />

      {/* Main Section */}
      <div id="main">
        {/* About Section */}
        <section id="about">
          <div className="container-fluid">
            <FadeInSection>
              <div className="row">
                <div className="col-lg-5">
                  <img className="square-avatar" src={squareAva} alt="Avatar" />
                </div>
                <div className="about-details col-lg-7">
                  <h2 className="subtitle">My intro</h2>
                  <h1 className="title">About me</h1>
                  <hr></hr>
                  <img className="round-avatar" src={roundAva} alt="Avatar" />
                  <p>
                    <span role="img">👋</span>Hi there! My name is Kate. I'm a sophomore at Connecticut College 
                    and a former software engineer intern at Bosch Automotive Mobility. 
                    I'm pursuing a BA degree in computer science with an expected graduation in 2024. 
                    What I'm most passionate about are cultivating technical solutions to real-world problems, 
                    advocating sustainability, and building community-driven applications. 
                    {summary && (
                      <span onClick={handler} className="expand-toggle">
                        read more...
                      </span>
                    )}
                  </p>
                  {!summary && (
                    <>
                      <p>
                        <span role="img">🌊</span>I appreciate every challenge I
                        came across that helped cultivate my self-efficacy in
                        this risk-taking world. Through internships at
                        innovative tech companies, I learned the importance of
                        staying open-minded to changes, whether they be
                        adaptations to new project alignments, programming
                        languages, or attitudes. I feel highly motivated as I
                        discover ways to improve flexibility and creativity
                        through ongoing discussions with others to address a
                        customer’s changing needs.
                      </p>
                      <p>
                        <span role="img">🌿</span>I love to organize my room on
                        a regular basis. Such habit transfers to my every aspect
                        of life. I always try to start the day with a
                        goal-oriented mindset and bring my organized
                        characteristics to the work I do for maximum
                        productivity. Rather than following rigid approaches, I
                        prefer to strive to expand my comfort zone and adopt
                        unconventional methods to build sustainable solutions.
                      </p>
                      <p>
                        <span role="img">🌤</span>What compels me to wake up for
                        work and become fully charged for the day is knowing I
                        have another chance to bring warmth and friendship to my
                        community. I thrive in jobs that foster diversity and
                        culture, enjoying collaborations with people from
                        different walks of life for a shared mission. Not only
                        do I see it as a chance to accumulate new knowledge, but
                        also to deeply connect with others through their
                        different views at problems. I aim to be a team player,
                        be in tune with the emotional needs of those around me,
                        and thrive on positive reinforcement.
                      </p>
                      <p>
                        <span role="img">👾</span>Competencies: Python/Java,
                        full-stack web development, MERN stack, UI/UX design,
                        embedded systems
                        <span onClick={handler} className="expand-toggle">
                          ...read less
                        </span>
                      </p>
                    </>
                  )}

                  <div class="profile row">
                    <div className="profile-column col-md-6">
                      <h3>
                        <b>Full Name:</b> Kate Le
                      </h3>
                      <h3>
                        <b>School:</b> Connecticut College
                      </h3>
                      <h3>
                        <b>Major:</b> Computer Science
                      </h3>
                      <h3>
                        <b>Expected Graduation:</b> 2024
                      </h3>
                    </div>
                    <div className="profile-column col-md-6">
                      <h3>
                        <b>Origin:</b> Ho Chi Minh, Vietnam
                      </h3>
                      <h3>
                        <b>DOB:</b> July 4, 2001
                      </h3>
                      <h3>
                        <b>Language:</b> English, Vietnamese
                      </h3>
                      <h3>
                        <b>Email:</b> levanyenkhe@gmail.com
                      </h3>
                    </div>
                  </div>
                  <a href="https://drive.google.com/file/d/1zIoDG4gzAP-i3VM2lO8snhFuuzdVjl4n/view?usp=sharing">
                    <button type="button" className="cv-button btn">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Work Section */}
        <section id="work">
          <div className="container-fluid">
            <FadeInSection>
              <h1 className="title">Some projects I've built</h1>
              <h1 className="vertical-line">|</h1>
            </FadeInSection>

            {/* Project 1 */}
            <div className="row">
              {/* Description displayed at breakpoint MEDIUM */}
              <div className="description top">
                <FadeInSection>
                  <h2 className="category">UI/UX Design Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">MyTIN App</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details top">
                    A friendly, welcoming look for the HR management web and
                    mobile application at FPT Telecom, Vietnam. A video
                    conference service is also integrated into the app, allowing
                    coworkers to connect through face-to-face calls.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="top">Angular</li>
                    <li className="top">OpenVidu API</li>
                    <li className="top">Figma</li>
                  </ul>
                </FadeInSection>
              </div>

              {/* Carousel is always displayed */}
              <div className="col-lg-7">
                <FadeInSection>
                  <Project
                    image1={proj1a}
                    image2={proj1b}
                    image3={proj1c}
                  ></Project>
                </FadeInSection>
              </div>

              {/* Description displayed at breakpoint LARGE */}
              <div className="description right">
                <FadeInSection>
                  <h2 className="category">UI Design Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">MyTIN App</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details right">
                    A friendly, welcoming look for the HR management web and
                    mobile application at FPT Telecom, Vietnam. A video
                    conference service is also integrated into the app, allowing
                    coworkers to connect through face-to-face calls.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="right">Angular</li>
                    <li className="right">OpenVidu API</li>
                    <li className="right">Figma</li>
                  </ul>
                </FadeInSection>
              </div>
            </div>

            {/* Project 2 */}
            <div className="row">
              {/* Description displayed at breakpoint MEDIUM */}
              <div className="description top">
                <FadeInSection>
                  <h2 className="category">Research Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">MyoCare</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details top">
                    A home-based ECG monitor that detects myocardial infarction
                    in the elderly. Once the system suceeds in collecting and
                    analyzing ECG signals, diagnostic data is uploaded to a web
                    application for tracking.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="top">Firebase</li>
                    <li className="top">MATLAB</li>
                    <li className="top">Python</li>
                    <li className="top">Kit STM32F4</li>
                  </ul>
                </FadeInSection>
              </div>

              {/* Carousel is always displayed */}
              <div className="col-lg-7 offset-lg-5">
                <FadeInSection>
                  <Project
                    image1={proj2a}
                    image2={proj2b}
                    image3={proj2c}
                  ></Project>
                </FadeInSection>
              </div>

              {/* Description displayed at breakpoint LARGE */}
              <div className="description left">
                <FadeInSection>
                  <h2 className="category">Research Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">MyoCare</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details left">
                    A home-based ECG monitor that detects myocardial infarction
                    in the elderly. Once the system suceeds in collecting and
                    analyzing ECG signals, diagnostic data is uploaded to a web
                    application for tracking.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="left">Firebase</li>
                    <li className="left">MATLAB</li>
                    <li className="left">Python</li>
                    <li className="left">Kit STM32F4</li>
                  </ul>
                </FadeInSection>
              </div>
            </div>

            {/* Project 3 */}
            <div className="row">
              {/* Description displayed at breakpoint MEDIUM */}
              <div className="description top">
                <FadeInSection>
                  <h2 className="category">College Group Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">Coin Collector</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details top">
                    A{" "}
                    <a href="https://github.com/SylviaLe/Final-Project">
                      Python game
                    </a>{" "}
                    with rank system played with keyboard arrow keys. Built with
                    the particular&nbsp;
                    <a href="https://mcsp.wartburg.edu/zelle/python/graphics.py#:~:text=The%20library%20is%20designed%20to,Franklin%2C%20Beedle%20%26%20Associates).">
                      graphics library by John Zelle.
                    </a>{" "}
                    Climb rank by collect all generated coins and avoid traps in
                    the shortest amount of time.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="top">PyGame</li>
                    <li className="top">Graphics Library</li>
                  </ul>
                </FadeInSection>
              </div>

              {/* Carousel is always displayed */}
              <div className="col-lg-7">
                <FadeInSection>
                  <Project
                    image1={proj3a}
                    image2={proj3b}
                    image3={proj3c}
                  ></Project>
                </FadeInSection>
              </div>

              {/* Description displayed at breakpoint LARGE */}
              <div className="description right">
                <FadeInSection>
                  <h2 className="category">College Group Project</h2>
                </FadeInSection>
                <FadeInSection>
                  <h2 className="name">Coin Collector</h2>
                </FadeInSection>
                <FadeInSection>
                  <p className="details right">
                    A{" "}
                    <a href="https://github.com/SylviaLe/Final-Project">
                      Python game
                    </a>{" "}
                    with rank system played with keyboard arrow keys. Built with
                    the particular&nbsp;
                    <a href="https://mcsp.wartburg.edu/zelle/python/graphics.py#:~:text=The%20library%20is%20designed%20to,Franklin%2C%20Beedle%20%26%20Associates).">
                      graphics library by John Zelle.
                    </a>{" "}
                    Climb rank by collect all generated coins and avoid traps in
                    the shortest amount of time.
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <ul>
                    <li className="right">PyGame</li>
                    <li className="right">Graphics Library</li>
                  </ul>
                </FadeInSection>
              </div>
            </div>

            <FadeInSection>
              <h1 className="other-title">Other projects</h1>
              <h1 className="other-vertical-line">|</h1>
            </FadeInSection>

            <FadeInSection>
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://drive.google.com/uc?export=view&id=1XdKzix5Qhfe3BlT3GAA1UkE8Xdl17dyb"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Dawn (Contributor)</h5>
                      <p className="card-text">
                        Video-driven empathy hubs where people of diverse
                        backgrounds can connect empathetically.
                      </p>
                      <p className="card-tech">
                        React&nbsp;&nbsp;Hasura&nbsp;&nbsp;GraphQL
                        <span className="card-icon">
                          <a
                            className="icon fa-external-link ico"
                            href="https://www.dawn.so"
                          >
                            <span className="label">Website</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://drive.google.com/uc?export=view&id=1pa1hBESnHSw-3VpA_quec8nVUv7xstd-"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Blind Love Letters (Contributor)
                      </h5>
                      <p className="card-text">
                        Dating application that matches individuals through
                        e-letters and personality matching algorithms.
                      </p>
                      <p className="card-tech">
                        React&nbsp;&nbsp;Firebase
                        <span className="card-icon">
                          <a
                            className="icon fa-external-link ico"
                            href="https://blindloveletters.com"
                          >
                            <span className="label">Website</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://drive.google.com/uc?export=view&id=1oox93HLDZyIZl74k_DiKu_7xtYTdRcLu"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Basic Blog Website</h5>
                      <p className="card-text">
                        A simple blog website that keeps track of your daily
                        memories. Write anything and post!
                      </p>
                      <p className="card-tech">
                        Node&nbsp;&nbsp;Express&nbsp;&nbsp;EJS
                        <span className="card-icon">
                          <a
                            className="icon fa-github ico"
                            href="https://github.com/khe-le/basic-blog"
                          >
                            <span className="label">GitHub</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://drive.google.com/uc?export=view&id=1ozfjK5TxAYJSbyRZq1pCh2HCQbofbsqK"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">To Do List</h5>
                      <p className="card-text">
                        Keep yourself busy and productive everyday with this
                        to-do list built with Node.
                      </p>
                      <p className="card-tech">
                        Node&nbsp;&nbsp;Express&nbsp;&nbsp;EJS
                        <span className="card-icon">
                          <a
                            className="icon fa-github ico"
                            href="https://github.com/khe-le/todolist-v1"
                          >
                            <span className="label">GitHub</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://drive.google.com/uc?export=view&id=1EiwNneyilbBb4b73H2gqKV4b5-A7j2vE"
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Simon Game</h5>
                      <p className="card-text">
                        Test your memory skill with this classic Simon game
                        built from scratch.
                      </p>
                      <p className="card-tech">
                        Javascript&nbsp;&nbsp;jQuery
                        <span className="card-icon">
                          <a
                            className="icon fa-github ico"
                            href="https://github.com/khe-le/simon-game"
                          >
                            <span className="label">GitHub</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
        <section id="gallery">
          <Gallery></Gallery>
        </section>
      </div>
    </Layout>
  );
};

export default HomeIndex;
