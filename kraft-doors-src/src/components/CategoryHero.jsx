import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { pages, waLink, CONTACTS_ROUTE } from "../data/content";
import Magnetic from "./Magnetic";
import { IconArrowRight, IconChevronDown, IconInstagram, IconTelegram, IconWhatsApp } from "./Icons";
import { EASE } from "../motion";
import "./CategoryHero.css";

const WIPE_MS = 1100;
const LOCK_MS = 1150;

const pad = (n) => String(n).padStart(2, "0");

function indexForPath(pathname) {
  const i = pages.findIndex((p) => p.route === pathname);
  return i === -1 ? 0 : i;
}


export default function CategoryHero() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeIndex = indexForPath(location.pathname);

  const [prevIndex, setPrevIndex] = useState(null);
  const timeoutRef = useRef();
  const lockRef = useRef(false);
  const indexRef = useRef(activeIndex);
  const prevPathRef = useRef(location.pathname);
  const stageRef = useRef(null);
  indexRef.current = activeIndex;

  // Any route change — arrow click, nav link, browser back/forward — plays
  // the same wipe, driven off the URL rather than local UI state.
  useEffect(() => {
    if (prevPathRef.current === location.pathname) return;
    const fromIndex = indexForPath(prevPathRef.current);
    prevPathRef.current = location.pathname;
    if (fromIndex === activeIndex) return;
    lockRef.current = true;
    setPrevIndex(fromIndex);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPrevIndex(null);
      lockRef.current = false;
    }, LOCK_MS);
  }, [location.pathname, activeIndex]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function goTo(next) {
    const total = pages.length;
    const clamped = ((next % total) + total) % total;
    if (clamped === indexRef.current || lockRef.current) return;
    navigate(pages[clamped].route);
  }

  // Desktop wheel: one tick = one category page. Falls through to normal
  // page scroll once you're past the first/last category.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    function onWheel(e) {
      const total = pages.length;
      if (e.deltaY > 8 && indexRef.current < total - 1) {
        e.preventDefault();
        goTo(indexRef.current + 1);
      } else if (e.deltaY < -8 && indexRef.current > 0) {
        e.preventDefault();
        goTo(indexRef.current - 1);
      }
    }
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowDown") goTo(indexRef.current + 1);
      if (e.key === "ArrowUp") goTo(indexRef.current - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Background videos only need to decode while the stage is on screen —
  // pausing off-screen saves battery/CPU and avoids driving GPU video
  // layers that never get painted.
  const visibleRef = useRef(true);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        el.querySelectorAll("video").forEach((v) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || visibleRef.current) return;
    el.querySelectorAll("video").forEach((v) => v.pause());
  }, [activeIndex, prevIndex]);

  // Idle autoplay: cycle to the next page on its own so a visitor who never
  // touches anything doesn't just sit looking at the same category forever.
  // Any navigation (auto or manual) resets the countdown; it only fires
  // while the hero itself is on screen, so it never yanks someone away
  // while they're reading the catalog further down the page.
  useEffect(() => {
    const id = setTimeout(() => {
      // Only auto-advance while the visitor is still parked at the very
      // top — the moment they scroll even a little, they're reading, not
      // idling, so leave the page alone.
      if (lockRef.current || window.scrollY > 40) return;
      goTo(indexRef.current + 1);
    }, 7000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const page = pages[activeIndex];
  const prevPage = prevIndex !== null ? pages[prevIndex] : null;

  return (
    <section id="top" ref={stageRef} className="category-hero">
      <div className="category-hero__stage">
        {prevPage && (
          <div className="category-hero__layer" style={{ zIndex: 1 }}>
            <video className="category-hero__video" src={prevPage.video} poster={prevPage.poster} autoPlay muted loop playsInline />
          </div>
        )}
        <m.div
          key={page.key}
          className="category-hero__layer"
          style={{ zIndex: 2 }}
          initial={prevPage ? { clipPath: "inset(0 100% 0 0)" } : false}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: WIPE_MS / 1000, ease: EASE }}
        >
          <video className="category-hero__video" src={page.video} poster={page.poster} autoPlay muted loop playsInline />
        </m.div>
        <div className="category-hero__grain" />
        <div className="category-hero__gradient" />
      </div>

      <div className="container category-hero__content">
        <AnimatePresence mode="wait">
          <m.div
            key={page.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="category-hero__eyebrow-row">
              <p className="label gold">{page.kicker}</p>
              <span className="category-hero__count-inline">
                {pad(activeIndex + 1)} / {pad(pages.length)}
              </span>
            </div>
            <h1 className="category-hero__title">{page.title}</h1>
            <p className="category-hero__tagline">{page.tagline}</p>
            <p className="category-hero__desc">{page.desc}</p>
            <a href="#page-content" className="btn btn-text category-hero__link">
              {page.cta}
              <IconArrowRight />
            </a>
          </m.div>
        </AnimatePresence>
      </div>

      <div className="category-hero__arrows">
        <button aria-label="Предыдущая страница" onClick={() => goTo(activeIndex - 1)}>
          <IconChevronDown style={{ transform: "rotate(180deg)" }} />
        </button>
        <button aria-label="Следующая страница" onClick={() => goTo(activeIndex + 1)}>
          <IconChevronDown />
        </button>
      </div>

      <div className="container category-hero__bottombar">
        <span className="category-hero__counter">
          {pad(activeIndex + 1)} / {pad(pages.length)}
        </span>

        <div className="category-hero__actions">
          <Link to={CONTACTS_ROUTE} className="btn btn-ghost">
            Контакты
          </Link>
          <Magnetic as="a" href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa" strength={10}>
            Оставить заявку
            <IconArrowRight />
          </Magnetic>
        </div>

        <div className="category-hero__social">
          <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <IconWhatsApp width={17} height={17} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconInstagram width={16} height={16} />
          </a>
          <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
            <IconTelegram width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function about_route() {
  return pages.find((p) => p.key === "about")?.route ?? "/o-nas";
}
