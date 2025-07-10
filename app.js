import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API Lenguajes de programación.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
