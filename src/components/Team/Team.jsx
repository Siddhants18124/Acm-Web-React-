import React, { useRef, useEffect } from "react";
import "./Team.css";
import assets from "../../assets/assets";

function Team() {
  const containerOneRef = useRef(null);
  const containerTwoRef = useRef(null);
  const scrollContainerOne = (direction) => {
    const container = containerOneRef.current;
    if (container) {
      const scrollAmount = 240;
      container.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const scrollContainerTwo = (direction) => {
    const container = containerTwoRef.current;
    if (container) {
      const scrollAmount = 170;
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
          className="btn-previous-one"
          onClick={() => scrollContainerOne("previous")}
        >
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button
          className="btn-next-one"
          onClick={() => scrollContainerOne("next")}
        >
          <i className="fa-solid fa-caret-right"></i>
        </button>
        <div className="containerOne" ref={containerOneRef}>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.DevanjaliMaam} />
              </div>
              <div className="partONEtwo">
                <p id="name">Devanjali&nbsp;Relan</p>
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
              <a href="https://www.linkedin.com/in/devanjali-relan-2160a258/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.NishthaMaam} />
              </div>
              <div className="partONEtwo">
                <p id="name">Nishtha&nbsp;Phutela</p>
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
              <a href="https://www.linkedin.com/in/nishtha-phutela-9a1a8a36/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="containerOneOne">
            <div className="partONE">
              <div className="partONEone">
                <img srcSet={assets.Shashank} />
              </div>
              <div className="partONEtwo">
                <p id="name">Shashank&nbsp;Goswami</p>
                <p>President</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                ACM for me, is the stepping stone in overcoming your mental
                barriers and reaching for triumph in technical as well as social
                aspects of your journey to greatness .
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
                <img srcSet={assets.Aditya} />
              </div>
              <div className="partONEtwo">
                <p id="name">Aditya&nbsp;Rastogi</p>
                <p>Vice President</p>
              </div>
            </div>
            <div className="partTWO">
              <p align="justify">
                ACM has been igniting innovators itself, which knits its success
                at every moment, there is .
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
              <img srcSet={assets.Siddhant} />
              <p id="name">Siddhant&nbsp;Sharma</p>
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
              <img srcSet={assets.Abid} />
              <p id="name">Syed&nbsp;Mohd&nbsp;Abid</p>
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
              <img srcSet={assets.AKJ} />
              <p id="name">Akshay&nbsp;Kumar&nbsp;Jain</p>
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
              <p id="name">Prakhar&nbsp;Srivastava</p>
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
              <img srcSet={assets.Divyansh} />
              <p id="name">Divyansh&nbsp;Verma</p>
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
              <img srcSet={assets.Guneet} />
              <p id="name">Guneet&nbsp;Chawla</p>
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
              <img srcSet={assets.garv} />
              <p id="name">Garv&nbsp;Garg</p>
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
              <p id="name">Dakshi&nbsp;Arora</p>
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
              <img srcSet={assets.Ananya} />
              <p id="name">Ananya&nbsp;Aggarwal</p>
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
              <img srcSet={assets.Daksh} />
              <p id="name">Daksh&nbsp;Goel</p>
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
              <img srcSet={assets.Vedansh} />
              <p id="name">Vedansh&nbsp;Kumawat</p>
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
              <img srcSet={assets.Yashvardhan} />
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
              <img srcSet={assets.Anmol} />
              <p id="name">Anmol&nbsp;Maheshwari</p>
              <p>Marketing&nbsp;&&nbsp;PR</p>
              <p>B.Tech&nbsp;CSE</p>
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
              <img srcSet={assets.Raghv} />
              <p id="name">Raghvendra&nbsp;Singh</p>
              <p>Marketing&nbsp;&&nbsp;PR</p>
              <p>B.Tech&nbsp;CSE</p>
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
          className="btn-previous slide-btn"
          onClick={() => scrollContainerTwo("previous")}
        >
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button
          className="btn-next slide-btn"
          onClick={() => scrollContainerTwo("next")}
        >
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </>
  );
}

export default Team;
