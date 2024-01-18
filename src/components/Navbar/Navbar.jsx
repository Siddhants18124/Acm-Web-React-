import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/LOGO.png";

function Navbar() {
  {
    const nav = document.querySelector(".header");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("header--hidden");
      } else {
        nav.classList.remove("header--hidden");
      }
      lastScrollY = window.scrollY;
    });
  }
  return (
    <header>
      <nav className="header">
        <a href="index.html" className="logo">
          <img srcSet={Logo} />
        </a>
        <div className="pages">
          <a href="#home">HOME</a>
          <a href="#aboutus">ABOUT US</a>
          <a href="#events">EVENTS</a>
          <a href="#contactus">CONTACT US</a>
          <a href="gallery.html">GALLERY</a>
        </div>
        <div className="community">
          <a
            href="https://discord.com/invite/7XNFKPG5C4"
            target="_blank"
            className="button"
          >
            COMMUNITY
          </a>
        </div>
      </nav>

      <div className="main_box">
        <input type="checkbox" id="check" />
        <div className="btn_one">
          <label htmlFor="check">
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>

        <div className="sidebar_menu">
          <div className="logo">
            <a href="index.html">ACM.BMU</a>
          </div>

          <div className="btn_two">
            <label htmlFor="check">
              <i className="fa-solid fa-xmark"></i>
            </label>
          </div>

          <div className="menu">
            <ul>
              <li>
                <a href="index.html">HOME</a>
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

          <div className="social_media">
            <ul>
              <a href="https://www.linkedin.com/company/bmu-acm-student-chapter/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/acm_bmu">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="www.youtube.com/@bmuacmstudentchapter1625">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
