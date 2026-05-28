"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

function Item({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "1.5px solid #e5e7eb",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "20px 24px",
          background: open ? "#f8fafc" : "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", lineHeight: 1.4 }}>{q}</span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: open ? "#2563eb" : "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke={open ? "#fff" : "#6b7280"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px", background: "#f8fafc" }}>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ModulePageFAQ({ items }: { items: FAQItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map(({ q, a }) => (
        <Item key={q} q={q} a={a} />
      ))}
    </div>
  );
}
