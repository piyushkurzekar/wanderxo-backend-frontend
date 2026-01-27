import React from "react";
import styles from "./Specializations.module.css";
import {
  LuUsers,
  LuPartyPopper,
  LuCrown,
  LuHeart,
  LuSlidersHorizontal,
} from "react-icons/lu";

const specializations = [
  {
    title: "Group Trips",
    text: "Join a group of like-minded travelers and explore the world together, even if you’re traveling solo.",
    icon: <LuUsers />,
  },
  {
    title: "Bachelorette Trips",
    text: "Celebrate in style with unforgettable experiences, luxury stays, and curated party moments.",
    icon: <LuPartyPopper />,
  },
  {
    title: "Luxury Girls-Only Trips",
    text: "Premium travel experiences designed exclusively for women who love comfort and connection.",
    icon: <LuCrown />,
  },
  {
    title: "Baecations",
    text: "Romantic getaways crafted for couples looking to reconnect and create memories together.",
    icon: <LuHeart />,
  },
  {
    title: "Customized Packages",
    text: "Travel your way. Choose your pace, budget, and preferences — we handle the planning.",
    icon: <LuSlidersHorizontal />,
  },
];

const Specializations = () => {
  return (
    <section className={styles.section}>
      <span className={styles.label}>What We Specialize In</span>

      <h2 className={styles.heading}>
        Travel experiences designed
        <br />
        for every kind of traveler.
      </h2>

      <div className={styles.grid}>
        {specializations.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <button className={styles.cta}>Learn More</button>
      </div>
    </section>
  );
};

export default Specializations;
