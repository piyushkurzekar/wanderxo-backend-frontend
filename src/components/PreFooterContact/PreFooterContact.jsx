import React, { useState } from "react";
import styles from "./PreFooterContact.module.css";
import { LuPlus, LuMinus } from "react-icons/lu";

const faqs = [
    {
        question: "Design Your Own Trip",
        answer: "Create a journey that matches your pace, preferences, and travel style. From des" +
            "tinations to experiences, we tailor everything for you."
    }, {
        question: "Explore Signature Journeys",
        answer: "Choose from thoughtfully designed itineraries loved by travelers and ready to bo" +
            "ok."
    }, {
        question: "Travel Support & Assistance",
        answer: "Our team is available before, during, and after your trip to ensure a smooth exp" +
            "erience."
    }
];

const PreFooterContact = () => {
    const [active, setActive] = useState(null);
    const [firstName,
        setFirstName] = useState("");
    const [helpType,
        setHelpType] = useState("");
    const [email,
        setEmail] = useState("");
    const [phone,
        setPhone] = useState("");
    const [subject,
        setSubject] = useState("");
    const [message,
        setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

   const handleGmailSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    firstName,
    helpType,
    email,
    phone,
    subject,
    message,
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzn-SW-FRUCL94Lkn1r7LRpjjQWPm8HEnWlFJOxR8-kDVqbF4On7wm13mea1csBdWcy/exec", {
      method: "POST",
    //   headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
    //   alert("Your enquiry has been sent successfully!");
      setIsSubmitted(true);
      setFirstName("");
      setHelpType("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Failed to send. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  }
};


    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>

                <div className={styles.faq}>
                    {faqs.map((item, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqHeader}
                                onClick={() => setActive(active === index
                                    ? null
                                    : index)}>
                                <span>{item.question}</span>
                                {active === index
                                    ? <LuMinus />
                                    : <LuPlus />}
                            </button>
                            <div
                                className={`${styles.faqBody} ${active === index
                                    ? styles.open
                                    : ""}`}>
                                <p className={styles.faqContent}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.contact}>
                    <span className={styles.eyebrow}>Contact Us</span>
                    <h3 className={styles.heading}>Keep In Touch</h3>

                    <form className={styles.form} onSubmit={handleGmailSubmit}>
                        <input
                            type="text"
                            required
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                        <input
                            type="text"
                            placeholder="How Can we Help you?"
                            value={helpType}
                            onChange={(e) => setHelpType(e.target.value)} />
                        <input
                            type="email"
                            required
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type="tel"
                            required
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                        <input
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)} />
                        <textarea
                            required
                            placeholder="Your Message"
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />

                        <button type="submit" disabled={isSubmitted}>{isSubmitted ? "Submitted" : "Submit"}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PreFooterContact;
