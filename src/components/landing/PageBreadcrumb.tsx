// Server component — renders visual breadcrumb strip + BreadcrumbList JSON-LD.
// Place as first element inside <main> on internal pages.

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function PageBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.rovexca.ai${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          background: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
          padding: "10px 0",
        }}
      >
        <div className="container">
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li
                  key={item.href}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  {isLast ? (
                    <span
                      aria-current="page"
                      style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <a
                        href={item.href}
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                      >
                        {item.name}
                      </a>
                      <span style={{ color: "#d1d5db", fontSize: 12 }}>/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
