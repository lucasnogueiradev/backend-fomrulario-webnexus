// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contatoRoutes = require("./routes/contato");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota principal do formulário
app.use("/api/contato", contatoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
