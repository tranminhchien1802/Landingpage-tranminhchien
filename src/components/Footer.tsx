export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <a href="/" className="text-lg font-bold tracking-tight text-foreground">
            AeroSpike<span className="text-primary"> Pro</span>
          </a>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} AeroSpike Pro. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#specs" className="transition-colors hover:text-foreground">
            Specs
          </a>
          <a href="#shop" className="transition-colors hover:text-foreground">
            Shop
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </a>
          <a
            href="https://github.com/tranminhchien1802/Landingpage-tranminhchien"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
