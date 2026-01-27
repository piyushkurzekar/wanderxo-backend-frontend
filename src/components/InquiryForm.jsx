import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import { LuSend } from "react-icons/lu";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InquiryForm = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    details: "",
    budget: "",
    flyingFrom: "",
    nationality: "",
    stay: "",
    occasion: "",
    notes: "",
  });
  const isValidName = (v) => /^[A-Za-z\s]{2,}$/.test(v);
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isValidPhone = (v) => v && v.replace(/\D/g, "").length >= 10;

const [isSubmitted, setIsSubmitted] = useState(false);


 const handleSend = async (e) => {
  e.preventDefault();

  // 🔒 Frontend validation (CRITICAL)
  if (
    !isValidName(form.first) ||
    !isValidName(form.last) ||
    !isValidEmail(form.email) ||
    !isValidPhone(form.phone) ||
    !form.details ||
    !form.budget || Number(form.budget) <= 0 ||
    !form.flyingFrom ||
    !form.nationality ||
    !form.stay ||
    !form.occasion
  ) {
    alert("❌ Please fill all required fields with valid information.");
    return;
  }

  try {
    // ✅ Use FormData (prevents CORS + attacks)
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwPTZTGsIfBhPBeIuuTC87iVUs_7eTcV29JQTJyWsyONAVBIQQpjmomumh3ktoaPWA/exec",
      {
        method: "POST",
        body: formData, // ❗ NO JSON, NO HEADERS
      }
    );

    const result = await res.json();

    if (result.success) {
      // alert("✅ Inquiry sent successfully! We’ll get back to you shortly.");
      setIsSubmitted(true);


      setForm({
        first: "",
        last: "",
        phone: "",
        email: "",
        details: "",
        budget: "",
        flyingFrom: "",
        nationality: "",
        stay: "",
        occasion: "",
        notes: "",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("❌ Failed to send inquiry. Please try again.");
    }
  } catch (error) {
    alert("❌ Network error. Please try later.");
  }
};




  const handleCalendly = () => {
    window.location.href =
      "https://calendly.com/wanderxo/wander-xo-group-trip-inquiry?month=2026-01";
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>Travel Inquiry</span>
          <span className={styles.lineRight}></span>
        </div>
        <h2 className={styles.heading}>Plan Your Next Journey With Us</h2>
        <p className={styles.subtext}>
          Tell us a bit about your trip — we’ll craft a personalised itinerary just for you.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSend}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>First Name*</label>
            <input
              required
              value={form.first}
              onChange={(e) => setForm({ ...form, first: e.target.value })}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name*</label>
            <input
              required
              value={form.last}
              onChange={(e) => setForm({ ...form, last: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroupFull}>
            <label>Phone Number*</label>
            <PhoneInput
              defaultCountry="in"
              value={form.phone}
              onChange={(val) => setForm({ ...form, phone: val })}
              placeholder="WhatsApp Number preferred"
              inputProps={{ required: true }}
              className={styles.phoneField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email*</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Mention country, dates & number of people*</label>
          <textarea
            required
            rows={2}
            value={form.details}
            placeholder="Ex: japan, 5 nights, 3 persons"
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Budget in USD (per person, excluding flights)*</label>
            <input
              required
              type="number"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Flying From*</label>
            <input
              required
              placeholder="City / Country"
              value={form.flyingFrom}
              onChange={(e) => setForm({ ...form, flyingFrom: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Nationality*</label>
            <input
              required
              placeholder="Which passport do you hold?"
              value={form.nationality}
              onChange={(e) => setForm({ ...form, nationality: e.target.value })}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Preferred Accommodation*</label>
            <input
              required
              placeholder="3★ / 4★ / 5★ / Villas"
              value={form.stay}
              onChange={(e) => setForm({ ...form, stay: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Special Occasions*</label>
          <input
            required
            placeholder="Birthdays / Anniversaries / Bachelorette..."
            value={form.occasion}
            onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Anything else we should keep in mind?</label>
          <textarea
            rows={2}
            placeholder="Food preferences, special arrangements etc"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        <div className={styles.buttonGroup}>
          {/* Calendly Button */}
          <button
            type="button"
            className={styles.calendlyBtn}
            onClick={handleCalendly}
          >
            Book a Call on Calendly
          </button>

          {/* WhatsApp Submit */}
          <button type="submit" className={styles.btn} disabled={isSubmitted}>
            {isSubmitted ? "Request sent" : "Send Request"} <LuSend />
          </button>
        </div>
      </form>
    </section>
  );
};

export default InquiryForm;
