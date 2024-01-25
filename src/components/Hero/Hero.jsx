import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <main>
        <div className="home">
          <div data-aos="fade-right" className="vectorOne">
            <img srcSet={assets.vectorOne} />
          </div>

          <div className="name">
            <div className="sphereTopOne">
              <img srcSet={assets.sphereTopOne} />
            </div>
            <div className="sphereBottomOne">
              <img srcSet={assets.sphereBottomOne} />
            </div>
            <div data-aos="fade-right" className="boxOne">
              <h1 className="headingBig">ACM.BMU</h1>
              <h1 className="headingBig">STUDENTS&nbsp;CHAPTER</h1>
              <div className="lineOne"></div>

              <div className="communityTwo">
                <a
                  href="https://discord.com/invite/7XNFKPG5C4"
                  target="_blank"
                  className="button"
                >
                  COMMUNITY
                </a>
              </div>
            </div>
          </div>

          <div className="socialOne">
            <div className="youtube">
              <a
                href="https://www.youtube.com/channel/UCGZRRxEodhrXLTVZgQl7iyA"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="twitter">
              <a href="https://twitter.com/acm_bmu" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="lineTwo"></div>
          </div>
          <div className="scrol">
            <a href="#aboutus">
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <a href="#aboutus">
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <a href="#aboutus">
              <i className="fa-solid fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
