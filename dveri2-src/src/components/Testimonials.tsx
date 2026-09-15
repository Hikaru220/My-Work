import { m } from "motion/react";
import { TESTIMONIALS } from "../data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-canvas-deep py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="label text-center text-accent-soft">Отзывы</p>
        <h2 className="text-balance mx-auto mt-4 max-w-xl text-center font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Что говорят те, кто уже открывает эти двери
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 lg:mt-20">
          {TESTIMONIALS.map((t, i) => (
            <m.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="hairline-top border-ink/10 pt-8"
            >
              <blockquote className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
                «{t.quote}»
              </blockquote>
              <figcaption className="mt-6">
                <p className="label !normal-case !tracking-normal text-ink">{t.author}</p>
                <p className="mt-0.5 text-base text-ink-soft">{t.context}</p>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
