import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { waLink } from "../data/content";
import { IconArrowRight } from "./Icons";
import { EASE } from "../motion";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  const [active, setActive] = useState(0);
  const current = products[active];

  return (
    <div className="product-picker">
      <div className="product-picker__list">
        {products.map((p, i) => (
          <button
            key={p.name}
            className="product-item"
            data-active={i === active}
            onClick={() => setActive(i)}
          >
            <span className="product-item__index">{String(i + 1).padStart(3, "0")}</span>
            <span className="product-item__name">{p.name}</span>
            {i === active && <IconArrowRight className="product-item__arrow" />}
          </button>
        ))}
      </div>

      <div className="product-picker__stage">
        <AnimatePresence mode="wait">
          <m.div
            key={current.name}
            className="product-picker__frame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <img src={current.image} alt={current.name} />
            <div className="product-picker__caption">
              <p className="product-picker__desc">{current.desc}</p>
              <div className="product-picker__foot">
                <span className="product-picker__price">{current.price}</span>
                <a
                  href={waLink(`Здравствуйте! Хочу узнать подробнее про модель «${current.name}».`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa product-picker__cta"
                >
                  Подробнее
                  <IconArrowRight />
                </a>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
