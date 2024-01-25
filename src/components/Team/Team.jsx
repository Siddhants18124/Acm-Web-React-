import React, { useRef } from "react";
import "./Team.css";
import assets from "../../assets/assets";

function Team() {
  const containerOneRef = useRef(null);

  const scrollContainerOne = (direction) => {
    const container = containerOneRef.current;
    if (container) {
      const scrollAmount = 250;
      container.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const containerTwoRef = useRef(null);

  const scrollContainerTwo = (direction) => {
    const container = containerTwoRef.current;
    if (container) {
      const scrollAmount = 250;
      container.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="team">
        <div className="heading">
          <h1>MEET&nbsp;OUR&nbsp;TEAM</h1>
        </div>
        <button
          class="btn-previous-one"
          onClick={() => scrollContainerOne("previous")}
        >
          <i class="fa-solid fa-caret-left"></i>
        </button>
        <button class="btn-next-one" onClick={() => scrollContainerOne("next")}>
          <i class="fa-solid fa-caret-right"></i>
        </button>
        <div className="containerOne" ref={containerOneRef}>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.Pic} />
              </div>
              <div className="partONEtwo">
                <p id="name">Devanjali Relan</p>
                <p>Mentor</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti incidunt quia debitis ad adipisci fugit impedit eos
                fuga, ex labore necessitatibus repellendus atque obcaecati
                beatae autem! Rem autem eos quo!
              </p>
            </div>
            <div className="partTHREE">
              <a href="linkedin.com/in/devanjali-relan-2160a258">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.Pic} />
              </div>
              <div className="partONEtwo">
                <p id="name">Nishtha Phutela</p>
                <p>Mentor</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti incidunt quia debitis ad adipisci fugit impedit eos
                fuga, ex labore necessitatibus repellendus atque obcaecati
                beatae autem! Rem autem eos quo!
              </p>
            </div>
            <div className="partTHREE">
              <a href="linkedin.com/in/nishtha-phutela-9a1a8a36">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.Pic} />
              </div>
              <div className="partONEtwo">
                <p id="name">Shashank Goswami</p>
                <p>President</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti incidunt quia debitis ad adipisci fugit impedit eos
                fuga, ex labore necessitatibus repellendus atque obcaecati
                beatae autem! Rem autem eos quo!
              </p>
            </div>
            <div className="partTHREE">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.Pic} />
              </div>
              <div className="partONEtwo">
                <p id="name">Aditya Rastogi</p>
                <p>Vice President</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti incidunt quia debitis ad adipisci fugit impedit eos
                fuga, ex labore necessitatibus repellendus atque obcaecati
                beatae autem! Rem autem eos quo!
              </p>
            </div>
            <div className="partTHREE">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="containerTwo" ref={containerTwoRef}>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Siddhant Sharma</p>
              <p>Treasurer</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Syed Mohd Abid</p>
              <p>Advisor</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Akshay Kumar Jain</p>
              <p>Advisor</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Prakhar} />
              <p id="name">Prakhar Srivastava</p>
              <p>Operations</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="https://www.instagram.com/prakhar_5_?igsh=eW84OHllNW1zcndp&utm_source=qr">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/prakhar5/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/prakharr5">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Divyansh Verma</p>
              <p>Operations</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Guneet Chawla</p>
              <p>Operations</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Garv Garg</p>
              <p>Designer</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Dakshi} />
              <p id="name">Dakshi Arora</p>
              <p>Content</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Ananya Aggarwal</p>
              <p>Content</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Daksh Goel</p>
              <p>Workshop</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Vedansh Kumawat</p>
              <p>Workshop</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Yashvardhan</p>
              <p>Workshop</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Anmol Maheshwari</p>
              <p>Marketing & PR</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">Raghvendra Singh</p>
              <p>Marketing & PR</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          class="btn-previous slide-btn"
          onClick={() => scrollContainerTwo("previous")}
        >
          <i class="fa-solid fa-caret-left"></i>
        </button>
        <button
          class="btn-next slide-btn"
          onClick={() => scrollContainerTwo("next")}
        >
          <i class="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </>
  );
}

export default Team;
