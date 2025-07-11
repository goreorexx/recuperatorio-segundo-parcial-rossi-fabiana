import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/language.routes.js";
import db from "./db.js";
import models from "./src/models/language.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send(models);
});

app.use('/api/languages', routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

db();