import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { InquiryResponseTemplate } from "@/emails/inquiry-response";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, tour } = body;

    // Create transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "mail.mynomadsafariholidays.in",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER || "info@mynomadsafariholidays.in",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to customer
    const customerEmailHtml = InquiryResponseTemplate({
      customerName: name,
      tourDetails: tour,
      message: `Thank you for your inquiry about ${tour ? tour.title : 'our tours'}. We have received your message and will get back to you shortly.`,
    });

    await transporter.sendMail({
      from: '"My Nomadsafari Holidays" <info@mynomadsafariholidays.in>',
      to: email,
      subject: "Thank you for your inquiry - My Nomadsafari Holidays",
      html: customerEmailHtml,
    });

    // Email to admin
    const adminEmailContent = `
      New Inquiry:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      ${tour ? `Tour: ${tour.title}` : ''}
      Message: ${message}
    `;

    await transporter.sendMail({
      from: '"My Nomadsafari Holidays Website" <info@mynomadsafariholidays.in>',
      to: "mynomadsafariholidays@gmail.com", // Forward to your Gmail
      subject: "New Tour Inquiry",
      text: adminEmailContent,
      replyTo: email, // Replies will go to the customer
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 