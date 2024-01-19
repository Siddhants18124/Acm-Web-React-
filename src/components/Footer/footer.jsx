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
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
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
