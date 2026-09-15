import { useEffect } from "react";
import { contact, waLink } from "../data/content";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { IconArrowRight, IconInstagram, IconTelegram, IconWhatsApp } from "../components/Icons";
import "./ContactsPage.css";

export default function ContactsPage() {
  useEffect(() => {
    document.title = "Контакты — KRAFT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="page-content" className="contacts-page section">
      <div className="container contacts-page__inner">
        <Reveal as="div" className="section-head">
          <p className="label gold">Контакты</p>
          <h1 className="section-title">Свяжитесь с KRAFT</h1>
          <p className="section-lead">
            Быстрее всего — в WhatsApp: пришлите замеры или фото проёма, ответим в течение
            рабочего дня.
          </p>
        </Reveal>

        <Reveal as="div" delay={0.1} className="contacts-card">
          <Magnetic
            as="a"
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-wa contacts-card__whatsapp"
          >
            <IconWhatsApp width={22} height={22} />
            Написать в WhatsApp
            <IconArrowRight />
          </Magnetic>

          <div className="contacts-card__row">
            <span className="contacts-card__label">Телефон</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="contacts-card__value">
              {contact.phone}
            </a>
          </div>

          <hr className="hairline" />

          <div className="contacts-card__row">
            <span className="contacts-card__label">Часы работы</span>
            <span className="contacts-card__value">{contact.hours}</span>
          </div>

          <hr className="hairline" />

          <div className="contacts-card__row">
            <span className="contacts-card__label">Город</span>
            <span className="contacts-card__value">{contact.city}</span>
          </div>

          <div className="contacts-card__social">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="contacts-card__social-link">
              <IconInstagram width={18} height={18} />
              Instagram
            </a>
            <a href={contact.telegram} target="_blank" rel="noreferrer" className="contacts-card__social-link">
              <IconTelegram width={18} height={18} />
              Telegram
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
