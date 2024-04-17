import React, { useEffect, useRef } from "react";
import "./Events.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const previousCardRef = useRef(null);

  useGSAP(() => {
    const colors = ["#061E9C", "#ECB74C", "#7DD8CD", "#E0FF57", "#7DD8CD"];
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      const rotationAngle = index % 2 === 0 ? -5 : 5;

      gsap.to(card, {
        boxShadow: `0px 0px 50px 20px ${colors[index]}`,
        rotation: rotationAngle,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=50`,
          end: () => `+=100%`,
          scrub: true,
          onUpdate: (self) => {
            const boxShadowOpacity = 1 - self.progress * 1;
            gsap.set(card, {
              boxShadow: `0px 0px 50px 20px rgba(${colors[index]}, ${boxShadowOpacity})`,
            });
          },
          onLeave: () => {
            if (previousCardRef.current) {
              gsap.set(previousCardRef.current, { boxShadow: "none" });
            }
            previousCardRef.current = card;
          },
        },
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top-=150",
        pin: true,
        pinSpacing: false,
        endTrigger: "#container",
<<<<<<< Updated upstream
        end: "2000rem",
        // markers: true,
=======
        end: "1900rem",
        markers: true,
>>>>>>> Stashed changes
        ease: "none",
      });
    });
  }, []);

  return (
    <>
      <div id="EVENT"></div>
      <div id="events">
        <h1 className="event-title">EVENTS</h1>
      </div>
      <div className="events-container">
        <div className="container" id="container">
          <div className="cards">
            <div className="card" style={{ border: "3px solid #061E9C " }}>
              <div className="sphere">
                <img srcSet={assets.eOne} />
              </div>
              <div className="card-content">
                <a href="/gallery">
                  <p id="space">INNOVATION & COLLABORATION</p>
                  <h1 id="head" className="event-name">
                    <span>Hack</span>BMU
                  </h1>
                  <p>HACKATHON</p>
                </a>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.eOne} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #ECB74C " }}>
              <div className="sphere">
                <img srcSet={assets.eTwo} />
              </div>
              <div className="card-content">
                <a href="/gallery">
                  <p id="space">APP BUILDING ART</p>
                  <h1 id="head" className="event-name">
                    <span id="spanTwo"> FLUTTER</span>
                  </h1>
                  <p>WORKSHOP</p>
                </a>
              </div>
              <div className="sphere downward ">
                <img srcSet={assets.eTwo} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #7DD8CD " }}>
              <div className="sphere">
                <img srcSet={assets.eThree} />
              </div>
              <div className="card-content">
                <a href="/gallery">
                  <p id="space">OPEN SOURCE INNOVATION</p>
                  <h1 id="headtwo" className="event-name">
                    <span id="spanThree">HACKTOBER</span>FEST
                  </h1>
                  <p>GITHUB WORKSHOP</p>
                </a>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.eThree} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #E0FF57 " }}>
              <div className="sphere">
                <img srcSet={assets.eFour} />
              </div>
              <div className="card-content">
                <a href="/gallery">
                  <p id="space">FUTURE OF WEB DEV</p>
                  <h1 id="head" className="event-name">
                    <span id="spanFour">WEB</span>FORGE
                  </h1>
                  <p>HANDSON EXPERIENCE</p>
                </a>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.eFour} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #7DD8CD " }}>
              <div className="sphere">
                <img srcSet={assets.eThree} />
              </div>
              <div className="card-content">
                <a href="/gallery">
                  <p id="space">DEVELOPMENT</p>
                  <h1 id="head" className="event-name">
                    <span id="spanThree">DEVOPS</span>
                  </h1>
                  <p>AGILE EXPERIENCE</p>
                </a>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.eThree} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
