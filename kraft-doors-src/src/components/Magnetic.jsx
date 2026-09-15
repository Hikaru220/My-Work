import { useRef } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ as = "button", strength = 14, className, children, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function handleMove(e) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = m[as] ?? m.button;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
