"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  hlsSrc: string;
  fallbackSrc: string;
  poster?: string;
  id?: string;
  className?: string;
  showControls?: boolean;
  intersectionThreshold?: number;
}

export function VideoPlayer({
  hlsSrc,
  fallbackSrc,
  poster,
  id,
  className = "",
  showControls = true,
  intersectionThreshold = 0.3,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cleanup: (() => void) | undefined;

    async function setup() {
      const Hls = (await import("hls.js")).default;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsSrc);
        hls.attachMedia(video!);
        cleanup = () => hls.destroy();
      } else if (video!.canPlayType("application/vnd.apple.mpegurl")) {
        video!.src = hlsSrc;
      } else {
        video!.src = fallbackSrc;
      }
    }

    setup();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { root: null, threshold: intersectionThreshold }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      cleanup?.();
    };
  }, [hlsSrc, fallbackSrc, intersectionThreshold]);

  return (
    <video
      ref={videoRef}
      id={id}
      className={className}
      poster={poster}
      muted
      playsInline
      loop
      controls={showControls}
      controlsList="nodownload"
    />
  );
}
