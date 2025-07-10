import express from "express";
import dotenv from "dotenv";
import routes from "../recuperatorio-segundo-parcial/src/routes/language.routes.js";
import db from "../recuperatorio-segundo-parcial/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Lenguajes de programación.');
});

app.use('/api/languages', routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

db();