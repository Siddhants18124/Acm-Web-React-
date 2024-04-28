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
                Being an ACM BMU mentor is incredibly rewarding. I'm delighted
                to guide students as ACM nurtures their innovative spirit,
                shaping future leaders who'll drive positive technical and
                societal change. Nurturing their well-rounded growth is
                heartening.
              </p>
            </div>
            <div className="partTHREE">
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/devanjali-relan-2160a258/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:devanjali.relan@bmu.edu.in">
                <i className="fa-solid fa-envelope"></i>
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
                As a faculty mentor for ACM BMU, I'm delighted to guide this
                dynamic platform empowering students beyond boundaries.
                Witnessing their transformation, fostering technical prowess and
                social consciousness, is truly a privilege. I'm happy to
                cultivate their skills and purpose.
              </p>
            </div>
            <div className="partTHREE">
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nishtha-phutela-9a1a8a36/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:nishtha.phutela@bmu.edu.in">
                <i className="fa-solid fa-envelope"></i>
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
              <a href="https://www.instagram.com/siddhant_18124/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="www.linkedin.com/in/siddhant-sharma18124">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Siddhants18124">
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
              <img srcSet={assets.divyansh} />
              <p id="name">Divyansh&nbsp;Verma</p>
              <p>Operations</p>
              <p>B.Tech CSE</p>
            </div>
            <div className="partSecond">
              <a href="https://www.instagram.com/divyanshverma26?igsh=em03eDE5c3ExZDQ4&utm_source=qr">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/divyansh-verma-b0579529a/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/divyaansshh">
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
              <a href="https://www.instagram.com/chawla.guneeet?igsh=MWs5bTlwNjJtZTdzbg%3D%3D&utm_source=qr">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/guneetchawla">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Guneeet23">
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
              <a href="https://www.instagram.com/dakshi.arora/?igsh=MWs5bTlwNjJtZTdzbg%3D%3D&utm_source=qr">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/dakshi-arora/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/DakshiArora11">
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
              <a href="https://www.instagram.com/_ananya.021?igsh=MWd6a3M1bGY3dXRuMQ==">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ananya-aggarwal-769618268">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/ananya021">
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
              <a href="https://www.instagram.com/vedansh_kumawat/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vedansh-kumawat-686366285/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Vedansh-kumawat">
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
              <a href="https://www.instagram.com/anmol.maheshwari_/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/anmol-maheshwari-46a257265/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/AnmolMaheshwari12">
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
              <a href="https://www.instagram.com/ra_ghav004/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/raghvendra-singh-chouhan-15004b251/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/raghvendraschouhan">
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
