import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  const nodeMailer = require('nodemailer')

  try {
    const formData = await req.formData();
    // Access the form field values
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(firstName, lastName, phoneNumber, email, message)
    let mailText = `
Hello,

You've received a new message from your contact form. Here are the details:

First Name: ${firstName}
Last Name: ${lastName}
Phone Number: ${phoneNumber}
Email: ${email}
Message:
${message}

Best regards,
Your Contact Form
`;

const emailUsername = process.env.EMAIL_USERNAME;
const emailPassword = process.env.EMAIL_PASSWORD;

    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUsername,
        pass: emailPassword,
      }
    })

    const info = await transporter.sendMail({
      from: '"High Desert Test" <high.desert.test165@gmail.com>',
      to: '"High Desert Test" <high.desert.test165@gmail.com>',
      subject: `Strap Form: New message from ${firstName} ${lastName}`,
      text: mailText, 
    });
    
    console.log("Message sent: %s", info.messageId);

    return new NextResponse(JSON.stringify('Email sent'), { status: 200 });
  } catch(e) {
    console.log(e);
    return new NextResponse(JSON.stringify('Error'), { status: 500 });
  }
}