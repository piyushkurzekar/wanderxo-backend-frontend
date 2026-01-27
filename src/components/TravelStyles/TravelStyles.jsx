import React from "react";
import styles from "./TravelStyles.module.css";

import adventure from "../../assets/images/egypt.jpg";
import wellness from "../../assets/images/maldives.jpg";
import culture from "../../assets/images/bali.jpg";
import nature from "../../assets/images/switzerland.jpg";

const stylesData = [
  {
    title: "Adventure",
    subtitle: "Thrill & Exploration",
    image: adventure,
    count: "12 journeys",
  },
  {
    title: "Wellness",
    subtitle: "Slow & Soulful",
    image: wellness,
    count: "8 journeys",
  },
  {
    title: "Culture",
    subtitle: "Heritage & Stories",
    image: culture,
    count: "15 journeys",
  },
  {
    title: "Nature",
    subtitle: "Landscapes & Escapes",
    image: nature,
    count: "10 journeys",
  },
];

const TravelStyles = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
         {/* EYEBROW */}
      <div className={styles.eyebrowWrapper}>
        <span className={styles.eyebrow}>Travel Styles</span>
        <span className={styles.lineRight}></span>
      </div>
          

          <h2 className={styles.heading}>
            Journeys shaped <br /> around how you feel
          </h2>

          <p className={styles.text}>
            Whether you crave adventure, seek calm, or want to immerse yourself
            in culture — our travel styles are designed to match your pace,
            mood, and mindset.
          </p>

          <button className={styles.cta}>Explore All Styles</button>
        </div>

        {/* RIGHT GRID */}
        <div className={styles.grid}>
          {stylesData.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} />

              <div className={styles.cardOverlay}>
                <span className={styles.count}>{item.count}</span>

                <div className={styles.cardText}>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStyles;
