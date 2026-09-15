import { useCallback, useEffect } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { WaveLines } from "./WaveLines";
import { CONTACT, COLLECTIONS } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({
  index,
  onNavigate,
}: {
  index: number;
  onNavigate: (next: number) => void;
}) {
  const total = COLLECTIONS.length;
  const item = COLLECTIONS[index];

  const go = useCallback(
    (dir: 1 | -1) => onNavigate((index + dir + total) % total),
    [index, total, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") go(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[680px] w-full flex-col justify-end overflow-hidden bg-canvas-dusk"
    >
      <AnimatePresence mode="sync">
        <m.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="absolute inset-0"
        >
          <img
            src={item.image}
            alt={`Дверь ВЕРЕЯ, коллекция ${item.title}`}
            className="h-full w-full object-cover object-center"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-dusk from-10% via-canvas-dusk/55 via-45% to-canvas-dusk/10" />
        </m.div>
      </AnimatePresence>

      <WaveLines className="!inset-auto bottom-0 left-0 h-[65%] w-full" />

      {/* prev / next — stacked circular controls, right edge */}
      <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 sm:right-8 lg:right-10">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Предыдущая коллекция"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
        >
          <ChevronUp size={17} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Следующая коллекция"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-soft/70 text-ink transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
        >
          <ChevronDown size={17} strokeWidth={1.75} />
        </button>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-9 pt-28 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
        <div className="hairline-top flex items-center justify-between border-ink/15 pb-3">
          <span className="label text-ink-soft">ВЕРЕЯ · {item.title}</span>
          <span className="label tabular-nums text-ink-soft">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <m.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h1 className="mt-6 max-w-xl font-display text-[2.5rem] font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-[4.5rem]">
              {item.title}
            </h1>
            <p className="mt-3 font-display text-lg italic text-accent-soft sm:text-xl">{item.tagline}</p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">{item.blurb}</p>
            <a
              href="#collections"
              className="group mt-5 inline-flex items-center gap-2 text-ink transition-colors duration-300 hover:text-accent-soft"
            >
              <span>Смотреть коллекцию</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </m.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-whatsapp px-7 py-4 text-white transition-colors duration-300 hover:bg-whatsapp-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="label !text-[0.8rem]">Написать в WhatsApp</span>
          </a>
          <a
            href="#calculator"
            className="flex items-center justify-center gap-2 border border-ink/25 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink/60"
          >
            <span className="label !text-[0.8rem]">Рассчитать стоимость</span>
          </a>
        </div>
        <p className="mt-4 text-xs text-ink-faint">Отвечаем в течение рабочего дня</p>
      </div>
    </section>
  );
}
