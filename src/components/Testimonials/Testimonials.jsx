import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { LuStar } from "react-icons/lu";

import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";

const testimonials = [
  {
    name: "Ishin Korma",
    place: "Paris, France",
    quote:
      "Traveling with Wander XO felt effortless. Every moment was thoughtfully planned, yet never rushed.",
    rating: 5,
    avatar: user1,
  },
  {
    name: "Victoria Wotton",
    place: "Ubud, Bali",
    quote:
      "This was not just a vacation — it was a reset. Calm, flow, and beautiful attention to detail.",
    rating: 5,
    avatar: user2,
  },
  {
    name: "Daniel Moore",
    place: "Kyoto, Japan",
    quote:
      "Authentic, grounded, and deeply personal. I discovered places I would’ve never found alone.",
    rating: 5,
    avatar: user3,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleAvatarClick = (index) => {
    if (index === active) return;
    setDirection(index > active ? "right" : "left");
    setActive(index);
  };

  const current = testimonials[active];

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Testimonials</span>
        <h2 className={styles.heading}>Voices From The Journey</h2>
      </div>

      <div className={styles.content}>
        {/* AVATARS */}
        <div className={styles.avatarRail}>
          {testimonials.map((item, index) => (
            <button
              key={index}
              className={`${styles.avatarBtn} ${
                index === active ? styles.active : ""
              }`}
              onClick={() => handleAvatarClick(index)}
            >
              <img src={item.avatar} alt={item.name} />
            </button>
          ))}
        </div>

        {/* TESTIMONIAL */}
        <div className={styles.testimonialWrapper}>
          <div
            key={active}
            className={`${styles.testimonial} ${
              direction === "right"
                ? styles.slideFromRight
                : styles.slideFromLeft
            }`}
          >
            <p className={styles.quote}>“{current.quote}”</p>

            <div className={styles.stars}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <LuStar key={i} />
              ))}
            </div>

            <div className={styles.author}>
              <strong>{current.name}</strong>
              <span>{current.place}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
