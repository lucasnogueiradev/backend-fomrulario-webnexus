// services/mailerEmpresa.js
const nodemailer = require("nodemailer");

const sendEmpresaEmail = async (data) => {
  const { nome, email, funcionarios, whatsapp, mensagem } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERPJ,
      pass: process.env.EMAIL_PASSPJ,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Novo orçamento personalizado - ${nome}`,
    html: `
      <h3>Solicitação de orçamento personalizado</h3>
      <p><strong>Empresa:</strong> ${nome}</p>
      <p><strong>Email do responsável:</strong> ${email}</p>
      <p><strong>Funcionários:</strong> ${funcionarios}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Mensagem:</strong><br>${mensagem}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmpresaEmail;
