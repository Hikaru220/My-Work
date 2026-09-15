import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { materials } from "../data/content";
import Reveal from "./Reveal";
import { EASE } from "../motion";
import "./Materials.css";

const marqueeWords = materials.map((mat) => mat.name);

export default function Materials() {
  const [active, setActive] = useState(0);
  const current = materials[active];

  return (
    <section id="materials" className="section materials">
      <div className="materials__marquee" aria-hidden="true">
        <div className="materials__marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="label gold">Материалы</p>
          <h2 className="section-title">Порода дерева определяет характер двери.</h2>
          <p className="section-lead">Выберите образец — расскажем, для какого интерьера он подходит.</p>
        </Reveal>

        <div className="materials__row">
          {materials.map((mat, i) => (
            <button
              key={mat.name}
              className="materials__swatch"
              data-active={i === active}
              onClick={() => setActive(i)}
            >
              <img src={mat.image} alt={mat.name} />
            </button>
          ))}
        </div>

        <div className="materials__info">
          <AnimatePresence mode="wait">
            <m.div
              key={current.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="materials__name">{current.name}</h3>
              <p className="materials__tone">{current.tone}</p>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
