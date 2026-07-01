import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const subscribers: { email: string; source: string; subscribedAt: string }[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    const entry = { email, source: source || "AeroSpike Pro", subscribedAt: new Date().toISOString() };
    subscribers.push(entry);
    console.log("[contact] Subscribed:", email);

    if (resend) {
      try {
        await resend.emails.send({
          from: "AeroSpike Pro <onboarding@resend.dev>",
          to: email,
          subject: "Welcome to AeroSpike Pro — Early Access",
          html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:40px 20px">
            <h1 style="font-size:24px;color:#7c3aed">You're on the list! 🚀</h1>
            <p style="color:#374151;line-height:1.6">Thanks for subscribing to <strong>AeroSpike Pro</strong>.</p>
            <p style="color:#374151;line-height:1.6">We'll notify you as soon as pre-orders open. Stay tuned!</p>
            <p style="color:#6b7280;font-size:14px;margin-top:32px">— AeroSpike Pro Team</p>
          </div>`,
        });
      } catch {
        console.warn("[contact] Resend skipped for", email, "(free tier: only sends to verified recipients)");
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ total: subscribers.length, subscribers });
}
