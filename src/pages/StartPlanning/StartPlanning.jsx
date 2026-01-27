import React from 'react';
import styles from './StartPlanning.module.css';

const StartPlanning = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrow}>Start Your Adventure</span>
            <div className={styles.lineRight} />
          </div>
          <h1 className={styles.heading}>Design Your Own Journey</h1>
          <p className={styles.subtext}>
            Whether you want a private tour, a corporate retreat, or a custom itinerary, we're here to make it happen.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.formSection}>
          <h2>Tell Us About Your Trip</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Destination</label>
                <select>
                  <option>Select Destination</option>
                  <option>Japan</option>
                  <option>South Korea</option>
                  <option>Thailand</option>
                  <option>Vietnam</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Group Size</label>
                <input type="number" placeholder="Number of people" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Tell us more about your preferences</label>
              <textarea placeholder="Tell us what you're looking for..."></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Inquiry</button>
          </form>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>✨</div>
            <h3>Expert Guidance</h3>
            <p>Our local experts will help you craft the perfect itinerary tailored to your interests.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.icon}>🛡️</div>
            <h3>Safe & Secure</h3>
            <p>Your safety and privacy are our top priorities throughout the entire planning process.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.icon}>💖</div>
            <h3>Personalized Touch</h3>
            <p>We believe every journey should be as unique as the explorer embarking on it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPlanning;