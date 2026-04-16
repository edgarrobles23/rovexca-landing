import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const backendUrl = process.env.BACKEND_URL ?? "http://localhost:3001";
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const res = await fetch(`${backendUrl}/api/trial/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": appUrl,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Error de conexión con el servidor. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
