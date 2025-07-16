// routes/contato.js
const express = require("express");
const router = express.Router();
const sendEmail = require("../services/mailer");

router.post("/", async (req, res) => {
  try {
    await sendEmail(req.body);
    res
      .status(200)
      .json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao enviar mensagem." });
  }
});

module.exports = router;
