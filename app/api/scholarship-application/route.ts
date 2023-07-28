import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  const nodeMailer = require('nodemailer')

  try {
    const formData = await req.formData();
    // Access the form field values
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const company = formData.get("company");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("file");

    console.log(firstName, lastName, company, phoneNumber, email, message, file)
    let mailText = `
Hello,

You've received a new message from your contact form. Here are the details:

First Name: ${firstName}
Last Name: ${lastName}
Company: ${company}
Phone Number: ${phoneNumber}
Email: ${email}
Message:
${message}
Atts: ${file}

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
      subject: `New message from ${firstName} ${lastName}`,
      text: mailText, 
      attachments: [
        {
          filename: "file.txt", // This should be the file name from the client
          content: file, // This should be the base64 string from the client
          encoding: 'base64' // Specify the encoding
      }
      ]
    })
    
    console.log("Message sent: %s", info.messageId);

    return new NextResponse(JSON.stringify('Email sent'), { status: 200 });
  } catch(e) {
    console.log(e);
    return new NextResponse(JSON.stringify('Error'), { status: 500 });
  }
}