import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { EASE_OUT } from "../motion";

export default function CountUp({ value, suffix = "", duration = 1.8, className }) {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString("ru-RU") + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration, mv]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
