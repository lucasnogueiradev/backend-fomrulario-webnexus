// services/mailer.js
const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
  const { name, email, phone, company, budget, description, newsletter } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Novo contato de ${name}`,
    html: `
      <h3>Nova mensagem do formulário</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
      <p><strong>Orçamento:</strong> ${budget || "Não informado"}</p>
      <p><strong>Newsletter:</strong> ${newsletter ? "Sim" : "Não"}</p>
      <p><strong>Mensagem:</strong><br>${description}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
