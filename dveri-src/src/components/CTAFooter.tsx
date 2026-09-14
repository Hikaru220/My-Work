import { m } from "motion/react";
import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { BRAND, CONTACT, NAV_LINKS } from "../data/content";

export function CTAFooter() {
  return (
    <footer id="contact" className="bg-canvas-dusk text-canvas">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-36">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="label text-accent-soft">Обсудим ваш проём?</p>
          <h2 className="text-balance mt-5 font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            Замер по Бишкеку — в течение 48 часов, бесплатно.
          </h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-canvas transition-colors duration-300 hover:bg-whatsapp-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="label">Написать в WhatsApp</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-3 rounded-full border border-canvas/25 px-7 py-4 text-canvas transition-colors duration-300 hover:border-canvas"
            >
              <Phone size={15} />
              <span className="label">{CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </m.div>

        <div className="hairline-top mt-24 grid grid-cols-1 gap-10 border-canvas/10 pt-12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-semibold">{BRAND.name}</span>
            <p className="mt-3 max-w-[24ch] text-base leading-relaxed text-canvas/60">{BRAND.tagline}</p>
          </div>

          <div className="flex flex-col gap-3 text-base text-canvas/70">
            <span className="label mb-1 text-canvas/40">Навигация</span>
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href} className="w-fit transition-colors hover:text-accent-soft">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-base text-canvas/70">
            <span className="label mb-1 text-canvas/40">Контакты</span>
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 transition-colors hover:text-accent-soft">
              <Phone size={14} /> {CONTACT.phoneDisplay}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {CONTACT.city}, {CONTACT.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {CONTACT.hours}
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base text-canvas/70">
            <span className="label mb-1 text-canvas/40">Готовы начать</span>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition-colors hover:text-accent-soft"
            >
              Написать в WhatsApp
            </a>
            <a href="#collections" className="w-fit transition-colors hover:text-accent-soft">
              Смотреть каталог
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-sm text-canvas/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {BRAND.name}. Все права защищены.</span>
          <span>Демонстрационный сайт-пример</span>
        </div>
      </div>
    </footer>
  );
}
