import React, { useEffect, useRef, useState } from "react";
import styles from "./TravelStats.module.css";

const stats = [
  {
    value: 42,
    suffix: "+",
    label: "Countries Reached",
    description: "Across 5 continents and growing every year",
  },
  {
    value: 8500,
    suffix: "+",
    label: "Happy Travelers",
    description: "Journeys designed with care and intention",
  },
  {
    value: 120,
    suffix: "+",
    label: "Curated Experiences",
    description: "Thoughtfully crafted itineraries",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Because details truly matter",
  },
];

const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1400;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(startValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const TravelStats = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* HEADER */}
      <div className={styles.header}>
       {/* EYEBROW */}
      <div className={styles.eyebrowWrapper}>
        <span className={styles.eyebrow}>Our Impact</span>
        <span className={styles.lineRight}></span>
      </div>
        <h2 className={styles.heading}>
          Travel, measured <br /> by moments that matter
        </h2>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        {stats.map((item, index) => (
          <div className={styles.statCard} key={index}>
            <h3>
              <Counter
                value={item.value}
                suffix={item.suffix}
                start={inView}
              />
            </h3>
            <strong>{item.label}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStats;
