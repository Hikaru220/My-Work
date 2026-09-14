import { m } from "motion/react";
import { PROCESS_STEPS } from "../data/content";

export function Process() {
  return (
    <section id="process" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-accent">Как заказать</p>
            <h2 className="text-balance mt-4 max-w-lg font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
              От замера до установки — четыре шага
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <m.div
              key={step.index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="hairline-top border-ink/10 pt-6 lg:pr-6"
            >
              <span className="font-display text-lg text-accent-soft">{step.index}</span>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{step.text}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
