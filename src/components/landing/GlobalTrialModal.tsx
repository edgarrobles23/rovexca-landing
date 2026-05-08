"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import TrialModal from "./TrialModal";

export default function GlobalTrialModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setOpen(true);
    window.addEventListener("rovexca:open-trial", fn);
    return () => window.removeEventListener("rovexca:open-trial", fn);
  }, []);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
      />
      <TrialModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}