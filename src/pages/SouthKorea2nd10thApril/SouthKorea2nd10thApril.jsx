import React, { useState, useEffect } from 'react';
import skImage1 from "../../assets/images/skday1.jpg";
import skImage2 from "../../assets/images/skday2.jpg";
import skImage3 from "../../assets/images/skday3.jpg";
import skImage4 from "../../assets/images/skday4.jpg";
import skImage5 from "../../assets/images/skday5.jpg";
import skImage6 from "../../assets/images/skday6.jpg";
import skImage7 from "../../assets/images/skday7.jpg";
import skImage8 from "../../assets/images/skday8.jpg";
import skImage9 from "../../assets/images/skday9.jpg";
import skImage10 from "../../assets/images/sksneakpeek1.jpg";
import skImage11 from "../../assets/images/sksneakpeek2.jpg";
import skImage12 from "../../assets/images/sksneakpeek3.jpg";
import skImage13 from "../../assets/images/sksneakpeek4.jpg";
import skImage14 from "../../assets/images/skslideshow1.jpg";
import skImage15 from "../../assets/images/skslideshow2.jpg";
import skImage16 from "../../assets/images/skslideshow3.jpg";
import skImage17 from "../../assets/images/skslideshow4.jpg";
import skImage18 from "../../assets/images/sksneakpeek5.png";




// --- DATA CONSTANTS ---
const TOUR_DATA = {
    title: "South Korea: 9 Days of Culture & Adventure",
    days: [

        {
            day: 1,
            title: "Day 1: Arrival in Seoul",
            desc: `Welcome to South Korea! Upon arrival in Seoul, you'll be greeted and transferred to your hotel with the group.

After check-in and freshening up, explore the lively streets of Myeongdong — famous for street food, shopping, and neon-lit energy.

Overnight stay in Seoul.

Standard check-in time is 15:00 hrs. Early check-in is subject to availability and payable directly at the hotel.`,
            highlight: "Arrival & Myeongdong",
            image: skImage1
        },

        {
            day: 2,
            title: "Day 2: Royal Seoul & Cultural Immersion",
            desc: `After breakfast, step back in time as you explore the majestic Gyeongbokgung Palace, one of Korea’s most iconic royal landmarks.

Wander through the charming lanes of Bukchon Hanok Village, where traditional Korean homes offer a glimpse into the country’s heritage.

Enjoy a special Hanbok rental experience and capture unforgettable photos in traditional attire.

Continue to Insadong, known for its crafts, cafés, and cultural charm.

As evening falls, take in panoramic city views from N Seoul Tower.

Join a pub crawl.

Overnight stay in Seoul.`,
            highlight: "Gyeongbokgung, Hanbok, N Seoul Tower",
            image: skImage2
        },

        {
            day: 3,
            title: "Day 3: Modern Seoul & Trendy Vibes",
            desc: `Today begins at a relaxed pace after the previous night’s fun.

Discover Seoul’s modern side in Gangnam, known for luxury boutiques, sleek architecture, and cosmopolitan energy.

Visit the visually stunning Starfield Library, a favorite Instagram spot.

Later, explore Hongdae, famous for creative culture, cafés, live music, and street performances.

Those interested may also join a fun K-pop dance class.

Overnight stay in Seoul.`,
            highlight: "Gangnam, Starfield, Hongdae",
            image: skImage3
        },

        {
            day: 4,
            title: "Day 4: Alpaca World, Nami Island & Rail Bike",
            desc: `After breakfast, head out on a scenic day trip from Seoul.

Begin with a visit to Alpaca World, where you can interact with friendly alpacas in a beautiful natural setting.

Continue to the picturesque Nami Island, especially stunning in spring when cherry blossoms are often at their peak.

Walk along tree-lined paths and soak in the peaceful atmosphere.

End the day with a fun ride on the Gangchon Rail Bike through scenic countryside views.

Return to Seoul in the evening.

Overnight stay in Seoul.`,
            highlight: "Alpaca World, Nami Island, Rail Bike",
            image: skImage4
        },

        {
            day: 5,
            title: "Day 5: Seoul → Busan",
            desc: `After breakfast, travel to South Korea’s coastal city, Busan, via the high-speed KTX (approx. 2.5 hours).

Upon arrival, check into your hotel and enjoy a relaxed afternoon.

Spend time at Haeundae Beach, soaking in ocean views and seaside vibes.

In the evening, visit Gwangalli Beach for a sunset and night stroll, famous for its illuminated bridge views.

Overnight stay in Busan.`,
            highlight: "KTX, Haeundae Beach, Gwangalli Beach",
            image: skImage5
        },

        {
            day: 6,
            title: "Day 6: Busan by Air & Water",
            desc: `After breakfast, explore Busan’s highlights starting with a Sky Capsule ride offering stunning coastal views.

Visit the colorful Gamcheon Culture Village, known for its artistic houses and murals.

Continue to the breathtaking seaside Haedong Yonggungsa Temple, uniquely located by the ocean.

Walk along the Songdo Skywalk.

Later, enjoy a relaxing Haeundae Yacht Ride and take in Busan’s coastline from the water.

Evening at leisure.

Overnight stay in Busan.`,
            highlight: "Sky Capsule, Gamcheon, Yacht Ride",
            image: skImage6
        },

        {
            day: 7,
            title: "Day 7: Busan → Seoul",
            desc: `After breakfast, travel back to Seoul via the KTX.

Upon arrival, check into your hotel and enjoy free time to explore the city at your own pace.

This is a great opportunity for last-minute shopping, Korean beauty treatments, café hopping, or relaxing spa experiences.

Overnight stay in Seoul.`,
            highlight: "Return to Seoul, Free Time",
            image: skImage7
        },

        {
            day: 8,
            title: "Day 8: Lotte World or DMZ Tour",
            desc: `After breakfast, head out for a full-day excursion.

You may choose to visit Lotte World, one of the world’s largest indoor theme parks, offering thrilling rides, entertainment, and shopping.

Alternatively, opt for the DMZ Tour, a guided visit to the Korean Demilitarized Zone, offering insight into Korea’s history and geopolitics.

Return to Seoul in the evening.

Overnight stay in Seoul.`,
            highlight: "Lotte World or DMZ",
            image: skImage8
        },

        {
            day: 9,
            title: "Day 9: Departure",
            desc: `After breakfast, you’ll be transferred to the airport for your flight back home.

Your unforgettable South Korean journey comes to a close.

You may also choose to extend your trip to Jeju Island.`,
            highlight: "Airport Transfer",
            image: skImage9
        }

    ],
    inclusions: [
        "4-star hotels throughout the trip on double occupancy basis",
        "Daily breakfast at the hotel 🍽",
        "Group arrival airport transfers on Day 1",
        "All private transfers as per itinerary (Except on the day of Lotte World / DMZ Tour, which will be via public transport or shared coach)",
        "Internal station ↔ hotel transfers",
        "KTX high-speed train tickets (Seoul ↔ Busan ↔ Seoul) 🚄",
        "All sightseeing & activities as mentioned in the itinerary, including:  Gyeongbokgung Palace, Bukchon Hanok,Village Hanbok rental experience 👘, N Seoul Tower,Alpaca World 🦙,Nami Island 🌸,Gangchon Rail Bike 🚲 ,Haeundae Beach, Gwangalli Beach,Sky Capsule ride 🚡 Gamcheon Culture Village 🎨, Haedong Yonggungsa Temple 🛕",
        "Songdo Skywalk",
        "Haeundae Yacht Ride ⛵",
        "Lotte World OR DMZ Tour (as selected)",
        "All entrance fees & tickets for included attractions 🎟",
        "Bilingual Wander XO Trip Host (English + local language) throughout the trip",
        "Visa assistance ",
        "End-to-end trip coordination & on-ground suppor",

    ],
    exclusions: [
        "International flights Visa cost",
        "Meals other than breakfast",
        "Personal expenses such as shopping, laundry, tips, mini-bar, etc.",
        "Optional activities not mentioned in the itinerary",
        "Anything not specifically mentioned under “Inclusions",

    ],
    sneakPeek: [
        skImage10,
        skImage11,
        skImage12,
        skImage13,


    ],
    heroSlides: [
        {
            image: skImage14,
            // title: "Echoes of Royal Korea",
            // subtitle: "Ancient palaces, quiet courtyards, and traditions still alive today",

        },
        {
            image: skImage15,
            // title: "Seoul After Dark",
            // subtitle: "Neon-lit streets, K-culture beats, and a city that never slows."
        },
        {
            image: skImage16,
            // title: "Cherry Blossoms Spring in Full Bloom",
            // subtitle: "Soft pink blossoms framing palaces, rivers, and Seoul’s streets"
        },
        {
            image: skImage17,
            // title: "Streets of Seou",
            // subtitle: "Everyday life unfolding between cafés, shops, and neon lights."
        }
    ]
};

// --- SUB-COMPONENTS ---

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <span className="logo-icon">🌸</span> Blooming Japan
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#itinerary" onClick={() => setIsOpen(false)}>Itinerary</a>
                <a href="#details" onClick={() => setIsOpen(false)}>Inclusions</a>
                <a href="#booking" onClick={() => setIsOpen(false)}>Book Now</a>
            </div>
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                {isOpen ? '✕' : '☰'}
            </button>
        </nav>
    );
}

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = TOUR_DATA.heroSlides;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div id="hero" className="hero-section">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                />
            ))}
            <div className="hero-overlay">
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <div className="hero-buttons">
                    <a href="https://buy.stripe.com/cNi14mfxzcOL34Kgaacs820" className="btn btn-primary">Reserve your Spot</a>
                    <a href="#itinerary" className="btn btn-secondary">View Itinerary</a>
                </div>
            </div>
        </div>
    );
}

function Pricing() {
    return (
        <section className="pricing-section">
            <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Cherry Blossoms Korea <br />2nd April - 10th April, 2026</h1>

            <div className="pricing-container">
                <div className="pricing-card early-bird">
                    <div className="pricing-badge">Early Bird</div>
                    <div className="pricing-label">Trip Price</div>
                    <div className="pricing-amount">$1750</div>
                    <div className="pricing-unit">Per Person</div>
                    <div className="pricing-validity">Last 4 Seats Available</div>
                </div>

                <div className="pricing-card regular">
                    <div className="pricing-label">Regular Price</div>
                    <div className="pricing-amount">$1850</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                <div className="pricing-card upgrade">
                    <div className="pricing-label">Upgrade Single Occupancy</div>
                    <div className="pricing-amount">$600</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                <div className="pricing-card deposit">
                    <div className="pricing-label">Deposit Amount</div>
                    <div className="pricing-amount">$350</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                {/* <div className="pricing-card refund-policy">
                    <div className="pricing-icon">🚫</div>
                    <div className="pricing-label">No Refund Policy</div>
                    <div className="pricing-note">All bookings are non-refundable</div>
                </div> */}
            </div>
        </section>
    );
}

function SneakPeek() {
    return (
        <section id="gallery" className="sneak-peek-section">
            <h2 className="section-title">Tour Highlights</h2>
            <div className="sneak-peek-grid">
                {TOUR_DATA.sneakPeek.map((img, index) => (
                    <div key={index} className="sneak-peek-card">
                        <img src={img} alt={`Highlight ${index + 1} `} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}

function ItineraryCard({ day, title, desc, highlight, image, index }) {
    return (
        <div className={`itinerary-card ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="itinerary-content">
                <h3>{title}</h3>
                <p className="itinerary-desc" style={{ whiteSpace: 'pre-line' }}>{desc}</p>
                <div className="itinerary-highlight">
                    <span className="icon">✨</span> {highlight}
                </div>
            </div>
            <div className="itinerary-image">
                <img src={image} alt={title} loading="lazy" />
                <span className="day-badge">Day {day}</span>
            </div>
        </div>
    );
}

function Itinerary() {
    return (
        <section id="itinerary" className="itinerary-section">
            <h2 className="section-title">Day-by-Day Itinerary</h2>
            <div className="itinerary-container">
                {TOUR_DATA.days.map((dayData, index) => (
                    <ItineraryCard key={dayData.day} {...dayData} index={index} />
                ))}
            </div>
        </section>
    );
}

function InclusionsExclusions() {
    return (
        <section id="details" className="details-section">
            <h2 className="section-title">What's Included</h2>
            <div className="details-grid">
                <div className="details-card inclusions">
                    <h3>Inclusions</h3>
                    <ul>
                        {TOUR_DATA.inclusions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="details-card exclusions">
                    <h3>Exclusions</h3>
                    <ul>
                        {TOUR_DATA.exclusions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="important-note">
                <strong>💡 Note:</strong> Standard check-in time is 15:00 hrs. Early check-in is subject to availability and payable directly at the hotel.
            </div>
        </section>
    );
}

function Booking() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [season, setSeason] = useState("spring");

    const isValidName = (v) => /^[A-Za-z\s]{2,}$/.test(v);
    const isValidEmail = (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const PACKAGE_NAME = "SouthKorea 2nd-10th-april 2026";
    const SOURCE_PAGE = "southkorea-2nd-10th-april-Page";


    // submit button UI
    const [issubmitted, setIsSubmitted] = useState(false);


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
    // hello
    const handlePhoneCall = () => {
        window.location.href = "tel:+919503889337";
    };
    const handleCalendly = () => {
        window.location.href =
            "https://calendly.com/wanderxo/wander-xo-group-trip-inquiry?month=2026-01";
    };

    return (
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
    );
}



// --- MAIN BODY COMPONENT ---

export function SouthKorea2nd10thApril() {
    return (
        <main>
            <Hero />
            <Pricing />
            <SneakPeek />
            <Itinerary />
            <InclusionsExclusions />
            <Booking />
        </main>
    );
}
