import "dotenv/config";
import express from "express";
import cors from "cors";

import { ArmaRoutes } from "./routes/arma.routes";
import { CrimeRoutes } from "./routes/crime.routes";
import { CriminosoRoutes } from "./routes/criminoso.routes";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Delegacia das Gurias",
  });
});

app.use(ArmaRoutes.execute());
app.use(CrimeRoutes.execute());
app.use(CriminosoRoutes.execute());

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
