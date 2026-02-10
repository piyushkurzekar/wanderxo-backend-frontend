import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDestinations } from "../services/destinationService";
import "./DestinationCard.css";

const DestinationCard = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations()
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center"   style={{ marginTop: "90px" }}>Loading trips...</p>;

  return (
    <section className="destination-section">
      <div className="destination-grid">
        {destinations.map((item) => (
          <Link
            key={item.id}
            to={`/destinations/${item.slug}`}
            className="card-link"
          >
            <div className="destination-ticket">

              {/* HEADER */}
              <div className="ticket-header">
                <p className="trip-title">{item.title}</p>
                <p className="trip-date">{item.travel_date}</p>
              </div>

              {/* IMAGE */}
              <div className="ticket-image">
                <img src={item.thumbnail_url} alt={item.title} />
              </div>

              {/* FOOTER */}
              <div className="ticket-footer">
                <span className="airport-code">{item.code}</span>
                <div className="barcode"></div>
              </div>
              <span className="explore-text">Explore</span>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DestinationCard;
