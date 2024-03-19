import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
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
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <NavLink to="/" activeClassName="active">
            <img srcSet={assets.Logo} alt="Logo" />
          </NavLink>
        </div>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </label>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/about" activeClassName="active" onClick={scrollToTop}>
              ABOUT&nbsp;US
            </NavLink> */}
            {/* <Link to="about">ABOUT&nbsp;US</Link> */}
            <a href="#ABOUT">ABOUT&nbsp;US</a>
          </li>
          <li>
            {/* <NavLink to="/events" activeClassName="active">
              EVENTS
            </NavLink> */}
            {/* <Link to="events">EVENTS</Link> */}
            <a href="#EVENT">EVENTS</a>
          </li>
          <li>
            {/* <NavLink to="/contact" activeClassName="active">
              CONTACT&nbsp;US
            </NavLink> */}
            {/* <Link to="contact">CONTACT&nbsp;US</Link> */}
            <a href="#CONTACT">CONTACT&nbsp;US</a>
          </li>
          <li>
            <NavLink
              to="/gallery"
              activeClassName="active"
              onClick={scrollToTop}
            >
              GALLERY
            </NavLink>
          </li>
        </ul>
        <div className="community">
          <a
            className="button"
            href="https://discord.com/invite/7XNFKPG5C4"
            target="_blank"
            rel="noopener noreferrer"
          >
            COMMUNITY
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
