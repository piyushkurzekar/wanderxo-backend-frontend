import React, { useState, useEffect } from "react";
import { fetchDestinations } from "../services/destinationService";

const AddDestination = () => {

  const [destinations, setDestinations] = useState([]);




  const [card, setCard] = useState({
    title: "",
    location: "",
    date: "",
    code: "",
    slug: "",
    payment_link: ""
  });

  const [thumbnail, setThumbnail] = useState(null);

  const [intro, setIntro] = useState({
    title: "",
    description: "",
    image: null
  });

  const [pricing, setPricing] = useState([
    {
      label: "EARLY BIRD",
      title: "Trip Price",
      price: "",
      sub_text: "Per Person",
      note: ""
    }
  ]);


  const [highlights, setHighlights] = useState([null]);

  const [itinerary, setItinerary] = useState([
    { day: 1, title: "", description: "", image: null }
  ]);

  const [inclusions, setInclusions] = useState([""]);
  const [exclusions, setExclusions] = useState([""]);

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // ---------------- TEXT DATA ----------------
      formData.append("card", JSON.stringify(card));

      formData.append(
        "intro",
        JSON.stringify({
          title: intro.title,
          description: intro.description
        })
      );

      formData.append(
        "pricing_section",
        JSON.stringify(pricing));


      formData.append(
        "highlights",
        JSON.stringify(
          highlights.map(() => ({ image_url: null }))
        )
      );

      formData.append(
        "itinerary",
        JSON.stringify(
          itinerary.map(day => ({
            day: day.day,
            title: day.title,
            description: day.description
          }))
        )
      );

      formData.append("inclusions", JSON.stringify(inclusions));
      formData.append("exclusions", JSON.stringify(exclusions));

      // ---------------- FILES ----------------

      // thumbnail (single)
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      // 🔥 gallery order (LOCKED)

      // 1️⃣ intro image
      if (intro.image) {
        formData.append("gallery", intro.image);
      }

      // 2️⃣ highlights images
      highlights.forEach(img => {
        if (img) {
          formData.append("gallery", img);
        }
      });

      // 3️⃣ itinerary images (day-wise)
      itinerary.forEach(day => {
        if (day.image) {
          formData.append("gallery", day.image);
        }
      });

      // ---------------- API CALL ----------------
      const res = await fetch("http://localhost:5000/api/destinations", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "❌ Destination add failed");
        return;
      }

      alert("✅ Destination added successfully");

    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    }
  };


  useEffect(() => {
    fetchDestinations()
      .then((data) => {
        setDestinations(data);
      })
  }, []);


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/destinations/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      // UI se bhi hata do
      setDestinations(destinations.filter(d => d.id !== id));

      alert("✅ Trip deleted");

    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    window.location.href = "/admin/login";
  };



  // ================= UI =================
  return (
    <div className="container-fluid bg-light py-4 " style={{ marginTop: "70px" }} >
      <div className="container">
      <div className="d-flex  justify-content-between"> 
          <h2 className="mb-4 fw-bold">Admin Panel – Add Destination</h2>
        <button
          className="btn  btn-danger mb-3 px-4 py-2 "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>


        <form onSubmit={handleSubmit}>

          {/* CARD INFO */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Card Info</div>
            <div className="card-body row g-3">
              <input className="form-control col-md-4" placeholder="Title"
                onChange={(e) => setCard({ ...card, title: e.target.value })} />
              <input className="form-control col-md-4" placeholder="Location"
                onChange={(e) => setCard({ ...card, location: e.target.value })} />
              <input className="form-control col-md-4" placeholder="Date"
                onChange={(e) => setCard({ ...card, date: e.target.value })} />
              <input className="form-control col-md-6" placeholder="Code"
                onChange={(e) => setCard({ ...card, code: e.target.value })} />
              <input className="form-control col-md-6" placeholder="Slug"
                onChange={(e) => setCard({ ...card, slug: e.target.value })} />

              <input
                className="form-control col-md-12"
                placeholder="Stripe / Payment Link"
                onChange={(e) =>
                  setCard({ ...card, payment_link: e.target.value })
                }
              />

            </div>
          </div>

          {/* THUMBNAIL */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Thumbnail Image</div>
            <div className="card-body">
              <input type="file" className="form-control"
                onChange={(e) => setThumbnail(e.target.files[0])} />
            </div>
          </div>

          {/* INTRO */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Intro Section</div>
            <div className="card-body">
              <input className="form-control mb-2" placeholder="Intro Title"
                onChange={(e) => setIntro({ ...intro, title: e.target.value })} />
              {/* <textarea className="form-control mb-2" rows="3"
                placeholder="Intro Description"
                onChange={(e) => setIntro({ ...intro, description: e.target.value })} /> */}
              <input type="file" className="form-control"
                onChange={(e) => setIntro({ ...intro, image: e.target.files[0] })} />
            </div>
          </div>

          {/* PRICING SECTION */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Pricing Section</div>
            <div className="card-body">
              {pricing.map((p, i) => (
                <div key={i} className="border rounded p-3 mb-3">
                  <input
                    className="form-control mb-2"
                    placeholder="Label (EARLY BIRD)"
                    value={p.label}
                    onChange={(e) => {
                      const copy = [...pricing];
                      copy[i].label = e.target.value;
                      setPricing(copy);
                    }}
                  />

                  <input
                    className="form-control mb-2"
                    placeholder="Title (Trip Price)"
                    value={p.title}
                    onChange={(e) => {
                      const copy = [...pricing];
                      copy[i].title = e.target.value;
                      setPricing(copy);
                    }}
                  />

                  <input
                    className="form-control mb-2"
                    placeholder="Price"
                    value={p.price}
                    onChange={(e) => {
                      const copy = [...pricing];
                      copy[i].price = e.target.value;
                      setPricing(copy);
                    }}
                  />

                  <input
                    className="form-control mb-2"
                    placeholder="Sub Text (Per Person)"
                    value={p.sub_text}
                    onChange={(e) => {
                      const copy = [...pricing];
                      copy[i].sub_text = e.target.value;
                      setPricing(copy);
                    }}
                  />

                  <input
                    className="form-control"
                    placeholder="Note (Last 4 Seats Available)"
                    value={p.note}
                    onChange={(e) => {
                      const copy = [...pricing];
                      copy[i].note = e.target.value;
                      setPricing(copy);
                    }}
                  />
                </div>
              ))}

              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() =>
                  setPricing([
                    ...pricing,
                    { label: "", title: "", price: "", sub_text: "Per Person", note: "" }
                  ])
                }
              >
                + Add Price Card
              </button>
            </div>
          </div>


          {/* HIGHLIGHTS */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Highlights</div>
            <div className="card-body">
              {highlights.map((_, i) => (
                <input key={i} type="file" className="form-control mb-2"
                  onChange={(e) => {
                    const copy = [...highlights];
                    copy[i] = e.target.files[0];
                    setHighlights(copy);
                  }} />
              ))}
              <button type="button" className="btn btn-link p-0"
                onClick={() => setHighlights([...highlights, null])}>
                + Add Highlight
              </button>
            </div>
          </div>

          {/* ITINERARY */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Itinerary</div>
            <div className="card-body">
              {itinerary.map((day, i) => (
                <div key={i} className="border p-3 mb-3 rounded">
                  <input className="form-control mb-2" placeholder={`Day ${i + 1} Title`}
                    onChange={(e) => {
                      const copy = [...itinerary];
                      copy[i].title = e.target.value;
                      setItinerary(copy);
                    }} />
                  <textarea className="form-control mb-2" rows="2"
                    placeholder="Description"
                    onChange={(e) => {
                      const copy = [...itinerary];
                      copy[i].description = e.target.value;
                      setItinerary(copy);
                    }} />
                  <input type="file" className="form-control"
                    onChange={(e) => {
                      const copy = [...itinerary];
                      copy[i].image = e.target.files[0];
                      setItinerary(copy);
                    }} />
                </div>
              ))}
              <button type="button" className="btn btn-link p-0"
                onClick={() =>
                  setItinerary([
                    ...itinerary,
                    { day: itinerary.length + 1, title: "", description: "", image: null }
                  ])
                }>
                + Add Day
              </button>
            </div>
          </div>

          {/* INCLUSIONS / EXCLUSIONS */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Inclusions</div>
            <div className="card-body">
              {inclusions.map((_, i) => (
                <input key={i} className="form-control mb-2"
                  onChange={(e) => {
                    const copy = [...inclusions];
                    copy[i] = e.target.value;
                    setInclusions(copy);
                  }} />
              ))}
              <button type="button" className="btn btn-link p-0"
                onClick={() => setInclusions([...inclusions, ""])}>+ Add</button>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-semibold">Exclusions</div>
            <div className="card-body">
              {exclusions.map((_, i) => (
                <input key={i} className="form-control mb-2"
                  onChange={(e) => {
                    const copy = [...exclusions];
                    copy[i] = e.target.value;
                    setExclusions(copy);
                  }} />
              ))}
              <button type="button" className="btn btn-link p-0"
                onClick={() => setExclusions([...exclusions, ""])}>+ Add</button>
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-dark px-5 py-2">Save Destination</button>
          </div>

        </form>
      </div><br /><br /><br />


      {destinations.map((item) => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-center">

            {/* LEFT CONTENT */}
            <div>
              <h6 className="mb-1 fw-semibold">{item.title}</h6>
              <small className="text-muted">{item.travel_date}</small>
            </div>

            {/* RIGHT DELETE BUTTON */}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

          </div>
        </div>
      ))}


    </div>
  );
};

export default AddDestination;
