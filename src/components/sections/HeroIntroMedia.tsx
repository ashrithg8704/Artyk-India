"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  fallbackPoster: string;
};

export function HeroIntroMedia({ fallbackPoster }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState("/videos/artyk-intro-desktop.mp4");
  const [revealVideo, setRevealVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [forceReveal, setForceReveal] = useState(false);
  const [posterSrc, setPosterSrc] = useState(fallbackPoster);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateSource = () => {
      setVideoSrc(media.matches ? "/videos/artyk-intro-mobile.mp4" : "/videos/artyk-intro-desktop.mp4");
    };

    updateSource();
    media.addEventListener("change", updateSource);

    return () => media.removeEventListener("change", updateSource);
  }, []);

  useEffect(() => {
    setVideoReady(false);
    setForceReveal(false);

    const timer = window.setTimeout(() => {
      setRevealVideo(true);
    }, 2000);

    const forceTimer = window.setTimeout(() => {
      setForceReveal(true);
    }, 3200);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(forceTimer);
    };
  }, [videoSrc]);

  useEffect(() => {
    if (!revealVideo || !videoReady) return;
    videoRef.current?.play().catch(() => {
      // Some browsers still gate autoplay until first interaction.
    });
  }, [revealVideo, videoReady]);

  const canShowVideo = revealVideo && (videoReady || forceReveal);
  const showPoster = !canShowVideo;

  return (
    <>
      <video
        ref={videoRef}
        key={videoSrc}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${showPoster ? "opacity-0" : "opacity-100"}`}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={fallbackPoster}
        onLoadedMetadata={() => setVideoReady(true)}
        onCanPlay={() => setVideoReady(true)}
        onLoadedData={() => setVideoReady(true)}
        onError={() => {
          setVideoSrc("/videos/artyk-intro.mp4");
          setForceReveal(true);
        }}
      />
      <div className={`absolute inset-0 transition-opacity duration-300 ${showPoster ? "opacity-100" : "opacity-0"}`}>
        <img
          src={posterSrc}
          alt="Artyk intro"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onError={() => setPosterSrc("/videos/artyk-intro-poster.jpg")}
        />
      </div>
    </>
  );
}
