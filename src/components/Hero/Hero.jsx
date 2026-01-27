import React, { useState } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

import video1 from "../../assets/videos/hero-vid-1.mp4";
import home from "../../assets/images/herobg.jpeg";
// import video2 from "../../assets/videos/hero-vid-2.mp4";
// import video3 from "../../assets/videos/hero-vid-3.mp4";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const slides = [
    {
        id: 1,
        video: video1,
        cinematic: true,
        words: [
            {
                text: "Come",
                size: "lg",
                tone: "dark",
                x: "6%",
                y: "20%"
            }, {
                text: "solo ,",
                size: "lg",
                tone: "dark",
                x: "18%",
                y: "20%"
            },
            {
                text: "leave",
                size: "lg",
                tone: "dark",
                x: "6%",
                y: "30%"
            },
            {
                text: "with",
                size: "lg",
                tone: "dark",
                x: "17%",
                y: "30%"
            },
            {
                text: "travel",
                size: "lg",
                tone: "dark",
                x: "27%",
                y: "30%"
            }, {
                text: "Besties",
                size: "lg",
                tone: "dark",
                x: "6%",
                y: "42%"
            },
        ],

        primaryCta: "Explore Group Trips",
        secondaryCta: "Plan a Private Trip"
    },
    // {
    //     id: 2,
    //     video: video2,
    //     heading: "Design Your Perfect Journey",
    //     text: "Customized trips designed exactly the way you want.",
    //     primaryCta: "Customize Trip",
    //     secondaryCta: "Talk to Expert"
    // }, {
    //     id: 3,
    //     video: video3,
    //     heading: "Unforgettable Travel Experiences",
    //     text: "From mountains to beaches, we take you everywhere.",
    //     primaryCta: "View Packages",
    //     secondaryCta: "Contact Us"
    // }
];

const Hero = () => {
    const [activeIndex,
        setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => prev === 0
            ? slides.length - 1
            : prev - 1);
    };

    const cinematicRef = useRef([]);
    useEffect(() => {
        if (!slides[activeIndex]
            ?.cinematic)
            return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tl.fromTo(cinematicRef.current, {
            opacity: 0,
            y: 40,
            filter: "blur(6px)"
        }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.25,
            duration: 1.2,
            ease: "power3.out"
        })
            // HOLD (sentence visible)
            .to({}, { duration: 2.5 })
            // FADE OUT
            .to(cinematicRef.current, {
                opacity: 0,
                y: -40,
                filter: "blur(6px)",
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.in"
            });

        return () => tl.kill();
    }, [activeIndex]);

    return (
        <section className={styles.hero}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === activeIndex
                        ? styles.active
                        : ""}`}>
                    <img
                        src={home}
                        alt="Hero background"
                        className={styles.image}
                    />


                    <div className={styles.overlay}></div>

                    {slide.cinematic
                        ? (
                            <React.Fragment>
                                <div className={styles.cinematicWrapper}>
                                    <div className={styles.cinematicLayer}>
                                        <div className={styles.textContainer}>
                                            {slide
                                                .words
                                                .map((word, i) => (
                                                    <span
                                                        key={i}
                                                        ref={(el) => (cinematicRef.current[i] = el)}
                                                        className={`${styles.word} ${styles[word.size]} ${styles[word.tone]}`}
                                                        style={{
                                                            left: word.x,
                                                            top: word.y
                                                        }}>
                                                        {word.text}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>


                                    {/* CTA CENTER BOTTOM */}
                                    <div className={styles.bottomCTA}>
                                        <Link className to="/grouptrip">
                                            <button className="btn btn-light px-4">
                                                {slide.primaryCta}
                                            </button>
                                        </Link>
                                        <Link className to="/plan-your-trip">
                                            <button style={{ border: "1px solid white" }} className="btn btn-outline-light px-4">
                                                {slide.secondaryCta}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                        : (
                            <div className={styles.content}>
                                <h1 className={styles.heading}>{slide.heading}</h1>
                                <p className={styles.text}>{slide.text}</p>

                                <div className={styles.ctaGroup}>
                                    <button className="btn btn-light px-4">
                                        {slide.primaryCta}
                                    </button>
                                    <button className="btn btn-outline-light px-4">
                                        {slide.secondaryCta}
                                    </button>
                                </div>
                            </div>
                        )}

                </div>
            ))}



            {/* Dots */}
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === activeIndex
                            ? styles.activeDot
                            : ""}`}
                        onClick={() => setActiveIndex(index)}></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
