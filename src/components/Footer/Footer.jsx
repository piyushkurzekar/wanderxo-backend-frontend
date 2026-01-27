import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import { LuArrowUpRight, LuPhone, LuMail } from "react-icons/lu";
import logo from "../../assets/images/Wanders-XO-Logo.png"
import img1 from "../../assets/images/paris.jpg";
import img2 from "../../assets/images/japan.jpg";
import img3 from "../../assets/images/bali.jpg";
import img4 from "../../assets/images/dubai.jpg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>

                {/* BRAND */}
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img height={50} src={logo} alt="LOGO" />
                    </div>
                    <h3>Wander XO</h3>
                    <p>
                        Thoughtfully designed journeys, built for people who value experience over
                        itineraries.
                    </p>

                    <div className={styles.socials}>
                        <span><a href="https://facebook.com/wanderxo">FACEBOOK</a></span>
                        <span><a href="https://www.instagram.com/wanderxo_/">INSTAGRAM</a></span>
                    </div>
                </div>

                {/* LINKS */}
                <div className={styles.links}>
                    <ul>
                        <li><LuArrowUpRight />
                            <Link to="/grouptrip">Group Trips</Link>
                        </li>
                        <li><LuArrowUpRight />
                            <Link to="/plan-your-trip">
                                Plan Your Trip
                            </Link>
                        </li>
                        <li><LuArrowUpRight />
                            <Link to="/our-story">
                                About us
                            </Link></li>
                        <li><LuArrowUpRight />
                            <Link to="/faq">
                                FAQ
                            </Link></li>
                    </ul>

                    {/* <ul>
                        <li><LuArrowUpRight/>
                            Branding</li>
                        <li><LuArrowUpRight/>
                            Web & Interactive</li>
                        <li><LuArrowUpRight/>
                            Merchandise</li>
                        <li><LuArrowUpRight/>
                            Experiences</li>
                    </ul> */}

                    <ul>
                        <li><LuArrowUpRight />
                            <Link to="/our-story">
                                Our Story
                            </Link></li>
                        <li><LuArrowUpRight />
                            <Link to="/contact">
                                Contact
                            </Link></li>
                    </ul>
                </div>
            </div>

            {/* DIVIDER */}
            <div className={styles.divider} /> {/* BOTTOM */}
            <div className={styles.bottom}>
                {/* GALLERY */}
                <div className={styles.gallery}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>

                {/* NEWSLETTER */}
                <div className={styles.newsletter}>
                    <h4>Newsletter</h4>
                    <div className={styles.subscribe}>
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* CONTACT */}
                <div className={styles.contact}>
                    <p><LuPhone />
                        +91-9503-889-337</p>
                    <p><LuMail />
                        hi@wanderxo.com</p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className={styles.copyright}>
                © Copyright 2026. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;