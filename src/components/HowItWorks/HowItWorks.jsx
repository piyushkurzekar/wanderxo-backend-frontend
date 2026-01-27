import React from "react";
import styles from "./HowItWorks.module.css";

import step1 from "../../assets/images/japan.jpg";
import step2 from "../../assets/images/paris.jpg";
import step3 from "../../assets/images/switzerland.jpg";

const steps = [
  {
    image: step1,
    count: "1 / 3",
    title: "Choose Your Destination",
    text: "Browse curated trips or customize your own journey based on your travel style, pace, and budget.",
  },
  {
    image: step2,
    count: "2 / 3",
    title: "Reserve Your Spot",
    text: "Secure your trip with a small deposit or flexible payment option — no pressure, no hidden fees.",
  },
  {
    image: step3,
    count: "3 / 3",
    title: "Pack & Take Off",
    text: "We handle the planning. You connect with fellow travelers and get ready to explore.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>How It Works</span>
          <span className={styles.lineRight}></span>
        </div>

        <h2 className={styles.heading}>
          Book Your Next Trip <br /> in Just 3 Simple Steps
        </h2>

        <p className={styles.subtext}>
          Thoughtfully designed journeys that are easy to book and effortless to enjoy.
        </p>
      </div>

      {/* STEPS – NORMAL STACK */}
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.leftImage}>
              <img src={step.image} alt={step.title} />
            </div>

            <div className={styles.rightContent}>
              <div className={styles.barcodeContainer}>
                <div className={styles.barcode}></div>
              </div>

              <div className={styles.stepCount}>{step.count}</div>

              <div className={styles.textBlock}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
