import { NextResponse } from "next/server";

const events: Record<string, unknown>[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { events: batch, page } = body;

    if (batch && Array.isArray(batch)) {
      for (const event of batch) {
        events.push({ ...event, page, receivedAt: new Date().toISOString() });
        console.log("[track]", event.type, event.label || "", event.value || "");
      }
    }

    return NextResponse.json({ success: true, total: events.length });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ total: events.length, events });
}
