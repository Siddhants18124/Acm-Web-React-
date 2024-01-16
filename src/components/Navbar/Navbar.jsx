import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/LOGO.png";

function Navbar() {
  return (
    <header>
      <div class="header">
        <a href="index.html" class="logo">
          <img srcSet={Logo} />
        </a>
        <div class="pages">
          <a href="#home">HOME</a>
          <a href="#aboutus">ABOUT US</a>
          <a href="#events">EVENTS</a>
          <a href="#contactus">CONTACT US</a>
          <a href="../gallery2/gallery.html">GALLERY</a>
        </div>
        <div class="community">
          <a
            href="https://discord.com/invite/7XNFKPG5C4"
            target="_blank"
            class="button"
          >
            COMMUNITY
          </a>
        </div>
      </div>

      <div class="main_box">
        <input type="checkbox" id="check" />
        <div class="btn_one">
          <label for="check">
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>

        <div class="sidebar_menu">
          <div class="logo">
            <a href="index.html">ACM.BMU</a>
          </div>

          <div class="btn_two">
            <label for="check">
              <i class="fa-solid fa-xmark"></i>
            </label>
          </div>

          <div class="menu">
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#aboutus">ABOUT US</a>
              </li>
              <li>
                <a href="#events">EVENTS</a>
              </li>
              <li>
                <a href="#contactus">CONTACT US</a>
              </li>
              <li>
                <a href="gallery.html">GALLERY</a>
              </li>
            </ul>
          </div>

          <div class="social_media">
            <ul>
              <a href="https://www.linkedin.com/company/bmu-acm-student-chapter/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/acm_bmu">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="www.youtube.com/@bmuacmstudentchapter1625">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
