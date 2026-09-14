import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { asset, CONTACT } from "../data/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.75]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-canvas-dusk"
    >
      <m.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={asset("/images/hero.jpg")}
          alt="Открытая дверь ВЕРЕЯ в тёплой гостиной"
          className="h-[120%] w-full object-cover object-center"
          fetchPriority="high"
        />
      </m.div>
      <m.div
        className="absolute inset-0 bg-gradient-to-t from-[#150f0a] via-[#150f0a]/35 to-[#150f0a]/10"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <p
          className="rise-in label text-accent-soft"
          style={{ animationDelay: "0.15s" }}
        >
          Ателье межкомнатных дверей · Бишкек
        </p>
        <h1
          className="rise-in text-balance mt-5 max-w-3xl font-display text-[2.75rem] font-medium leading-[1.05] text-canvas sm:text-6xl lg:text-[5.25rem]"
          style={{ animationDelay: "0.3s" }}
        >
          Тишина начинается с&nbsp;порога.
        </h1>
        <p
          className="rise-in mt-6 max-w-md text-base leading-relaxed text-canvas/80 sm:text-lg"
          style={{ animationDelay: "0.5s" }}
        >
          Двери ручной сборки из массива и шпона — по размерам вашего проёма,
          с установкой «под ключ» в Бишкеке.
        </p>

        <div
          className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.68s" }}
        >
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
            href="#collections"
            className="group flex items-center justify-center gap-2 rounded-full border border-canvas/30 px-7 py-4 text-canvas transition-colors duration-300 hover:border-canvas"
          >
            <span className="label">Смотреть коллекции</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <m.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-5 z-10 hidden items-center gap-2 text-canvas/70 sm:right-8 lg:flex lg:right-10"
        aria-label="Пролистать вниз"
      >
        <span className="label !text-xs">Листайте</span>
        <m.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </m.span>
      </m.a>
    </section>
  );
}
