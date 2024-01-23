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
        <div className="logo">
          <a href="#">
            <img srcSet={Logo} />
          </a>
        </div>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </label>
        <ul>
          <li>
            <a href="index.html" className="active">
              HOME
            </a>
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
        <div className="community">
          <a
            className="button"
            href="https://discord.com/invite/7XNFKPG5C4"
            target="_blank"
          >
            COMMUNITY
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
