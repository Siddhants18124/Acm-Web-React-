import React from "react";
import "./About.css";
import Pic1 from "../../assets/images/pic1.jpg";
import Pic2 from "../../assets/images/pic2.jpg";
import Pic3 from "../../assets/images/pic3.jpg";
import Pic4 from "../../assets/images/pic4.jpg";
import sphereTopTwo from "../../assets/images/sphereTopTwo.png";
import sphereBottomTwo from "../../assets/images/sphereBottomTwo.png";

function About() {
  return (
    <>
      <main>
        <div className="about" id="aboutus">
          <div className="partOne">
            <h1 id="acm">ABOUT US</h1>
            <div className="lineThree"></div>
            <div className="aboutAcm">
              <p align="justify">
                The Association for Computing Machinery is a multi-faceted
                technical chapter which focuses on bringing up the community of
                computer enthusiasts together to promote innovation. From the
                celebration of open source Hacktoberfest workshop to hands-on
                Game Development, from Graphic Designing to intense Coding, from
                all the fun events to major Tech talks, everything you find is
                here at BMU ACM!
              </p>
            </div>
            <div className="socialTwo">
              <a
                href="www.youtube.com/@bmuacmstudentchapter1625"
                target="_blank"
                className="youtubeTwo"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com/acm_bmu"
                target="_blank"
                className="twitterTwo"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                className="instaTwo"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                target="_blank"
                className="linkedinTwo"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="partTwo">
            <div className="sphereTopTwo">
              <img srcSet={sphereTopTwo} />
            </div>
            <div className="sphereBottomTwo">
              <img srcSet={sphereBottomTwo} />
            </div>
            <div className="gallery">
              <div className="boxTwo">
                <div className="one">
                  <img srcSet={Pic1} id="picOne" />
                  <img srcSet={Pic2} />
                </div>
                <div className="two">
                  <img srcSet={Pic3} />
                  <img srcSet={Pic4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
