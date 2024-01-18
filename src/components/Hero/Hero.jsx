import React from "react";
import "./Hero.css";
import Tops from "../../assets/images/tops.png";
import Bottoms from "../../assets/images/bottoms.png";
import Vector from "../../assets/images/vector.png";

function Hero() {
  let x = 6;
  console.log(x);
  return (
    <>
      <main>
        <div className="home">
          <div className="name">
            <div className="box">
              <h1 className="heading-big">ACM.BMU</h1>
              <h1 className="heading-big">STUDENTS&nbsp;CHAPTER</h1>
              <div className="bline"></div>

              <div className="communitytwo">
                <a
                  href="https://discord.com/invite/7XNFKPG5C4"
                  target="_blank"
                  className="button"
                >
                  COMMUNITY
                </a>
              </div>
            </div>
            <div className="sph">
              <img srcSet={Tops} className="ones" />
              <img srcSet={Bottoms} className="twos" />
            </div>
          </div>
          <div className="vecone">
            <img srcSet={Vector} />
          </div>

          <div className="social">
            <div className="youtube">
              <a
                href="www.youtube.com/@bmuacmstudentchapter1625"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="twit">
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
            <div className="link">
              <a
                href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="line"></div>
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
