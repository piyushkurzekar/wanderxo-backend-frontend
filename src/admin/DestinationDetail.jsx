import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./destination-detail.css";


const DestinationDetail = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [season, setSeason] = useState("spring");
  // submit button UI
  const [issubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/destinations/${slug}`
        );
        if (!res.ok) throw new Error("Destination not found");
        const data = await res.json();
        setDestination(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [slug]);

  if (loading) return <h4 className="text-center py-5" style={{ marginTop: "90px" }} >Loading...</h4>;
  if (error) return <h4 className="text-danger text-center py-5" style={{ marginTop: "90px" }} >{error}</h4>;






  const isValidName = (v) => /^[A-Za-z\s]{2,}$/.test(v);
  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const PACKAGE_NAME = "Konichiwa Japan 15th May 2026";
  const SOURCE_PAGE = "Konichiwa-Japan-15th-May-Page";





  const handleSubmit = async () => {
    // 🔒 Frontend validation
    if (!isValidName(name) || !isValidEmail(email)) {
      alert("❌ Please enter valid name and email.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("season", season);
      formData.append("package", PACKAGE_NAME);
      formData.append("sourcePage", SOURCE_PAGE);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyZfzfQP5M-LFyVM0u0uYTjtWbaNe0YcqKGn-HxzMnPmDIhP8yBav-5YXF6DTUtz25-/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (result.success) {
        //   alert("✅ Booking request sent successfully!");
        setIsSubmitted(true);
        // Clear form
        setName("");
        setEmail("");
        setSeason("spring");
        setTimeout(() => setIsSubmitted(false), 3000); // Reset button after 3 sec
      } else {
        alert("❌ Failed to send request.");
      }
    } catch {
      alert("❌ Network error. Try again later.");
    }
  };


  const handlePhoneCall = () => {
    window.location.href = "tel:+919503889337";
  };
  const handleCalendly = () => {
    window.location.href =
      "https://calendly.com/wanderxo/wander-xo-group-trip-inquiry?month=2026-01";
  };




  return (
    <div className="bg-light">



      {/* HERO SECTION */}
      {destination.intro && (
        <section
          className="hero-section"
          style={{
            backgroundImage: `url(${destination.intro.image_url})`,
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <button
                className="btn-reserve"
                onClick={() => {
                  if (destination.payment_link) {
                    window.open(destination.payment_link, "_blank");
                  }
                }}
              >
                Reserve your Spot
              </button>


              <button className="btn-itinerary"
                onClick={() => {
                  const section = document.getElementById("itinerary");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
                View Itinerary
              </button>
            </div>
          </div>
        </section>
      )}


      {/* TITLE & DATE BELOW IMAGE */}
      <section className="hero-info">
        <div className="container text-center">
          <h1>{destination.title}</h1>
          <p>{destination.travel_date}</p>
        </div>
      </section>



      {/* PRICING SECTION */}
      {destination.pricing_section?.length > 0 && (
        <section className="pricing-section">
          <div className="container">
            <div className="row justify-content-center g-4">
              {destination.pricing_section.map((p, i) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                  <div
                    className={`pricing-card ${p.variant === "early" ? "early-bird" : "regular"
                      }`}
                  >
                    {p.label && (
                      <span className="pricing-badge">{p.label}</span>
                    )}

                    <h6 className="pricing-title">{p.title}</h6>

                    <h2 className="pricing-price">{p.price}</h2>

                    <p className="pricing-subtext">{p.sub_text}</p>

                    {p.note && (
                      <div className="pricing-note">{p.note}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}




      {/* TOUR HIGHLIGHTS */}
      {destination.highlights?.length > 0 && (
        <section className="tour-highlights">
          <div className="container">
            <h2 className="section-title">
              Tour Highlights

            </h2>

            <div className="highlights-grid">
              {destination.highlights.map((h, i) => (
                <div className="highlight-card" key={i}>
                  <img src={h.image_url} alt="highlight" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* DAY BY DAY ITINERARY */}
      {destination.itinerary?.length > 0 && (
        <section id="itinerary" className="itinerary-section">
          <div className="container">
            <h2 className="section-title">
              Day-by-Day Itinerary
            </h2>

            {destination.itinerary.map((day, i) => (
              <div
                key={i}
                className={`itinerary-card ${i % 2 === 0 ? "image-right" : "image-left"
                  }`}
              >
                {/* CONTENT */}
                <div className="itinerary-content">
                  <h3>
                    Day {day.day}: {day.title}
                  </h3>

                  {/* 🔥 DESCRIPTION AS PARAGRAPHS */}
                  {Array.isArray(day.description) ? (
                    day.description.map((para, index) => (
                      <p key={index} className="itinerary-paragraph">
                        {para}
                      </p>
                    ))
                  ) : (
                    day.description
                      ?.split("\n\n")
                      .map((para, index) => (
                        <p key={index} className="itinerary-paragraph">
                          {para}
                        </p>
                      ))
                  )}
                </div>

                {/* IMAGE */}
                {day.image_url && (
                  <div className="itinerary-image">
                    <span className="day-badge">Day {day.day}</span>
                    <img src={day.image_url} alt={day.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}


      {/* INCLUSIONS / EXCLUSIONS */}
      <section className="inclusion-section">
        <div className="container">
          <h2 className="section-title">
            What's Included

          </h2>

          <div className="row g-4">
            {/* INCLUSIONS */}
            <div className="col-md-6">
              <div className="include-card">
                <div className="card-header">
                  <span className="icon check">✓</span>
                  <h4>Inclusions</h4>
                </div>

                <ul>
                  {destination.inclusions?.map((item, idx) => (
                    <li key={idx}>
                      <span className="list-icon check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* EXCLUSIONS */}
            <div className="col-md-6">
              <div className="exclude-card">
                <div className="card-header">
                  <span className="icon cross">✕</span>
                  <h4>Exclusions</h4>
                </div>

                <ul>
                  {destination.exclusions?.map((item, idx) => (
                    <li key={idx}>
                      <span className="list-icon cross">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <div className="important-note">
        <span className="note-icon">💡</span>
        <p className="note-text">
          <strong>Note:</strong> Standard check-in time is 15:00 hrs.
          Early check-in is subject to availability and payable directly at the hotel.
        </p>
      </div>





      {/* booking section */}

      <section id="booking" className="booking-section">
        <div className="booking-section-container">
          <div className="booking-container">
            <h2>Have a Question ?</h2>
            <p>Book your spot for the Sakura Season 2026. Limited availability!</p>

            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <select value={season} onChange={(e) => setSeason(e.target.value)}>
                <option value="spring">Spring 2026</option>
                <option value="autumn">Autumn 2026</option>
              </select>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={issubmitted}
              >
                {issubmitted ? "Request Sent" : "Request Booking"}
              </button>
            </form>

          </div>

          {/* Schedule Call */}
          <div className="booking-container call-container">
            <h2>Schedule a Call with Calendly</h2>
            <p>Not sure if this trip is for you? Schedule a 1:1 call with our travel experts.</p>
            <button type="button" className="btn btn-secondary" onClick={handleCalendly} style={{ marginTop: '1.5rem', width: '100%', padding: '1rem' }}>
              Book a call on Calendly
            </button>
          </div>
        </div>
      </section>


    </div>

  );
};

export default DestinationDetail;
