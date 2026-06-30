"use client";

import { useReveal } from "@/lib/useReveal";

export default function Specs() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section
      id="specs"
      className="bg-card px-4 py-24 sm:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center transition-all duration-700 ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-muted">
            Precision sensors. Pro-grade durability. Built for the grind.
          </p>
        </div>
        <div
          className={`mt-16 overflow-hidden rounded-2xl border border-border transition-all duration-700 ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <table className="w-full text-left text-sm">
            <tbody>
              {specs.map((s, i) => (
                <tr
                  key={s.label}
                  className={
                    i % 2 === 0 ? "bg-card-hover" : "bg-card"
                  }
                >
                  <th className="px-6 py-4 font-medium text-muted">
                    {s.label}
                  </th>
                  <td className="px-6 py-4 font-semibold">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const specs = [
  { label: "Processor", value: "Dual-core ARM Cortex-M33 + AI NPU 2 TOPS" },
  { label: "Sensors", value: "6-axis IMU, Barometer, PPG Heart Rate, Skin Temperature" },
  { label: "Sample Rate", value: "Up to 1000 Hz (impact), 200 Hz (motion)" },
  { label: "Battery", value: "280 mAh Li-Po, up to 14 days (typical use)" },
  { label: "Charging", value: "Magnetic USB-C, 0–100% in 45 min" },
  { label: "Connectivity", value: "Bluetooth 5.4, ANT+, Wi-Fi b/g/n" },
  { label: "Water Resistance", value: "IP68 (10 m, 2 hours)" },
  { label: "Display", value: '1.43" AMOLED, 466 × 466 px, Always-On' },
  { label: "Weight", value: "38 g (band included)" },
  { label: "Materials", value: "Titanium alloy bezel, fluoroelastomer strap" },
  { label: "Operating Range", value: "-10 °C to 50 °C" },
  { label: "Compatibility", value: "iOS 16+ / Android 12+" },
];
