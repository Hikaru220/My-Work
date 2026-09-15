import { useRef } from "react";
import { projects } from "../data/content";
import Reveal from "./Reveal";
import { IconArrowRight } from "./Icons";
import "./Projects.css";

export default function Projects() {
  const trackRef = useRef(null);

  function scrollBy(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".projects__card");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <section id="projects" className="section projects">
      <div className="container projects__head-row">
        <Reveal as="div" className="section-head" style={{ marginBottom: 0 }}>
          <p className="label gold">Проекты</p>
          <h2 className="section-title">Двери KRAFT в реальных интерьерах</h2>
        </Reveal>

        <div className="projects__nav">
          <button aria-label="Назад" onClick={() => scrollBy(-1)}>
            <IconArrowRight style={{ transform: "rotate(180deg)" }} />
          </button>
          <button aria-label="Далее" onClick={() => scrollBy(1)}>
            <IconArrowRight />
          </button>
        </div>
      </div>

      <div className="projects__track" ref={trackRef}>
        {projects.map((p, i) => (
          <Reveal as="article" delay={i * 0.05} y={20} key={p.title} className="projects__card">
            <div className="projects__media">
              <img src={p.image} alt={p.title} />
            </div>
            <p className="projects__tag">{p.tag}</p>
            <h3 className="projects__title">{p.title}</h3>
          </Reveal>
        ))}
        <div className="projects__spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
