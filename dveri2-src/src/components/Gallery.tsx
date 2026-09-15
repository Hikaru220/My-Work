import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";
import { asset } from "../data/content";

const ITEMS = [
  {
    image: asset("/images/gallery-1.jpg"),
    title: "Тихий коридор",
    text: "Дверь работает заодно со светом и материалами комнаты — не спорит с интерьером.",
  },
  {
    image: asset("/images/gallery-2.jpg"),
    title: "Атмосфера, не только полотно",
    text: "Мы подбираем отделку под свет и мебель комнаты, а не только по каталогу.",
  },
  {
    image: asset("/images/gallery-3.jpg"),
    title: "Свет проходит, звук — нет",
    text: "Стеклянные вставки сохраняют приватность помещения, не забирая дневной свет.",
  },
];

function GalleryRow({ item, reverse }: { item: (typeof ITEMS)[number]; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/5] w-full overflow-hidden lg:w-3/5"
      >
        <m.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-[116%] w-full object-cover object-center"
          style={{ y }}
        />
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="lg:w-2/5"
      >
        <h3 className="font-display text-3xl font-medium text-ink sm:text-4xl">{item.title}</h3>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">{item.text}</p>
      </m.div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-canvas py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <p className="label text-accent-soft">Интерьеры</p>
        <h2 className="text-balance mt-4 max-w-lg font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Дверь как часть комнаты, а&nbsp;не витрина каталога
        </h2>

        <div className="mt-16 flex flex-col gap-24 lg:mt-24 lg:gap-32">
          {ITEMS.map((item, i) => (
            <GalleryRow key={item.image} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
