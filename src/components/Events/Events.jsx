import React, { useEffect } from 'react'
import './Events.css'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Events() {

    useEffect(() => {
        const cards = gsap.utils.toArray(".card");

        cards.forEach((card, index) => {
            const tween = gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: () => `top bottom-=100`,
                    end: () => `top top+=80`, // Adjust this value accordingly
                    scrub: true,
                    markers: true,
                    invalidateOnRefresh: true,
                },
                ease: "none",
                scale: () => 1 - (cards.length - index) * 0.025,
            });
            

            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                pin: true,
                pinSpacing: false,
                markers: true,
                id: 'pin',
                end: () => `+=${card.offsetHeight}`, // Set end to the height of the card
                invalidateOnRefresh: true,
            });
            
        });

    }, [])

    return (
        <>
            <h1 className='event-head'>Events</h1>
            <div className="event-cont">
                <div className="event-cards-cont">
                    <div className="event-cards">
                        <div className='card'>Card 1</div>
                        <div className='card'>Card 2</div>
                        <div className='card'>Card 3</div>
                        <div className='card'>Card 4</div>
                        <div className='card'>Card 5</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events