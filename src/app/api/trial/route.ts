import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const backendUrl = process.env.BACKEND_URL ?? "http://localhost:3001";
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const targetUrl = `${backendUrl}/api/trial/register`;

  // ── Parse request body ──────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Solicitud inválida." }, { status: 400 });
  }

  console.log("[trial proxy] →", { targetUrl, appUrl });

  // ── Call backend ────────────────────────────────────────────────
  let res: Response;
  try {
    res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": appUrl,
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    // Network-level failure: DNS, connection refused, timeout, etc.
    console.error("[trial proxy] fetch failed:", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      { success: false, message: "No se pudo conectar con el servidor. Intenta nuevamente." },
      { status: 502 }
    );
  }

  // ── Read response safely (backend may return HTML on errors) ────
  const rawText = await res.text();
  console.log("[trial proxy] ←", { status: res.status, body: rawText.slice(0, 300) });

  let data: unknown;
  try {
    data = JSON.parse(rawText);
  } catch {
    // Backend returned non-JSON (HTML error page, plain text, etc.)
    console.error("[trial proxy] non-JSON response from backend:", rawText.slice(0, 200));
    return NextResponse.json(
      {
        success: false,
        message: res.ok
          ? "Respuesta inesperada del servidor. Intenta nuevamente."
          : `Error del servidor (${res.status}). Intenta nuevamente.`,
      },
      { status: res.status >= 400 ? res.status : 502 }
    );
  }

  // ── Forward backend response as-is ─────────────────────────────
  return NextResponse.json(data, { status: res.status });
}
