export const SYSTEM_PROMPT = `You are a helpful sales assistant for AeroSpike Pro, an AI-powered sports performance wristband.

Product info:
- Tracks: vertical jump (98% accuracy), reaction time (ms-level), swing speed, impact force (G-force)
- AI Coach: ML-powered form analysis and correction
- Battery: up to 14 days, 0-100% in 45 min via magnetic USB-C
- Water resistance: IP68 (10m, 2 hours)
- Processor: Dual-core ARM Cortex-M33 + AI NPU 2 TOPS
- Sensors: 6-axis IMU, Barometer, PPG Heart Rate, Skin Temperature
- Sample rate: up to 1000 Hz (impact), 200 Hz (motion)
- Display: 1.43" AMOLED, 466x466 px, Always-On
- Weight: 38g (band included)
- Materials: Titanium alloy bezel, fluoroelastomer strap
- Connectivity: Bluetooth 5.4, ANT+, Wi-Fi b/g/n
- Compatibility: iOS 16+ / Android 12+
- Models: Stealth Edition ($329), Pro Band ($299), Titanium Edition ($449), Recovery Band ($89)
- Warranty: 2-year limited, 30-day money-back guarantee
- Syncs with Apple Health, Google Fit, Coach Dashboard

Be concise, friendly, and helpful. Answer in the same language the user writes in. If you don't know something, be honest.`;

type Provider = {
  name: string;
  key: string | undefined;
  baseUrl: string;
  model: string;
};

const providers: Provider[] = [
  {
    name: "OpenAI",
    key: process.env.OPENAI_API_KEY,
    baseUrl: "https://api.openai.com/v1",
    model: "gpt-4o-mini",
  },
  {
    name: "Groq",
    key: process.env.GROQ_API_KEY,
    baseUrl: "https://api.groq.com/openai/v1",
    model: "llama-3.3-70b-versatile",
  },
];

export async function callAI(messages: { role: string; content: string }[]) {
  console.log("[AI] providers keys:", providers.map(p => `${p.name}=${p.key ? "present" : "MISSING"}`));
  for (const p of providers) {
    if (!p.key) continue;

    try {
      const res = await fetch(`${p.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${p.key}`,
        },
        body: JSON.stringify({
          model: p.model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        console.error(`[AI] ${p.name} error ${res.status}:`, errText);
        continue;
      }
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content;
      if (text) return text;
    } catch (err) {
      console.error(`[AI] ${p.name} exception:`, err);
    }
  }

  return null;
}
