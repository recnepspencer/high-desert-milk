"use client"
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, company, phoneNumber, email, message } = req.body;
  const nodemailer = require("nodemailer")

  let transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: 'high.desert.test165@gmail.com',
      pass: 'Idaho2023!'
    }
  });
    let info = await transporter.sendMail({
    from: '"Your Website 👻" <high.desert.test165@gmail.com>', 
    to: "your_own_email@example.com", 
    subject: "New Message From Your Website", 
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nCompany: ${company}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
    html: `<b>First Name: ${firstName}<br>Last Name: ${lastName}<br>Company: ${company}<br>Phone Number: ${phoneNumber}<br>Email: ${email}<br>Message: ${message}</b>`,
  });
  console.log('Message sent: %s', info.messageId)

  

  res.status(200).json({ success: true });
}
