import React from "react";
import "./Hero.css";
import Tops from "../../assets/images/tops.png";
import Bottoms from "../../assets/images/bottoms.png";
import Vector from "../../assets/images/vector.png";

function Hero() {
  return (
    <>
      <main>
        <div class="home">
          <div class="name">
            <div class="box">
              <h1 class="heading-big">ACM.BMU</h1>
              <h1 class="heading-big">STUDENTS&nbsp;CHAPTER</h1>
              <div class="bline"></div>
              <div class="communitytwo">
                <a
                  href="https://discord.com/invite/7XNFKPG5C4"
                  target="_blank"
                  class="button"
                >
                  COMMUNITY
                </a>
              </div>
            </div>
            <div class="sph">
              <img srcSet={Tops} class="ones" />
              <img srcSet={Bottoms} class="twos" />
            </div>
          </div>
          <div class="vecone">
            <img srcSet={Vector} />
          </div>

          <div class="social">
            <div class="youtube">
              <a
                href="www.youtube.com/@bmuacmstudentchapter1625"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div class="twit">
              <a href="https://twitter.com/acm_bmu" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div class="insta">
              <a
                href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div class="link">
              <a
                href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div class="line"></div>
          </div>
          <div class="scrol">
            <a href="#aboutus">
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <a href="#aboutus">
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <a href="#aboutus">
              <i class="fa-solid fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
