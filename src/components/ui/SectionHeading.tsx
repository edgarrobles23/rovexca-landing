interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.1em] uppercase mb-3 ${
            light ? "text-[#497cff]" : "text-[#497cff]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-[#1a1f2e]"
        }`}
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-[rgba(255,255,255,0.7)]" : "text-[#565e74]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
