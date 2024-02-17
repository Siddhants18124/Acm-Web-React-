import React, { useEffect } from 'react';
import './Events.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Events() {
  useGSAP(() => {
    const colors = ['#061E9C', '#ECB74C', '#7DD8CD', '#E0FF57', '#7DD8CD'];
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      const rotationAngle = index % 2 === 0 ? -5 : 5;

      gsap.to(card, {
        boxShadow: `0px 0px 100px 60px ${colors[index]}`, // Use color from the array for box shadow
        rotation: rotationAngle,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=50`,
          end: () => `+=100%`,
          scrub: true,
          onUpdate: (self) => {
            const boxShadowOpacity = 1 - self.progress * 1; // Fade out the box shadow box-shadow: 0px 0px 250px 60px #061E9C;
            gsap.set(card, { boxShadow: `0px 0px 100px 60px rgba(${colors[index]}, ${boxShadowOpacity})` });
          },
        },
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top-=150",
        pin: true,
        pinSpacing: false,
        endTrigger: "#container",
        end: "1900rem",
        markers: true,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className='events-container'>
      <div className='container' id="container">
        <div className='cards'>
          <div className='card' style={{ border: "3px solid #061E9C " }}>
            <h1>01</h1>
          </div>
          <div className='card' style={{ border: "3px solid #ECB74C " }}>
            <h1>02</h1>
          </div>
          <div className='card' style={{ border: "3px solid #7DD8CD " }}>
            <h1>03</h1>
          </div>
          <div className='card' style={{ border: "3px solid #E0FF57 " }}>
            <h1>04</h1>
          </div>
          <div className='card' style={{ border: "3px solid #7DD8CD " }}>
            <h1>05</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
