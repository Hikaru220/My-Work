import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import { STATS } from "../data/content";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const viewTargetRef = useRef<HTMLSpanElement>(null);
  const digitRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(viewTargetRef, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, { duration: 1.5, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [isInView, value, motionValue]);

  useMotionValueEvent(rounded, "change", (latest) => {
    if (digitRef.current) digitRef.current.textContent = latest;
  });

  return (
    <span ref={viewTargetRef} className="inline-flex items-baseline">
      <span ref={digitRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export function TrustStrip() {
  return (
    <section id="trust" className="bg-canvas-deep hairline hairline-top">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:gap-x-10 lg:px-10 lg:py-16">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-semibold text-accent-soft sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 max-w-[16ch] text-base leading-snug text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
