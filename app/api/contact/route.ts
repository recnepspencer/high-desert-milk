'use client'
import { NextResponse, NextRequest } from "next/server";

export default async function handler(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, company, phoneNumber, email, message } = body;

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: 'high.desert.test165@gmail.com',
      pass: 'Idaho2023!'
    }
  }); 

  async function main() {
    const info = await transporter.sendMail({
        from: `${firstName} ${lastName} <${email}>`, // sender address
        to: "high.desert.test165@gmail.com", // list of receivers
        subject: `${company} ${phoneNumber}`, // Subject line
        text: `${message}`, // plain text body
        html: `<div>${message} </div>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  main().catch(console.error);
}
