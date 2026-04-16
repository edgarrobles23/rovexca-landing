import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    // In production: save to database, send email notification, etc.
    // For now, log and return success.
    console.log("[Lead captured]", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "¡Gracias! Te contactaremos en menos de 24h." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
