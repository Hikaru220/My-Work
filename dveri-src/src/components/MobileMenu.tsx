import { AnimatePresence, m, type Variants } from "motion/react";
import { X, Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { BRAND, CONTACT, NAV_LINKS } from "../data/content";

const quiet = [0.16, 1, 0.3, 1] as const;

const panelVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: quiet },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: quiet } },
  exit: { y: 12, opacity: 0, transition: { duration: 0.25 } },
};

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-canvas-dusk fixed inset-0 z-50 flex flex-col text-canvas lg:hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <span className="font-display text-xl font-semibold tracking-wide">{BRAND.name}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть меню"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-canvas/20 text-canvas transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              <X size={20} strokeWidth={1.75} />
            </button>
          </div>

          <m.nav
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8"
          >
            {NAV_LINKS.map((link) => (
              <m.a
                key={link.href}
                variants={itemVariants}
                href={link.href}
                onClick={onClose}
                className="hairline-top border-canvas/10 py-4 font-display text-4xl font-medium text-canvas/90 transition-colors first:shadow-none hover:text-accent-soft"
              >
                {link.label}
              </m.a>
            ))}
          </m.nav>

          <m.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-3 px-5 pb-10 pt-4 sm:px-8"
          >
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-4 text-canvas transition-colors hover:bg-whatsapp-deep"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="label !text-sm">Написать в WhatsApp</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-3 rounded-full border border-canvas/20 px-6 py-4 text-canvas transition-colors hover:border-accent-soft hover:text-accent-soft"
            >
              <Phone size={17} strokeWidth={1.75} />
              <span className="label !text-sm">{CONTACT.phoneDisplay}</span>
            </a>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
