import { useEffect, useState } from "react";
import { m } from "motion/react";
import { Menu, Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { BRAND, CONTACT, NAV_LINKS } from "../data/content";

export function Header({ onMenuOpen }: { onMenuOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header floats transparently over the dark hero photo at the top of the
  // page, then becomes an opaque light bar once scrolled — text color has
  // to flip with it or it reads as low-contrast in one of the two states.
  const strong = scrolled ? "text-ink" : "text-canvas";
  const soft = scrolled ? "text-ink-soft" : "text-canvas/85";
  const border = scrolled ? "border-ink/15" : "border-canvas/35";

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-canvas/90 backdrop-blur-md hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-8">
        <a
          href="#top"
          className={`shrink-0 font-display text-xl font-semibold tracking-wide transition-colors duration-500 sm:text-2xl ${strong}`}
        >
          {BRAND.name}
        </a>

        <nav className="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`label whitespace-nowrap transition-colors duration-300 hover:text-accent ${soft}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:gap-5 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className={`label flex items-center gap-2 whitespace-nowrap transition-colors duration-300 hover:text-accent ${strong}`}
          >
            <Phone size={14} strokeWidth={2} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-5 py-2.5 text-canvas transition-colors duration-300 hover:bg-whatsapp-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="label !tracking-[0.14em]">Написать</span>
          </a>
        </div>

        <button
          type="button"
          onClick={onMenuOpen}
          aria-label="Открыть меню"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden ${border} ${strong}`}
        >
          <Menu size={20} strokeWidth={1.75} />
        </button>
      </div>
    </m.header>
  );
}
