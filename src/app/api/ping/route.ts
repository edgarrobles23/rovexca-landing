import { NextResponse } from "next/server";

export async function GET() {
  const backendUrl = process.env.BACKEND_URL ?? "(no configurado)";
  const target = `${backendUrl}/api/trial/register`;

  let reachable = false;
  let status = 0;
  let error = "";

  try {
    const res = await fetch(target, { method: "GET" });
    reachable = true;
    status = res.status; // Esperamos 405 (Method Not Allowed)
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  return NextResponse.json({
    backendUrl,
    target,
    reachable,
    status,
    error: error || null,
    note: "status 405 = backend accesible (solo acepta POST). Cualquier otro error = problema de red.",
  });
}
