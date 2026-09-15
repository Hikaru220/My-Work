import { production } from "../data/content";
import Reveal from "./Reveal";
import "./Production.css";

export default function Production() {
  return (
    <section id="production" className="section production">
      <div className="container">
        <Reveal as="div" className="section-head">
          <p className="label gold">Производство</p>
          <h2 className="section-title">Свой цех. Свой контроль на каждом шаге.</h2>
          <p className="section-lead">
            Мы не пересобираем чужие полуфабрикаты — весь цикл, от бруса до готового полотна,
            происходит на одной площадке в Бишкеке.
          </p>
        </Reveal>

        <div className="production__list">
          {production.map((step, i) => (
            <div className="production__row" key={step.step} data-reverse={i % 2 === 1}>
              <Reveal as="div" className="production__media">
                <img src={step.image} alt={step.title} />
              </Reveal>

              <Reveal as="div" delay={0.1} className="production__text">
                <span className="production__step">{step.step}</span>
                <h3 className="production__title">{step.title}</h3>
                <p className="production__desc">{step.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
