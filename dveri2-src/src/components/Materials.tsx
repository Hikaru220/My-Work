import { m } from "motion/react";
import { MATERIALS } from "../data/content";

export function Materials() {
  return (
    <section id="materials" className="bg-canvas-deep py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="label text-accent-soft">Отделки</p>
          <h2 className="text-balance mt-4 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Восемь оттенков — и любой RAL под заказ
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8 lg:mt-16 lg:grid-cols-8 lg:gap-x-6">
          {MATERIALS.map((material, i) => (
            <m.div
              key={material.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span
                className="h-14 w-14 rounded-full ring-1 ring-inset ring-ink/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-16 sm:w-16"
                style={{ backgroundColor: material.hex }}
              />
              <span className="text-sm leading-tight text-ink-soft">{material.name}</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
