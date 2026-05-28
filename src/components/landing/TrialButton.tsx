"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TrialButton({
  label = "Prueba gratis 15 días — sin tarjeta",
  className = "btn-primary",
  style,
}: Props) {
  return (
    <button
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new CustomEvent("rovexca:open-trial"))}
    >
      {label}
      <ArrowRight size={16} />
    </button>
  );
}
