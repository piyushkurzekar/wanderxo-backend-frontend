import React from 'react'
import styles from "./PlanYourTrip.module.css";
import InquiryForm from '../../components/InquiryForm';

const PlanYourTrip = () => {

  return (
    <>
      <div className={styles.top}>
        <div className={styles.para}>
          <div className={styles.text}>
            Customized Trip Planning </div>
          <p className={styles.one}>We don’t sell what pays us the most — we design what suits you the best.
            No templates. No generic hotel lists. No commission-driven nonsense.

            Customization? Always complimentary.</p>
          <p className={styles.two}>
            Because personalisation isn’t a “feature” — it’s the bare minimum.
          </p>
          <p className={styles.three}>
            What’s included<br></br>

            • Bespoke, day-by-day itinerary designed like couture<br></br>
            • Handpicked hotels & experiences vetted for luxury + vibes<br></br>
            • Transparent pricing — no hidden markups<br></br>
            • Unlimited refinements until it feels ✨ just right
          </p>
          <p className={styles.four}>
            You dream it.
            We design it.
            You take off.


          </p>

        </div>
        <div className={styles.box}></div>
        <div className={styles.side}>
        </div>



      </div>
      <div>
        <InquiryForm />
      </div>

    </>
  )
}

export default PlanYourTrip
