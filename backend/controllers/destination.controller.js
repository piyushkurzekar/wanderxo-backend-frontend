import { supabase } from "../config/supabase.js";
import { uploadImage } from "../utils/uploadImage.js";

export const createDestination = async (req, res) => {
  try {
    // ---------------- TEXT DATA ----------------
    const card = JSON.parse(req.body.card || "{}");
    const intro = JSON.parse(req.body.intro || "{}");
    const highlights = JSON.parse(req.body.highlights || "[]"); 
    const itinerary = JSON.parse(req.body.itinerary || "[]");
    const inclusions = JSON.parse(req.body.inclusions || "[]");
    const exclusions = JSON.parse(req.body.exclusions || "[]");
    const pricing_section = JSON.parse(req.body.pricing_section || "[]");
   


    // ---------------- FILES ----------------
    const thumbnailFile = req.files?.thumbnail?.[0];
    const galleryFiles = req.files?.gallery || [];

    if (!card.title || !thumbnailFile) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    // ---------------- UPLOAD THUMBNAIL ----------------
    const thumbnail_url = await uploadImage(
      thumbnailFile,
      "trip-thumbnails",
      card.slug
    );

    // ---------------- UPLOAD GALLERY ----------------
    const gallery_urls = [];
    for (const img of galleryFiles) {
      const url = await uploadImage(img, "trip-gallery", card.slug);
      gallery_urls.push(url);
    }

    /**
     * 🔒 IMAGE ORDER (VERY IMPORTANT)
     * 0 → intro image
     * 1..n → highlights images
     * after that → itinerary images
     */

    let cursor = 0;

    // ---------------- INTRO IMAGE ----------------
    if (intro) {
      intro.image_url = gallery_urls[cursor] || null;
      cursor++;
    }

    // ---------------- HIGHLIGHTS (IMAGES ONLY) ----------------
    const mappedHighlights = highlights.map(() => {
      const img = gallery_urls[cursor] || null;
      cursor++;
      return { image_url: img };
    });

    // ---------------- ITINERARY (TITLE + DESC + IMAGE) ----------------
    const mappedItinerary = itinerary.map((day) => {
      const img = gallery_urls[cursor] || null;
      cursor++;
      return {
        day: day.day,
        title: day.title,
        description: day.description,
        image_url: img,
      };
    });

    // ---------------- INSERT INTO SUPABASE ----------------
    const { data, error } = await supabase
      .from("destinations")
      .insert([
        {
          title: card.title,
          travel_date: card.date,
          code: card.code,
          slug: card.slug,
           payment_link: card.payment_link, 

          thumbnail_url,
          gallery_urls, // optional (debug / future use)

          intro,
          highlights: mappedHighlights,
          itinerary: mappedItinerary,

          pricing_section,
          inclusions,
          exclusions,

          status: "published",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("CREATE DEST ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


/**
 * GET ALL DESTINATIONS (Cards Page)
 */
export const getDestinations = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("destinations")
      .select("id,title,travel_date,code,slug,thumbnail_url,status")
      .eq("status", "published");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET SINGLE DESTINATION (Detail Page)
 */
export const getDestinationBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const { data, error } = await supabase
      .from("destinations")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(404).json({
      message: "Destination not found",
    });
  }
};


// controllers/destinationController.js
export const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ pehle destination fetch karo (images ke liye)
    const { data: destination, error: fetchError } = await supabase
      .from("destinations")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    // 2️⃣ destination delete
    const { error } = await supabase
      .from("destinations")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "✅ Destination deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Delete failed" });
  }
};
