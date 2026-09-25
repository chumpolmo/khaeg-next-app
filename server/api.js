import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import restaurantRoutes from "./routes/restaurantRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(
  "/api/restaurants",
  restaurantRoutes
);

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});