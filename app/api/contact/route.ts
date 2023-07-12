import { NextResponse, NextRequest } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req)
  console.log(req.body)
  const payload = await req.body
  console.log(payload)

  const nodeMailer = require('nodemailer')

  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'high.desert.test165@gmail.com',
        pass: "kakwvtonypqtzzji",
      }
    })

    const info = await transporter.sendMail({
      from: '"High Desert Test" <high.desert.test165@gmail.com>',
      to: '"High Desert Test" <high.desert.test165@gmail.com',
      subject: "Hello",
      text: JSON.stringify(payload), // stringifying the payload as JSON
    })
    console.log("Message sent: %s", info.messageId)

    return new Response('Email sent', { status: 200 })
  }
  catch(e) {
    console.log(e)
    return new Response('Error', { status: 500})
  }
}