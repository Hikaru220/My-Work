import { Link } from "react-router-dom";
import { footerLinks, waLink } from "../data/content";
import { IconInstagram, IconTelegram, IconWhatsApp } from "./Icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="navbar__logo-mark">KRAFT</span>
          <p className="footer__tag">Дверная мануфактура полного цикла. Бишкек.</p>
        </div>

        <nav className="footer__links">
          {footerLinks.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer__social">
          <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <IconWhatsApp width={20} height={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="#" aria-label="Telegram">
            <IconTelegram />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} KRAFT. Все права защищены.</p>
        <p>Двери, которые определяют пространство.</p>
      </div>
    </footer>
  );
}
