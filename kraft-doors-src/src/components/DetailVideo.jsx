import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import "./DetailVideo.css";

export default function DetailVideo({ src, poster, caption, aspect }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Reveal as="div" className="detail-video">
      <video
        ref={ref}
        className="detail-video__el"
        style={aspect ? { aspectRatio: aspect } : undefined}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
      />
      <p className="detail-video__caption">{caption}</p>
    </Reveal>
  );
}
