// routes/empresa.js
const express = require("express");
const router = express.Router();
const sendEmpresaEmail = require("../services/mailerEmpresa");

router.post("/", async (req, res) => {
  try {
    const {
      "empresa-nome": nome,
      "empresa-email": email,
      "empresa-funcionarios": funcionarios,
      "empresa-whatsapp": whatsapp,
      "empresa-mensagem": mensagem,
    } = req.body;

    await sendEmpresaEmail({ nome, email, funcionarios, whatsapp, mensagem });
    res
      .status(200)
      .json({ success: true, message: "Solicitação enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail da empresa:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao enviar solicitação." });
  }
});

module.exports = router;
