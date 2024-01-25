import React, { useRef } from "react";
import "./Team.css";
import assets from "../../assets/assets";

function Team() {
  const containerOneRef = useRef(null);

  const scrollContainerOne = (direction) => {
    const container = containerOneRef.current;
    if (container) {
      const scrollAmount = 300;
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
      const scrollAmount = 300;
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
              <i className="fa-brands fa-linkedin"></i>
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
              <i className="fa-brands fa-linkedin"></i>
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
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
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
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
        <div className="containerTwo" ref={containerTwoRef}>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="containerTwoTwo">
            <div className="partFirst">
              <img srcSet={assets.Pic} />
              <p id="name">lorem ipsum</p>
              <p>EC</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
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
