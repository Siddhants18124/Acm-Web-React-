import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const history = useNavigate();

  useEffect(() => {
    // Function to handle scrolling to the top when navigating to a new page
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener to handle scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById("home").offsetTop;
      const aboutUsSection = document.getElementById("aboutus").offsetTop;
      const eventsSection = document.getElementById("events").offsetTop;
      const contactUsSection = document.getElementById("contactus").offsetTop;

      if (scrollPosition >= homeSection && scrollPosition < aboutUsSection) {
        setActiveLink("home");
      } else if (
        scrollPosition >= aboutUsSection &&
        scrollPosition < eventsSection
      ) {
        setActiveLink("aboutus");
      } else if (
        scrollPosition >= eventsSection &&
        scrollPosition < contactUsSection
      ) {
        setActiveLink("events");
      } else {
        setActiveLink("contactus");
      }
    };

    // Add event listener for scroll position
    window.addEventListener("scroll", handleScroll);

    // Scroll to top when component mounts
    handleScrollToTop();

    // Remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [history.location.pathname]); // Trigger effect when the pathname changes

  // function Navbar() {
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
            <a
              href="#aboutus"
              className={activeLink === "aboutus" ? "active" : ""}
            >
              ABOUT&nbsp;US
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={activeLink === "events" ? "active" : ""}
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className={activeLink === "contactus" ? "active" : ""}
            >
              CONTACT&nbsp;US
            </a>

            <a href="#aboutus">ABOUT&nbsp;US</a>
          </li>
          <li>
            <a href="#events">EVENTS</a>
          </li>
          <li>
            <a href="#contactus">CONTACT&nbsp;US</a>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="active">
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
