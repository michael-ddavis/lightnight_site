// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // ensure Node runtime

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT || "465";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

// These are the RECIPIENTS (Google Groups are fine here)
const PRIMARY_EMAIL = "hello@alabasterchurch.org";
const PRAYER_EMAIL = "prayer@alabasterchurch.org";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid payload from form." },
        { status: 400 }
      );
    }

    const {
      name = "",
      email = "",
      reason = "general",
      message = "",
      honeypot = "",
    } = body as {
      name?: string;
      email?: string;
      reason?: string;
      message?: string;
      honeypot?: string;
    };

    // Honeypot: if bots fill this, silently "succeed"
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedMessage = String(message).trim();
    const normalizedReason = String(reason).toLowerCase();

    // Basic validation
    if (!trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { ok: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please share a little more so we can serve you well.",
        },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        {
          ok: false,
          error: "Message is too long. Please shorten it a bit.",
        },
        { status: 400 }
      );
    }

    const isPrayer =
      normalizedReason === "prayer" ||
      normalizedReason === "prayer-request" ||
      normalizedReason.includes("prayer");

    const to = isPrayer ? PRAYER_EMAIL : PRIMARY_EMAIL;

    // Make sure SMTP is configured
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("❌ Missing SMTP config", {
        SMTP_HOST: !!SMTP_HOST,
        SMTP_USER: !!SMTP_USER,
        SMTP_PASS: !!SMTP_PASS,
      });

      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured on the server. Ask the Alabaster team to set SMTP env vars.",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Verify connection (good for debugging)
    try {
      await transporter.verify();
    } catch (verifyErr: any) {
      console.error("❌ SMTP verify failed:", verifyErr);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email server not accepting connection (check SMTP_USER / SMTP_PASS / app password).",
        },
        { status: 500 }
      );
    }

    const subjectPrefix = isPrayer ? "Prayer Request" : "Contact Form";
    const subject = `[Alabaster] ${subjectPrefix} from ${
      trimmedName || trimmedEmail
    }`;

    const textBody = [
      `Name: ${trimmedName || "(not provided)"}`,
      `Email: ${trimmedEmail}`,
      `Reason: ${reason}`,
      "",
      "Message:",
      trimmedMessage,
      "",
      "— Sent via alabasterchurch.org contact form",
    ].join("\n");

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #111827;">
        <p><strong>Name:</strong> ${trimmedName || "(not provided)"}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="font-size: 12px; color: #6b7280;">Sent via alabasterchurch.org contact form</p>
      </div>
    `;

    // Actually send
    try {
      const info = await transporter.sendMail({
        from: `"Alabaster Website" <${SMTP_USER}>`,
        to,
        cc: process.env.SMTP_USER,           // 👈 ensures Inbox copy in michael@...
        replyTo: trimmedEmail,
        subject,
        text: textBody,
        html: htmlBody,
      });

      return NextResponse.json({ ok: true });
    } catch (sendErr: any) {
      console.error("❌ Error sending email:", sendErr);
      return NextResponse.json(
        {
          ok: false,
          error:
            sendErr?.response ||
            sendErr?.message ||
            "Unknown error while sending email.",
        },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error("❌ Contact form outer error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: err?.message || "Unexpected error while sending your message.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
