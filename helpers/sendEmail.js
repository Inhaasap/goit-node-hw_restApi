const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "missingusya@hotmail.com",
    subject: "Test Email",
    html: "<h1>This is a test email<h1>",
    text: "This is a test email"
  };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;