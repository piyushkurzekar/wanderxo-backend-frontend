import React from "react";
import styles from "./PopularDestinations.module.css";

import maldives from "../../assets/images/maldives.jpg";
import japan from "../../assets/images/japan.jpg";
import egypt from "../../assets/images/egypt.jpg";
import switzerland from "../../assets/images/switzerland.jpg";
import bali from "../../assets/images/bali.jpg";
import dubai from "../../assets/images/dubai.jpg";
import southAfrica from "../../assets/images/south-africa.jpg";
import paris from "../../assets/images/paris.jpg";

const highlights = [
  "Traveler favorites",
  "Multiple departures",
  "All travel styles",
  "Expert-curated trips",
  
];

const destinations = [
  {
    title: "Maldives Explorer",
    availability: "Seasonal departures",
    image: maldives,
    tags: ["Luxury", "Beach", "Paradise"],
  },
  {
    title: "Japan Escape",
    availability: "Available all year",
    image: japan,
    tags: ["Culture", "Technology", "Nature"],
  },
  {
    title: "Egypt Highlights",
    availability: "Limited departures",
    image: egypt,
    tags: ["History", "Culture", "Multi-city"],
  },
  {
    title: "Swiss Alps Getaway",
    availability: "Best from December to March",
    image: switzerland, // add image
    tags: ["Mountains", "Snow", "Scenic"],
  },
  {
    title: "Bali Island Retreat",
    availability: "Available all year",
    image: bali, // add image
    tags: ["Nature", "Wellness", "Culture"],
  },
  {
    title: "Dubai City Break",
    availability: "Best from October to April",
    image: dubai, // add image
    tags: ["Luxury", "Shopping", "Modern"],
  },
  {
    title: "South Africa Adventure",
    availability: "Seasonal departures",
    image: southAfrica, // add image
    tags: ["Wildlife", "Adventure", "Nature"],
  },
  {
    title: "Paris Classics",
    availability: "Limited departures",
    image: paris, // add image
    tags: ["Culture", "Architecture", "Romantic"],
  },
];


const PopularDestinations = () => {
  return (
    <section className={`${styles.section} container-fluid`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <span className={styles.label}>Popular Destinations</span>

          <h2 className={styles.heading}>
            Top destinations travelers
            <br />
            can’t stop talking about.
          </h2>

          <p className={styles.text}>
            From iconic landmarks to unforgettable experiences, explore
            destinations that are trending among our travelers across seasons
            and travel styles.
          </p>
        </div>

        {/* <div className={styles.right}>
          {highlights.map((item, index) => (
            <span key={index} className={styles.pill}>
              {item}
            </span>
          ))}
        </div> */}
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        {destinations.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} />

            <div className={styles.overlay}>
              <div className={styles.tags}>
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className={styles.info}>
                <p>{item.availability}</p>
                <h4>{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={styles.ctaWrapper}>
        <button className={styles.cta}>
          Explore All Destinations
        </button>
      </div>
    </section>
  );
};

export default PopularDestinations;
