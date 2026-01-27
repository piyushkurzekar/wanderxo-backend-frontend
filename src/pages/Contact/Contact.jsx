import React from 'react'
// import Contact from '../../components/PreFooterContact/PreFooterContact'
import PreFooterContact from '../../components/PreFooterContact/PreFooterContact'
import Contactban from '../../assets/images/contactban.jpg'
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.overlay}></div>
      </div>
      <div>
        <PreFooterContact />
      </div>
    </div>
  )
}

export default Contact