import { m } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS, formatSom } from "../data/content";

const badgeTone: Record<string, string> = {
  Новинка: "bg-accent text-canvas-dusk",
  Хит: "bg-ink text-canvas-dusk",
  Премиум: "bg-olive text-ink",
  Дизайн: "border border-ink/40 text-ink",
};

export function Collections() {
  return (
    <section id="collections" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-accent-soft">Каталог</p>
            <h2 className="text-balance mt-4 max-w-lg font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
              Шесть коллекций
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-ink-soft">
            Показаны ориентировочные цены «от» — точная стоимость после замера проёма.
          </p>
        </div>

        <div className="mt-14 lg:mt-20">
          {COLLECTIONS.map((item, i) => (
            <m.a
              key={item.id}
              href="#calculator"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 6) * 0.06 }}
              className="group hairline-top flex flex-col gap-4 border-ink/12 py-6 transition-colors duration-300 hover:bg-canvas-deep/60 sm:flex-row sm:items-center sm:gap-8 sm:py-7"
            >
              <span className="font-display text-lg text-ink-faint sm:w-12 sm:shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-24 sm:w-32">
                <img
                  src={item.image}
                  alt={`Дверь ВЕРЕЯ, коллекция ${item.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">{item.title}</h3>
                {item.badge && (
                  <span className={`label !text-[0.68rem] px-2.5 py-1 ${badgeTone[item.badge]}`}>{item.badge}</span>
                )}
                <span className="w-full text-sm text-ink-soft sm:w-auto">
                  {item.finish} · полотно {item.thickness}
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 sm:justify-end sm:gap-8">
                <span className="label whitespace-nowrap text-ink">от {formatSom(item.priceFrom)}</span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                />
              </div>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}
