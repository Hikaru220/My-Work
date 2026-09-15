import { m, useScroll, useTransform } from "framer-motion";
import { waLink } from "../data/content";
import { IconWhatsApp } from "./Icons";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const href = waLink();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 260, 480], [0, 0, 1]);
  const pointerEvents = useTransform(scrollY, (v) => (v > 260 ? "auto" : "none"));

  return (
    <>
      <m.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        aria-label="Написать в WhatsApp"
        style={{ opacity, pointerEvents }}
      >
        <span className="wa-float__ring" aria-hidden="true" />
        <IconWhatsApp width={26} height={26} />
      </m.a>

      <a href={href} target="_blank" rel="noreferrer" className="wa-bar" aria-label="Написать в WhatsApp">
        <span className="wa-bar__pulse" aria-hidden="true" />
        <span className="wa-bar__icon">
          <IconWhatsApp width={20} height={20} />
        </span>
        <span className="wa-bar__text">
          <span className="wa-bar__title">Написать в WhatsApp</span>
        </span>
      </a>
    </>
  );
}
