import { stats } from "../data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import "./StatsBar.css";

export default function StatsBar() {
  return (
    <section className="statsbar">
      <div className="container statsbar__grid">
        {stats.map((s, i) => (
          <Reveal as="div" key={s.label} delay={i * 0.08} y={18} className="statsbar__item">
            <span className="statsbar__value">
              <CountUp value={s.value} suffix={s.suffix} />
            </span>
            <span className="statsbar__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
