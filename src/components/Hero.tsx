export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      <div className="mx-auto max-w-7xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
          Next-Gen Smart Living
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your Home,
          <br />
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Brilliantly Intelligent
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          AuraSync is the AI-powered hub that learns your habits, automates your
          routines, and puts total control of your smart home in the palm of
          your hand.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Pre-Order Now
          </a>
          <a
            href="#features"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card-hover"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
