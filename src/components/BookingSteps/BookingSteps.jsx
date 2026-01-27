import React from "react";
import styles from "./BookingSteps.module.css";

import img1 from "../../assets/images/bali.jpg";
import img2 from "../../assets/images/paris.jpg";
import img3 from "../../assets/images/egypt.jpg";

const steps = [
  {
    step: "01",
    title: "Choose or Customize",
    text: "Pick a trip that fits your travel style, or work with us to design something uniquely yours.",
  },
  {
    step: "02",
    title: "Plan with an Expert",
    text: "Our travel experts help you with planning, guidance, and everything you need before departure.",
  },
  {
    step: "03",
    title: "Travel with Confidence",
    text: "Meet your group, connect with locals, and enjoy a smooth, well-managed travel experience.",
  },
];

const BookingSteps = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>

        {/* Left – Image Collage */}
        <div className={styles.collage}>
          <img src={img1} alt="Travel experience" className={styles.imgLarge} />
          <img src={img2} alt="Destination view" className={styles.imgTop} />
          <img src={img3} alt="Group travel" className={styles.imgBottom} />
        </div>

        {/* Right – Content */}
        <div className={styles.content}>
          <span className={styles.label}>How It Works</span>

          <h2 className={styles.heading}>
            Plan your journey in
            <br />
            three simple steps.
          </h2>

          <div className={styles.steps}>
            {steps.map((item, index) => (
              <div key={index} className={styles.step}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;
