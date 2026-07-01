import { NextResponse } from "next/server";
import { addOrder, getOrders } from "@/lib/store";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export async function POST(req: Request) {
  try {
    const { name, email, items, total } = await req.json();

    if (!email || !name || !items?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const order = {
      id: generateId(),
      email,
      name,
      total,
      items,
      createdAt: new Date().toISOString(),
    };

    addOrder(order);

    console.log("[order] Created:", order.id, email);

    if (resend) {
      const itemsHtml = items
        .map(
          (item: { name: string; price: number; quantity: number }) =>
            `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${item.name}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:center">${item.quantity}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right">$${item.price}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right">$${item.price * item.quantity}</td></tr>`
        )
        .join("");

      try {
        await resend.emails.send({
          from: "AeroSpike Pro <onboarding@resend.dev>",
          to: email,
          subject: `Order Confirmed #${order.id.slice(0, 8)} — AeroSpike Pro`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:40px 20px">
              <h1 style="font-size:24px;color:#7c3aed">Thanks for your order, ${name}! 🚀</h1>
              <p style="color:#374151;line-height:1.6">Your AeroSpike Pro order has been confirmed.</p>
              <table style="width:100%;border-collapse:collapse;margin-top:24px">
                <thead><tr style="background:#f9fafb"><th style="padding:8px 12px;text-align:left;font-size:12px;text-transform:uppercase;color:#6b7280">Item</th><th style="padding:8px 12px;font-size:12px;text-transform:uppercase;color:#6b7280">Qty</th><th style="padding:8px 12px;text-align:right;font-size:12px;text-transform:uppercase;color:#6b7280">Price</th><th style="padding:8px 12px;text-align:right;font-size:12px;text-transform:uppercase;color:#6b7280">Subtotal</th></tr></thead>
              <tbody>${itemsHtml}</tbody>
            </table>
            <div style="border-top:2px solid #7c3aed;margin-top:16px;padding-top:16px;text-align:right;font-size:18px;font-weight:bold;color:#111827">Total: $${total}</div>
            <p style="color:#6b7280;font-size:14px;margin-top:32px;border-top:1px solid #e5e7eb;padding-top:24px">We'll notify you when your order ships.</p>
            <p style="color:#6b7280;font-size:14px">— AeroSpike Pro Team</p>
            </div>`,
        });
      } catch {
        console.warn("[order] Resend skipped for", email);
      }
    }

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error("[order] Error:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}

export async function GET() {
  const orders = getOrders();
  return NextResponse.json({ total: orders.length, orders });
}
