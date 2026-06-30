export default function Specs() {
  return (
    <section id="specs" className="bg-card px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-muted">
            Precision-engineered for performance and reliability.
          </p>
        </div>
        <div className="mt-16 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody>
              {specs.map((s, i) => (
                <tr
                  key={s.label}
                  className={i % 2 === 0 ? "bg-card-hover" : "bg-card"}
                >
                  <th className="px-6 py-4 font-medium text-muted">{s.label}</th>
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
  { label: "Processor", value: "Quad-core Cortex-A76 @ 2.4 GHz + NPU 6 TOPS" },
  { label: "Memory", value: "8 GB LPDDR5 RAM" },
  { label: "Storage", value: "64 GB eMMC 5.1" },
  { label: "Connectivity", value: "Wi-Fi 7, Bluetooth 5.4, Zigbee 3.0, Thread, Matter" },
  { label: "Ports", value: "USB-C (1x), HDMI 2.1 (1x), Ethernet (1x)" },
  { label: "Audio", value: "Dual far-field microphones, 2W speaker" },
  { label: "Power", value: "12V DC, 2A (USB-C PD compatible)" },
  { label: "Dimensions", value: "118 × 118 × 28 mm" },
  { label: "Weight", value: "195 g" },
  { label: "Operating Range", value: "0 °C to 40 °C, 10–90% RH" },
];
