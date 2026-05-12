import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassPanel({ children, className = "", glow = false }: GlassPanelProps) {
  return (
    <div className={`glass-panel rounded-xl border border-outline-variant/30 ${glow ? "glow-active" : ""} ${className}`}>
      {children}
    </div>
  );
}
