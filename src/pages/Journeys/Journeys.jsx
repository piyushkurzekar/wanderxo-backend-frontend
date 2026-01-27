import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Journeys.module.css';

const journeyData = [
  {
    id: 'japan-one',
    title: 'Japanese Heritage',
    duration: '10 Days',
    price: '$2,499',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    path: '/konichiwaa-japan-24th-2nd-april'
  },
  {
    id: 'japan-two',
    title: 'Tokyo & Beyond',
    duration: '8 Days',
    price: '$1,999',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    path: '/konichiwaa-japan-15th-may'
  },
  {
    id: 'korea-one',
    title: 'Seoul Discovery',
    duration: '7 Days',
    price: '$1,799',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
    path: '/southkorea-2nd-10th-april'
  }
];

const Journeys = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>Our Curated Trips</span>
          <div className={styles.lineRight} />
        </div>
        <h1 className={styles.heading}>Epic Journeys Await</h1>
        <p className={styles.subtext}>
          Explore our handpicked selection of itineraries designed for the modern explorer.
        </p>
      </header>

      <div className={styles.grid}>
        {journeyData.map((trip) => (
          <div
            key={trip.id}
            className={styles.card}
            onClick={() => navigate(trip.path)}
          >
            <div className={styles.imageWrapper}>
              <img src={trip.image} alt={trip.title} />
              <div className={styles.priceTag}>{trip.price}</div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.duration}>{trip.duration}</span>
              <h3>{trip.title}</h3>
              <button className={styles.exploreBtn}>
                View Itinerary
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journeys;