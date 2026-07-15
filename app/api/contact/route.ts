import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  business?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    // Initialize Resend only when the form is submitted,
    // not while Vercel is building the website.
    const resend = new Resend(apiKey);

    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const business = body.business?.trim() || "Not provided";
    const service = body.service?.trim() || "Not provided";
    const budget = body.budget?.trim() || "Not provided";
    const timeline = body.timeline?.trim() || "Not provided";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(business);
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget);
    const safeTimeline = escapeHtml(timeline);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from: "Jovavo Website <contact@jovavo.com>",
      to: ["contact@jovavo.com"],
      replyTo: email,
      subject: `New Jovavo project inquiry from ${name}`,
      html: `
        <div style="background:#f5f1e8;padding:40px 20px;font-family:Arial,sans-serif;color:#1b1713;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:24px;padding:32px;border:1px solid #e7dfd4;">
            <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#857d73;margin:0 0 12px;">
              Jovavo Project Inquiry
            </p>

            <h1 style="font-size:30px;font-weight:500;margin:0 0 28px;">
              New proposal request
            </h1>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Business:</strong> ${safeBusiness}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Budget:</strong> ${safeBudget}</p>
            <p><strong>Timeline:</strong> ${safeTimeline}</p>

            <div style="margin-top:24px;background:#f8f5ef;border-radius:16px;padding:20px;line-height:1.7;">
              ${safeMessage}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "The inquiry could not be sent. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}