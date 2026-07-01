import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "AeroSpike Pro <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to AeroSpike Pro — Early Access",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:40px 20px">
        <h1 style="font-size:24px;color:#7c3aed">You're on the list! 🚀</h1>
        <p style="color:#374151;line-height:1.6">Thanks for subscribing to <strong>AeroSpike Pro</strong>.</p>
        <p style="color:#374151;line-height:1.6">We'll notify you as soon as pre-orders open. In the meantime, follow us for the latest updates.</p>
        <p style="color:#6b7280;font-size:14px;margin-top:32px">— AeroSpike Pro Team</p>
      </div>`,
    });

    console.log("[contact] Subscribed:", email);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[contact] Error:", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
