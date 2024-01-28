import React from "react";
import "./footer.css";
import assets from "../../assets/assets";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="firstPart">
            <img srcSet={assets.logoTwo} />
            <img srcSet={assets.BMULOGO} />
          </div>
          <div className="secondPart">
            <a
              href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/ACM-BMU" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="thirdPart">
            <h3>
              HANDCRAFTED&nbsp;BY&nbsp;ACM&nbsp;TEAM&nbsp;2023-24,
              POWERED&nbsp;BY&nbsp;ACM&nbsp;STUDENT&nbsp;CHAPTER,
              BML&nbsp;MUNJAL&nbsp;UNIVERSITY ALL&nbsp;RIGHTS&nbsp;RESERVED
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
