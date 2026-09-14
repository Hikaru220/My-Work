import { m } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS, formatSom } from "../data/content";

const badgeTone: Record<string, string> = {
  Новинка: "bg-accent text-canvas",
  Хит: "bg-ink text-canvas",
  Премиум: "bg-olive text-canvas",
  Дизайн: "bg-canvas text-ink border border-ink/20",
};

export function Collections() {
  return (
    <section id="collections" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-accent">Каталог</p>
            <h2 className="text-balance mt-4 max-w-lg font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
              Шесть коллекций — от тихой классики до дизайнерской рейки
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-ink-soft">
            Каждое полотно собирается под размер вашего проёма. Показаны ориентировочные цены «от» — точная стоимость после замера.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
          {COLLECTIONS.map((item, i) => (
            <m.article
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
              className={i % 3 === 1 ? "lg:mt-16" : ""}
            >
              <a href="#contact" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-canvas-deep">
                  {item.badge && (
                    <span
                      className={`label absolute left-4 top-4 z-10 rounded-full px-3 py-1 !text-[0.72rem] ${badgeTone[item.badge]}`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={`Дверь ВЕРЕЯ, коллекция ${item.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-canvas text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink">{item.title}</h3>
                    <p className="mt-1 text-base text-ink-soft">
                      {item.finish} · полотно {item.thickness}
                    </p>
                  </div>
                  <p className="label whitespace-nowrap pt-1 text-ink">от {formatSom(item.priceFrom)}</p>
                </div>
              </a>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
