import React from "react";
import styles from "./PopularJourneys.module.css";
import { useNavigate } from "react-router-dom";

import japan from "../../assets/images/cherryjapan.jpg";
import shibuya from "../../assets/images/cherrykorea.jpg";
import korea from "../../assets/images/korea.png";
import { LuArrowRight } from "react-icons/lu";

const journeys = [
  {
    location: "Cherry Blossom JAPAN",
    date: "24th March- 2nd April 2026",
    code: "NRT",
    page: "/konichiwaa-japan-24th-2nd-april",
    image: japan,
  },
  {
    location: "JAPAN",
    date: "15th May-24th May, 2026",
    code: "SHB",
    page: "/konichiwaa-japan-15th-may", // same trip for now
    image: korea,
  },
  {
    location: "Cherry Blossom KOREA",
    date: "2nd April-10th April, 2026",
    code: "ICN",
    page: "/southkorea-2nd-10th-april",
    image: shibuya,
  },

  // Future destinations (commented as requested)
  /*
  {
    location: "PARIS · FRANCE",
    code: "CDG",
    image: france,
    page: "/trips/paris",
  },
  {
    location: "BALI · INDONESIA",
    code: "DPS",
    image: bali,
    page: "/trips/bali",
  },
  {
    location: "DUBAI · UAE",
    code: "DXB",
    image: dubai,
    page: "/trips/dubai",
  },
  */
];

const PopularJourneys = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>

      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.eyebrowWrapper}>
          {/* <span className={styles.eyebrow}>Popular Journeys</span>
          <span className={styles.lineRight}></span> */}
        </div>

        <h2 className={styles.heading}>Group Trips</h2>

        <p className={styles.subheading}>

          ✔️ Curated itineraries  ✔️ Premium stays  ✔️ Like-minded travelers</p>
      </div>

      {/* CAROUSEL */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {[...journeys, ...journeys].map((item, index) => (
            <div
              className={styles.ticketCard}
              key={index}
              onClick={() => navigate(item.page)}
            >
              {/* TOP */}
              <div className={styles.ticketTop}>{item.location}<br /> {item.date}</div>

              {/* IMG */}
              <div className={styles.ticketImage}>
                <img src={item.image} alt={item.location} />
              </div>

              {/* BOTTOM */}
              <div className={styles.ticketBottom}>
                <div className={styles.ticketBottomInner}>
                  <span className={styles.airportCode}>{item.code}</span>
                  <div className={styles.barcode}></div>
                </div>

                {/* CTA */}
                <button className={styles.exploreBtn}>
                  Explore
                  <span className={styles.arrow}>
                    <LuArrowRight
                      fontSize={18}
                      style={{
                        padding: "2px",
                        color: "#fff",
                        background: "#000000ff",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularJourneys;
