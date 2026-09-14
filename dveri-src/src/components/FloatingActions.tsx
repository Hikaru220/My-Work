import { m } from "motion/react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { CONTACT } from "../data/content";

export function FloatingActions() {
  return (
    <>
      {/* Mobile: calculator shortcut sits just above the full-width WhatsApp bar */}
      <m.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileTap={{ scale: 0.95 }}
        href="#calculator"
        aria-label="Рассчитать стоимость"
        className="fixed bottom-[5.75rem] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-canvas text-ink shadow-[0_8px_20px_-6px_rgba(36,31,26,0.35)] ring-1 ring-ink/10 lg:hidden"
      >
        <CalculatorIcon size={19} strokeWidth={1.75} />
      </m.a>

      {/* Mobile: full-width bottom bar, impossible to scroll past unnoticed */}
      <m.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-canvas-dusk/95 fixed inset-x-0 bottom-0 z-40 border-t border-canvas/10 px-4 backdrop-blur-sm lg:hidden"
        style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)", paddingTop: "0.75rem" }}
      >
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-whatsapp py-4 text-canvas active:bg-whatsapp-deep"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span className="text-base font-semibold tracking-wide">Написать в WhatsApp</span>
        </a>
      </m.div>

      {/* Desktop: calculator shortcut stacked above the WhatsApp pill */}
      <m.a
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href="#calculator"
        className="fixed bottom-[6.75rem] right-8 z-40 hidden items-center gap-3 rounded-full bg-canvas py-3 pl-4 pr-5 text-ink shadow-[0_10px_26px_-10px_rgba(36,31,26,0.4)] ring-1 ring-ink/10 transition-colors duration-300 hover:ring-accent lg:flex"
      >
        <CalculatorIcon size={18} strokeWidth={1.75} />
        <span className="label !tracking-[0.1em]">Рассчитать стоимость</span>
      </m.a>

      {/* Desktop: floating pill, bottom-right, with a quiet pulsing ring */}
      <m.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-ring group fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-whatsapp py-4 pl-4 pr-6 text-canvas shadow-[0_12px_32px_-8px_rgba(37,211,102,0.45)] lg:flex"
      >
        <span className="relative z-10 flex h-8 w-8 items-center justify-center">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="relative z-10 label !tracking-[0.1em]">Написать в WhatsApp</span>
      </m.a>
    </>
  );
}
