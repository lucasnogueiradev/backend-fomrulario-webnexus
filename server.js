// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contatoRoutes = require("./routes/contato");
const empresaRoutes = require("./routes/empresa");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota principal do formulário

// Rota principal do formulário de contato
app.use("/api/contato", contatoRoutes);

// Nova rota para formulário de empresa
app.use("/api/empresa", empresaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
