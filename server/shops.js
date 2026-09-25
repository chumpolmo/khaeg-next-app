import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import shopRoutes from "./routes/shopRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(
  "/api/shops",
  shopRoutes
);

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});