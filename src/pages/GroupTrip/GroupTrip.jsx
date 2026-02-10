import React, { useEffect, useState } from "react";
import styles from "./GroupTrip.module.css";
import { useNavigate } from "react-router-dom";
import { fetchDestinations } from "../../services/destinationService";

// hardcoded images
import japan from "../../assets/images/cherryjapan.jpg";
import korea from "../../assets/images/korea.png";
import japantwo from "../../assets/images/cherrykorea.jpg";

/* =========================
   HARD CODED TRIPS (SAFE)
========================= */
const journeys = [
  {
    location: "Cherry Blossom Japan",
    date: "24th March- 2nd April 2026",
    code: "NRT",
    page: "/konichiwaa-japan-24th-2nd-april",
    image: japan,
  },
  {
    location: "Japan",
    date: "15th May-24th May, 2026",
    code: "NRT",
    page: "/konichiwaa-japan-15th-may",
    image: korea,
  },
  {
    location: "Cherry Blossom Korea",
    date: "2nd April-10th April, 2026",
    code: "ICN",
    page: "/southkorea-2nd-10th-april",
    image: japantwo,
  },
];

const GroupTrip = () => {
  const navigate = useNavigate();

  /* =========================
     DYNAMIC TRIPS STATE
  ========================= */
  const [dynamicTrips, setDynamicTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations()
      .then((data) => {
        setDynamicTrips(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  //  if (loading) return <p className="text-center"   style={{ marginTop: "90px" }}>Loading trips...</p>;

  return (
      <section className={styles.section}>

      {/* ================= SLIDER (HARDCODED) ================= */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {journeys.map((item, index) => (
            <div
              key={index}
              className={styles.ticketCard}
              onClick={() => navigate(item.page)}
            >
              <div className={styles.ticketTop}>
                {item.location}
                <br />
                {item.date}
              </div>

              <div className={styles.ticketImage}>
                <img src={item.image} alt={item.location} />
              </div>

              <div className={styles.ticketBottom}>
                <div className={styles.ticketBottomInner}>
                  <span className={styles.airportCode}>{item.code}</span>
                  <div className={styles.barcode}></div>
                </div>
                <button className={styles.exploreBtn}>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DYNAMIC TRIPS (BELOW SLIDER) ================= */}
      <div className={styles.dynamicTrips}>
        {dynamicTrips.map((item) => (
          <div
            key={item.id}
            className={styles.ticketCard}
            onClick={() => navigate(`/destinations/${item.slug}`)}
          >
            <div className={styles.ticketTop}>
              {item.title}
              <br />
              {item.travel_date}
            </div>

            <div className={styles.ticketImage}>
              <img src={item.thumbnail_url} alt={item.title} />
            </div>

            <div className={styles.ticketBottom}>
              <div className={styles.ticketBottomInner}>
                <span className={styles.airportCode}>{item.code}</span>
                <div className={styles.barcode}></div>
              </div>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default GroupTrip;
