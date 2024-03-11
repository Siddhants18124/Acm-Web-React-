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
        boxShadow: `0px 0px 100px 60px ${colors[index]}`,
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
              boxShadow: `0px 0px 100px 60px rgba(${colors[index]}, ${boxShadowOpacity})`,
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
        end: "2000rem",
        markers: true,
        ease: "none",
      });
    });
  }, []);

  return (
    <>
      <div id="events">
        <h1 className="event-title">EVENTS</h1>
      </div>
      <div className="events-container">
        <div className="container" id="container">
          <div className="cards">
            <div className="card" style={{ border: "3px solid #061E9C " }}>
              <div className="sphere">
                <img srcSet={assets.sphereBottomOne} />
              </div>
              <div className="card-content">
                <p id="space">INNOVATION & COLLABORATION</p>
                <h1 id="head" className="event-name">
                  <span>Hack</span>BMU
                </h1>
                <p>
                  <a href="hackbmu.in">HACKATHON</a>
                </p>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.sphereTopOne} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #ECB74C " }}>
              <div className="sphere">
                <img srcSet={assets.sphereBottomOne} />
              </div>
              <div className="card-content">
                <p id="space">APP BUILDING ART</p>
                <h1 id="head" className="event-name">
                  <span>FLUTTER</span>
                </h1>
                <p>WORKSHOP</p>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.sphereTopOne} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #7DD8CD " }}>
              <div className="sphere">
                <img srcSet={assets.sphereBottomOne} />
              </div>
              <div className="card-content">
                <p id="space">OPEN SOURCE INNOVATION</p>
                <h1 id="head" className="event-name">
                  <span>HACKTOBER</span>FEST
                </h1>
                <p>GITHUB WORKSHOP</p>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.sphereTopOne} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #E0FF57 " }}>
              <div className="sphere">
                <img srcSet={assets.sphereBottomOne} />
              </div>
              <div className="card-content">
                <p id="space">FUTURE OF WEB DEV</p>
                <h1 id="head" className="event-name">
                  <span>WEB</span>FORGE
                </h1>
                <p>HANDSON EXPERIENCE</p>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.sphereTopOne} />
              </div>
            </div>
            <div className="card" style={{ border: "3px solid #7DD8CD " }}>
              <div className="sphere">
                <img srcSet={assets.sphereBottomOne} />
              </div>
              <div className="card-content">
                <p id="space">DEVELOPMENT</p>
                <h1 id="head" className="event-name">
                  <span>DEVOPS</span>
                </h1>
                <p>AGILE EXPERIENCE</p>
              </div>

              <div className="sphere downward ">
                <img srcSet={assets.sphereTopOne} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
