import express from "express";
import { upload } from "../middlewares/upload.js";
import {
  createDestination,
  getDestinations,
  getDestinationBySlug,
  deleteDestination,
} from "../controllers/destination.controller.js";

const router = express.Router();

// ADMIN (CREATE)
router.post(
  "/",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 20 }
  ]),
  createDestination
);

// PUBLIC
router.get("/", getDestinations);
router.get("/:slug", getDestinationBySlug);

// routes/destinationRoutes.js
router.delete("/:id",deleteDestination);




export default router;
