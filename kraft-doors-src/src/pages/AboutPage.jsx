import { useEffect } from "react";
import { Link } from "react-router-dom";
import { about, CONTACTS_ROUTE } from "../data/content";
import Reveal from "../components/Reveal";
import StatsBar from "../components/StatsBar";
import Production from "../components/Production";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import { IconArrowRight } from "../components/Icons";
import DetailVideo from "../components/DetailVideo";
import "./AboutPage.css";

export default function AboutPage() {
  useEffect(() => {
    document.title = "О нас — KRAFT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="page-content">
      <section className="section about-intro">
        <div className="container about-intro__inner">
          <Reveal as="div" className="section-head">
            <p className="label gold">Кто мы</p>
            <h2 className="section-title">{about.title}</h2>
            <p className="section-lead">{about.intro}</p>
          </Reveal>

          <div className="about-reel">
            <DetailVideo
              src="videos/kraft-promo.mp4"
              poster="videos/kraft-promo-poster.jpg"
              caption="Коротко о KRAFT — 12 секунд."
              aspect="16 / 9"
            />
          </div>
        </div>
      </section>

      <StatsBar />
      <Production />

      <section className="section quote">
        <div className="container">
          <Reveal as="blockquote" className="quote__box">
            <span className="quote__mark">“</span>
            <p className="quote__text">{about.quote.text}</p>
            <cite className="quote__author">{about.quote.author}</cite>
          </Reveal>
        </div>
      </section>

      <Projects />
      <Testimonials />

      <section className="section about-cta">
        <div className="container about-cta__inner">
          <Reveal as="div" style={{ marginBottom: 0 }}>
            <h2 className="section-title">Остались вопросы?</h2>
            <p className="section-lead" style={{ marginBottom: 28 }}>
              Телефон, WhatsApp и соцсети — на отдельной странице контактов.
            </p>
            <Link to={CONTACTS_ROUTE} className="btn btn-wa">
              Контакты
              <IconArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
