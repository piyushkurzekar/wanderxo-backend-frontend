import React, { useState, useEffect } from 'react';
import japanImage from "../assets/japan_day1.jpg";
import japanImage2 from "../assets/japan_day2.jpg";
import japanImage3 from "../assets/japan_day3.jpg";
import japanImage4 from "../assets/japan_day4.jpg";
import japanImage5 from "../assets/japan_day5.jpg";
import japanImage6 from "../assets/japan_day6.jpg";
import japanImage7 from "../assets/japan_day7.jpg";
import japanImage8 from "../assets/japan_day8.jpg";
import japanImage9 from "../assets/japan_day9.jpg";
import japanImage10 from "../assets/japan_day10.jpg";
import japanImage11 from "../assets/japanslideshow1.jpg";
import japanImage12 from "../assets/japanslideshow2.jpg";
import japanImage13 from "../assets/japanslideshow3.jpg";
import japanImage14 from "../assets/japanslideshow4.jpg";
import japanImage15 from "../assets/japansneakpeek1.jpg";
import japanImage16 from "../assets/japansneakpeek2.jpg";
import japanImage17 from "../assets/japansneakpeek3.jpg";
import japanImage18 from "../assets/japansneakpeek4.jpg";
import japanImage19 from "../assets/japansneakpeek5.jpg";


;




// --- DATA CONSTANTS ---
const TOUR_DATA = {
    title: "Blooming Japan: 10 Days of Culture & Adventure",
    days: [
        {
            day: 1,
            title: "Day 1: Tokyo Arrival & Shibuya Sky.",
            desc: `Arrival in Tokyo, transfer to the hotel. Day one is at leisure. We will be giving a list of things to do that you can do on your day one of arrival.

We recommend doing Shibuya Sky on the day of arrival, if you would like to book it, please inform at the time of booking as the tickets get sold out one month in advance. This experience is complimentary for all travelers [only for the arrival date]

Please note that the standard check in time is 15:00 hours and early check in subject to availability & at an additional expense, which is to be paid directly at the hotel.`,
            highlight: "Arrival & Shibuya Sky",
            image: japanImage
        },
        {
            day: 2,
            title: "Day 2: Tokyo City Tour – Culture, Art & City Buzz",
            desc: `Start of your day with Asakusa Sensoji Temple, Walk through Nakamise Shopping Street, a vibrant stretch filled with traditional snacks, souvenirs, and yukata shops.

Next, dive into a surreal, immersive art experience at TeamLab Planets. Wander barefoot through water-filled digital installations, infinity rooms, and floral dreamscapes. Just when you exit is a michellin star vegan ramen place, which is a must try!! End the day at the world-famous Shibuya Crossing – often called the “Times Square of Tokyo.”

Optional: Real-Life Go-Karting in Shibuya ⚠️ Driver's license required (International Driving Permit – IDP)`,
            highlight: "Asakusa, TeamLab, Shibuya",
            image: japanImage2
        },
        {
            day: 3,
            title: "Day 3:Mt. Fuji + Hakone Day Trip-Nature,Views&Tranquility",
            desc: `You will love this day, it is by far the most beautiful place & setting! Mt. Fuji Viewpoint Catch stunning views of Japan’s tallest peak from scenic spots like Oishi Park or the 5th Station (weather permitting)

Hakone Ropeway Ride over volcanic valleys and steamy hot springs. Try the iconic black eggs said to add 7 years to your life!

Lake Ashi Cruise Sail across a serene lake with Mt. Fuji in the backdrop and traditional torii gates on the shore — pure peace and perfect photos.`,
            highlight: "Cruise,MT.Fuji,Hakone Ropeway",
            image: japanImage3
        },
        {
            day: 4,
            title: "Day 4:DisneySea OR Mario Kart[Select One]",
            desc: "Spend the day your way with two unforgettable experiences: race through the neon streets of Tokyo in real go-karts dressed as your favourite Mario characters (valid licence + IDP required), or immerse yourself in the world’s only Tokyo DisneySea, a cinematic, adult-friendly Disney park with seven themed ports and iconic attractions like Journey to the Center of the Earth, Tower of Terror, and Soaring.Please note: transfers are not included for this day, as the group will be split between the two experiences and final numbers are yet to be confirmed. Pick the vibe that suits you best! Download the Disney app before entering to check wait times!",
            highlight: "Mario Go-karts,DisneySea ",
            image: japanImage4
        },
        {
            day: 5,
            title: "Day 5:Shinkansen to Kyoto",
            desc: `Bullet Train Ride Zip from Tokyo to Kyoto at 300 km/hr on the iconic Shinkansen. Grab a bento at the station and enjoy the scenic ride — speed meets serenity!

Kimono Makeover Get styled in a traditional kimono and explore Kyoto’s charming lanes. A cultural glow-up that’s 100% Insta-worthy.

Tea Ceremony Join a serene matcha ritual with a tea master in a tatami room. Slow down, sip, and soak in centuries of Japanese tradition.

Gion Walk + Geisha Spotting [Optional, pay for shared transport] Wander Kyoto’s historic Gion district — cobbled streets, wooden teahouses, and if you're lucky, a glimpse of a real-life Geisha or Maiko`,
            highlight: "Bullet Train ,Kimono Dress-up,Tea ceremony",
            image: japanImage5
        },
        {
            day: 6,
            title: "Day 6:Kyoto + Nara-Nature, Temples & Deer Encounters",
            desc: `Arashiyama Bamboo Grove Start your morning walking through the magical bamboo forest of Arashiyama – a serene, picture-perfect path that feels straight out of a dream.

Fushimi Inari Taisha Shrine Next, visit Kyoto’s most iconic shrine, known for its thousands of bright red torii gates that form a mystical trail up the sacred Mt. Inari.

Nara Deer Park In the afternoon, head to Nara, Japan’s ancient capital, where over 1,000 free-roaming deer await you! These sacred deer are friendly (and slightly cheeky), especially when you feed them special deer crackers. You can also admire Todai-ji Temple, home to a massive Great Buddha statue.`,
            highlight: "Fushimi Inari, Bamboo Grove, Nara Deer",
            image: japanImage6
        },
        {
            day: 7,
            title: "Day 7:Day Trip to Amanohashidate",
            desc: `We get a coach to Amanohashidate,which is 2.5 hours from kyoto.this is a seat in coach tour. Discover the natural charm of Amanohashidate, one of Japan’s most breathtaking scenic spots. Cruise through stunning views of the iconic sandbar and lush landscapes on a peaceful boat ride. Explore the timeless beauty of Miyama, a village rich in history and traditional charm.

             Wander through Kayabuki no Sato, known for its postcardperfect thatched- roof houses.`,
            highlight: "Scenic View: Bridge to Heaven",
            image: japanImage7
        },
        {
            day: 8,
            title: " Day 8:Free day for Universal studios/exploring kyoto or Osaka on your own ",
            desc: `Option 1: Universal Studios Japan (Osaka) Take a quick train to Osaka and spend the day at Universal Studios Japan — home to Super Nintendo World™, Harry Potter™, Jurassic Park, and other immersive zones. A perfect choice for thrill seekers and theme park fans. 🛍

Option 2: Discover Kyoto or Osaka at Your Own Pace Not into rides?

You can:

• Dive deeper into Kyoto with hidden shrines, cultural cafés, or a kimono walk.

• Or hop over to Osaka to explore Shinsaibashi shopping street, Kuromon Market, or chill in a high - rise café in Umeda Sky Building.This is your "choose your own adventure" day — go wild or go slow!`,
            highlight: "Cup Noodle Museum, Osaka Castle, Dotonbori",
            image: japanImage8
        },
        {
            day: 9,
            title: "Day 9:Osaka Highlights – Castles, Cup Noodles & City Vibes Cup Noodles Museum (Ikeda)",
            desc: `Start your day designing your own cup noodle and learning about Japan’s instant ramen legacy at this fun, interactive museum.

Osaka Castle

Explore one of Japan’s most iconic castles, surrounded by lush gardens and history.HEP Five Ferris Wheel Ride above Osaka in a rooftop Ferris wheel for stunning city views  

Dotonbori & Shinsaibashi

Wrap up the day in Osaka’s buzzing heart — neon lights, street food, and endless shopping.

​`,
            highlight: "Leisure & Shopping",
            image: japanImage9
        },
        {
            day: 10,
            title: "Day 10: Sayonara Japan",
            desc: "Group airport transfers to Kansai International (Itami) or Haneda for your flight home. Safe travels!",
            highlight: "Airport Transfer",
            image: japanImage10
        }
    ],
    inclusions: [
        "9 nights / 10 days accommodation in 3–4 star hotels",
        "4 nights in Tokyo & 5 nights in Kyoto",
        "Tokyo city tour: Asakusa, TeamLab Planets, Shibuya",
        "Mt. Fuji + Hakone day trip (cruise + ropeway included)",
        "Entry to Tokyo DisneySea OR Mario Kart Experience",
        "Tokyo Pub Crawl",
        "Bullet train (Shinkansen): Tokyo → Kyoto",
        "Kimono dress-up experience",
        "Kyoto & Nara highlights: Fushimi Inari, Arashiyama Bamboo Grove, Nara Deer Park",
        "Day trip to Amanohashidate",
        "Osaka highlights: Cup Noodle Museum, Dotonbori, HEP Five Ferris Wheel, Osaka Castle",
        "Wander XO trip lead & Daily group support",
        "Group airport transfers (Haneda arrival & Itami departure)",
        "All internal travel as per itinerary",
        "Trip coordination, tips & visa guidance",
        "Shibuya Sky"
    ],
    exclusions: [
        "International airfare",
        "Japan visa fee & travel insurance",
        "City tax: 50–200 YEN per person per night (approx.)",
        "Universal Studios ticket (optional)",
        "Metro & local taxi expenses during free time",
        "Meals",
        "Early check-in / late checkout",
        "Personal expenses (shopping, laundry, souvenirs)",
        "Anything not explicitly mentioned under inclusions",
        "Transport to Mario Kart / DisneySea",
        "Transport to Gion"
    ],
    sneakPeek: [
        japanImage15,
        japanImage16,
        japanImage17,
        japanImage18,
        japanImage19
    ],
    heroSlides: [
        {
            image: japanImage11,
            title: "Cherry Blossoms in Full Bloom",
            subtitle: "Experience the magical sakura season across Japan's most iconic locations",
        },
        {
            image: japanImage12,
            title: "Ancient Temples & Zen Gardens",
            subtitle: "Discover centuries of tradition in Kyoto's serene spiritual sanctuaries"
        },
        {
            image: japanImage13,
            title: "Tokyo's Vibrant Energy",
            subtitle: "Immerse yourself in the neon-lit streets and cutting-edge culture of Japan's capital"
        },
        {
            image: japanImage14,
            title: "Majestic Mount Fuji",
            subtitle: "Witness the breathtaking beauty of Japan's most sacred mountain peak"
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
                    <a href="#booking" className="btn btn-primary">Reserve your Spot</a>
                    <a href="#itinerary" className="btn btn-secondary">View Itinerary</a>
                </div>
            </div>
        </div>
    );
}

function Pricing() {
    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-card early-bird">
                    <div className="pricing-badge">Early Bird</div>
                    <div className="pricing-label">Trip Price</div>
                    <div className="pricing-amount">$2599</div>
                    <div className="pricing-unit">Per Person</div>
                    <div className="pricing-validity">Valid Till 10 Jan 2026</div>
                </div>

                <div className="pricing-card regular">
                    <div className="pricing-label">Regular Price</div>
                    <div className="pricing-amount">$2799</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                <div className="pricing-card upgrade">
                    <div className="pricing-label">Upgrade Single Occupancy</div>
                    <div className="pricing-amount">$799</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                <div className="pricing-card deposit">
                    <div className="pricing-label">Deposit Amount</div>
                    <div className="pricing-amount">$500</div>
                    <div className="pricing-unit">Per Person</div>
                </div>

                <div className="pricing-card refund-policy">
                    <div className="pricing-icon">🚫</div>
                    <div className="pricing-label">No Refund Policy</div>
                    <div className="pricing-note">All bookings are non-refundable</div>
                </div>
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
    return (
        <section id="booking" className="booking-section">
            <div className="booking-container">
                <h2>Ready to Explore?</h2>
                <p>Book your spot for the Sakura Season 2026. Limited availability!</p>
                <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <select>
                        <option value="spring">Spring 2026</option>
                        <option value="autumn">Autumn 2026</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Request Booking</button>
                </form>
            </div>
        </section>
    );
}



// --- MAIN BODY COMPONENT ---


