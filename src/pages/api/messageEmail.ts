import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    email,
    name,

    message,
  } = req.body;

  // Log the received data
  console.log("Received data:", {
    email,
    name,
    message,
  });

  if (!email || !name) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Set email options
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Vemara Solutions | Message Us | ${name}`,
    html: `
    <h3>Basic Info:</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>

  `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
