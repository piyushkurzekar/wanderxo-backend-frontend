import React from "react";
import styles from "./Difference.module.css";
import centerImage from "../../assets/images/difference.jpg";

import {
  LuWallet,
  LuMapPin,
  LuUsers,
  LuBadgePercent,
  LuNotebookText,
  LuMapPinPlus,
} from "react-icons/lu";

const features = [
  {
    title: "Come Solo , Never Feel Alone",
    text: "Our trips attract like-minded people. Most travellers join solo and leave with lifelong friends.",
    icon: <LuUsers />,
  },
  {
    title: "Expertly Planned Itineraries",
    text: "Every trip is crafted by travel experts with deep destination knowledge.",
    icon: <LuNotebookText />,
  },
  {
    title: "Curated Luxury",
    text: "Stay in beautiful stays, travel in comfort, and enjoy premium experiences — without the stress of planning.",
    icon: <LuMapPinPlus />,
  },
  {
    title: "Local Guides + Trip Host",
    text: "Enjoy insider access, smooth logistics, and a dedicated host on every group trip.",
    icon: <LuMapPin />,
  },
  {
    title: "Flexible Payment Plans",
    text: "Pay 20% down to reserve your spot & the rest can be paid in parts based on the payment plan you select.",
    icon: <LuWallet />,
  },
  {
    title: "Instagram-worthy Experiences",
    text: "From hidden gems to iconic moments — your trip will look as good as it feels.",
    icon: <LuBadgePercent />,
  },
];

const Difference = () => {
  return (
    <section className={styles.section}>
      {/* Eyebrow */}
      <div className={styles.eyebrowWrapper}>
        <span className={styles.lineLeft}></span>
        <span className={styles.eyebrow}>Our Advantages</span>
        <span className={styles.lineRight}></span>
      </div>

      <h2 className={styles.heading}>Why book with us?</h2>

      <p className={styles.subtext}>
        Your only job is to look good in the photos — we handle the rest.
      </p>

      {/* Circular Layout */}
      <div className={styles.circleWrapper}>
        {/* Center Image */}
        <div className={styles.centerImage}>
          <img src={centerImage} alt="Designed travel experience" />
        </div>

        {features.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`pos${index}`]}`}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Difference;
