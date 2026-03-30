import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[0-9+\-\s()]{8,20}$/.test(phone);
}

function isValidName(name: string) {
  return /^[A-Za-z][A-Za-z\s.'-]{1,79}$/.test(name);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const businessType = String(formData.get("businessType") || "").trim();
    const services = String(formData.get("services") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !phone || !businessType || !services || !message) {
      return NextResponse.redirect(new URL("/contact?error=missing", request.url), 303);
    }

    if (!isValidName(name)) {
      return NextResponse.redirect(new URL("/contact?error=name", request.url), 303);
    }

    if (!isValidEmail(email)) {
      return NextResponse.redirect(new URL("/contact?error=email", request.url), 303);
    }

    if (!isValidPhone(phone)) {
      return NextResponse.redirect(new URL("/contact?error=phone", request.url), 303);
    }

    if (message.length < 20) {
      return NextResponse.redirect(new URL("/contact?error=message", request.url), 303);
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || "optivirads@gmail.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.redirect(new URL("/contact?error=config", request.url), 303);
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"OptiVir Ads Website" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${businessType}
Services Needed: ${services}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <p><strong>Services Needed:</strong> ${services}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f8fafc; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.redirect(new URL("/contact?success=1", request.url), 303);
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.redirect(new URL("/contact?error=server", request.url), 303);
  }
}