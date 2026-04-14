"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "artyk-intro-played";

export function IntroVideoOverlay() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const alreadyPlayed = window.sessionStorage.getItem(STORAGE_KEY) === "true";
    if (alreadyPlayed) {
      return;
    }

    setVisible(true);
    const timer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // Autoplay may be blocked on some browsers; controls remain available.
      });
    }, 120);

    return () => window.clearTimeout(timer);
  }, []);

  const closeOverlay = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
    setClosing(true);
    window.setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 450);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[90] bg-black transition-opacity duration-500 ${closing ? "opacity-0" : "opacity-100"}`}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/videos/artyk-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={closeOverlay}
        onError={closeOverlay}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <button
        type="button"
        onClick={closeOverlay}
        className="absolute right-5 top-5 rounded-full border border-white/45 bg-black/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur"
      >
        Skip Intro
      </button>
    </div>
  );
}
