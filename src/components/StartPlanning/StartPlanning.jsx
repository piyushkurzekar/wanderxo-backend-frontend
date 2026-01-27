import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./StartPlanning.module.css";

const StartPlanning = () => {
  const [hovered, setHovered] = useState(null); // "left" | "right" | null

  return (
    <section className={styles.wrapper}>
      {/* HEADING – OUTSIDE IMAGE */}
      <div className={styles.header}>
        {/* EYEBROW */}
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>Start Planning</span>
          <span className={styles.lineRight}></span>
        </div>
        <h2 className={styles.heading}>
          Travel That Fits You — <br /> Not the Other Way Around
        </h2>
      </div>

      {/* IMAGE / INTERACTIVE SECTION */}
      <div
        className={`${styles.interactive} ${hovered === "left"
            ? styles.bgLeft
            : hovered === "right"
              ? styles.bgRight
              : styles.bgDefault
          }`}
      >
        {/* LEFT */}
        <div
          className={styles.side}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`${styles.overlay} ${hovered === "left" ? styles.show : ""
              }`}
          />

          <div className={styles.circle}>
            <h3 className={hovered === "left" ? styles.shiftUp : ""}>
              Design Your Own Trip
            </h3>

            <div
              className={`${styles.content} ${hovered === "left" ? styles.show : ""
                }`}
            >
              <p>
                Choose destinations, pace, and experiences that match your
                style. We handle the rest.
              </p>
              <Link to="/plan-your-trip">
                <button>Build Your Journey</button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={styles.side}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`${styles.overlay} ${hovered === "right" ? styles.show : ""
              }`}
          />

          <div className={styles.circle}>
            <h3 className={hovered === "right" ? styles.shiftUp : ""}>
              Explore Signature Journeys
            </h3>

            <div
              className={`${styles.content} ${hovered === "right" ? styles.show : ""
                }`}
            >
              <p>
                Handpicked itineraries loved by travelers — ready when you are.
              </p>
              <Link to="/grouptrip">
                <button>View Journeys</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartPlanning;
