import 'dotenv/config'; 
import express from "express";
import cors from "cors";

import destinationRoutes from "./routes/destination.routes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/destinations", destinationRoutes);

app.get("/", (req, res) => {
  res.send("Wanders XO Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
