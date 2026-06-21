import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import partyAidLogo from "@/imports/party_aid_logo_final_png.png";

export default function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-hidden relative"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #020c1b 55%, #061528 55%)",
          }}
        />
        {/* Glowing orbs */}
        <div
          className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #1a6fff 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-80px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #00cfff 0%, transparent 70%)",
          }}
        />
        {/* Thin grid lines for texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <div className="flex items-center gap-2">
          <ImageWithFallback
            src={partyAidLogo}
            alt="Party Aid logo"
            className="h-28 w-auto object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          
          <a href="#" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Now accepting early sign-ups
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.8rem,10vw,6.5rem)] leading-none font-black uppercase tracking-tight mb-0"
          style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "-0.01em" }}
        >
          <span className="block text-foreground">Party</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "2px #1a6fff",
              color: "transparent",
            }}
          >
            Aid
          </span>
        </h1>

        {/* Accent bar */}
        <div className="flex items-center gap-3 mt-6 mb-8">
          <div className="h-px w-12 bg-accent opacity-60" />
          <p
            className="text-base md:text-lg text-muted-foreground max-w-xs md:max-w-md"
            style={{ fontWeight: 300, letterSpacing: "0.01em" }}
          >
            Connecting people to the right places
          </p>
          <div className="h-px w-12 bg-accent opacity-60" />
        </div>

        {/* CTA */}
        <a
            href="https://forms.gle/YgozUx5br7EHJ2FC8"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-block rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              background: hovered ? "#00cfff" : "#1a6fff",
              color: hovered ? "#020c1b" : "#ffffff",
              boxShadow: hovered
                ? "0 0 40px rgba(0,207,255,0.45)"
                : "0 0 40px rgba(26,111,255,0.4)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          >
            <span className="tracking-wide">Register Early for Discounts</span>
          </a>

        {/* Social proof */}
        
      </main>

      {/* Bottom strip */}
      
    </div>
  );
}
