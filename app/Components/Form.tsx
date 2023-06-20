import React, { useState, ChangeEvent, FormEvent } from "react";
import { PrismaClient, Inquiry } from "@prisma/client";

const prisma = new PrismaClient();

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // send data to Prisma
    try {
      const newInquiry: Inquiry = await prisma.inquiry.create({
        data: {
          name: formState.name,
          email: formState.email,
          company: formState.company,
          message: formState.message,
        },
      });
      console.log('Inquiry created: ', newInquiry);
    } catch (error) {
      console.error('Error creating inquiry: ', error);
    }
  };

  return (
    <div className="form-container">
      <h1>CONTACT US</h1>
      <img src="your-email-icon-url-here" alt="email icon" />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="company"
          value={formState.company}
          onChange={handleInputChange}
          placeholder="Company"
          required
        />
        <textarea
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          placeholder="Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
