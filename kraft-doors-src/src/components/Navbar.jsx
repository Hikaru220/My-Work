import { useState } from "react";
import { NavLink } from "react-router-dom";
import { m, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { nav, waLink } from "../data/content";
import { IconMenu, IconClose, IconArrowRight, IconWhatsApp } from "./Icons";
import Magnetic from "./Magnetic";
import { EASE } from "../motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  const bgAlpha = useTransform(scrollY, [0, 140], [0, 0.97]);
  const borderAlpha = useTransform(scrollY, [0, 140], [0, 0.12]);
  const solidBackground = useMotionTemplate`rgba(10, 10, 9, ${bgAlpha})`;
  const borderColor = useMotionTemplate`rgba(243, 238, 228, ${borderAlpha})`;

  return (
    <>
      <m.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <m.header className="navbar" style={{ borderColor }}>
        <m.div className="navbar__solid" style={{ background: solidBackground }} aria-hidden="true" />
        <div className="container navbar__inner">
          <NavLink to={nav[0].href} className="navbar__logo">
            <span className="navbar__logo-mark">KRAFT</span>
            <span className="navbar__logo-sub">Дверная мануфактура</span>
          </NavLink>

          <nav className="navbar__links">
            {nav.map((item) => (
              <NavLink key={item.href} to={item.href} className="navbar__link">
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <span className="navbar__city">Бишкек</span>
            <Magnetic
              as="a"
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa navbar__cta"
              strength={10}
            >
              <IconWhatsApp width={16} height={16} />
              Написать
            </Magnetic>

            <button
              className="navbar__burger"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="mobile-menu__top container">
              <span className="navbar__logo-mark">KRAFT</span>
              <button className="navbar__burger" aria-label="Закрыть меню" onClick={() => setOpen(false)}>
                <IconClose />
              </button>
            </div>

            <m.nav
              className="mobile-menu__links"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {nav.map((item, i) => (
                <m.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  <NavLink to={item.href} className="mobile-menu__link" onClick={() => setOpen(false)}>
                    <span className="mobile-menu__index">0{i + 1}</span>
                    {item.label}
                    <IconArrowRight className="mobile-menu__arrow" />
                  </NavLink>
                </m.div>
              ))}
            </m.nav>

            <div className="mobile-menu__bottom">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa mobile-menu__cta">
                <IconWhatsApp width={18} height={18} />
                Написать в WhatsApp
              </a>
              <p className="mobile-menu__note">Бишкек, ул. Фучика, 45 · Пн–Сб, 09:00–19:00</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
