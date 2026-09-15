import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { EASE, DUR } from "../motion";

// Framer's own `whileInView` can silently never fire for some elements —
// especially right after a route change, where content can land already
// on screen before the observer's first tick — leaving it stuck at its
// hidden initial state forever. Driving visibility off a plain, hand-rolled
// IntersectionObserver (checking for "already on screen" up front) and
// feeding the result into `animate` instead sidesteps that whole class of
// bug: `animate` is driven directly by React state, not by an observer
// framer manages internally.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  amount = 0.25,
  className,
  as = "div",
  ...props
}) {
  const Comp = m[as] ?? m.div;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: amount }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: DUR.m, ease: EASE, delay }}
      {...props}
    >
      {children}
    </Comp>
  );
}
