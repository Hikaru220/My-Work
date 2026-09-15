import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { reviews } from "../data/content";
import Reveal from "./Reveal";
import { EASE } from "../motion";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % reviews.length), 6500);
    return () => clearInterval(id);
  }, []);

  const item = reviews[index];

  return (
    <section id="reviews" className="section reviews">
      <div className="container reviews__inner">
        <Reveal as="div" className="section-head">
          <p className="label gold">Отзывы</p>
          <h2 className="section-title">Что говорят те, кто уже открыл эту дверь</h2>
        </Reveal>

        <div className="reviews__card">
          <span className="reviews__quote-mark">“</span>
          <AnimatePresence mode="wait">
            <m.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="reviews__text">{item.text}</p>
              <p className="reviews__author">
                {item.name} <span>· {item.role}</span>
              </p>
            </m.div>
          </AnimatePresence>

          <div className="reviews__dots">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                aria-label={`Отзыв ${i + 1}`}
                data-active={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
