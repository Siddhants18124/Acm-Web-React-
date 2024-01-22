import React from "react";
import "./footer.css";
import BMULOGO from "../../assets/images/BMULOGO.png";
import logoTwo from "../../assets/images/logoTwo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="firstPart">
            <img srcSet={logoTwo} />
            <img srcSet={BMULOGO} />
          </div>
          <div className="secondPart">
            <a
              href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/ACM-BMU" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="thirdPart">
            <h3>
              HANDCRAFTED BY ACM TEAM 2022-2023, POWERED BY ACM STUDENT CHAPTER,
              BML MUNJAL UNIVERSITY ALL RIGHTS RESERVED
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
