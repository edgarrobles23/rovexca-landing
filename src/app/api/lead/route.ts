import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validations/lead";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = "edgar.roblesrdz@gmail.com";
const FROM = "Rovexca Health <notificaciones@notifications.rovexca.ai>";

const tamanoLabel: Record<string, string> = {
  "solo": "Solo yo (1 médico)",
  "2-5": "2–5 médicos",
  "6-10": "6–10 médicos",
  "mas-10": "Más de 10 médicos",
};

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: "Datos incompletos." }, { status: 400 });
  }

  const { nombre, especialidad, telefono, email, tamano } = parsed.data;

  try {
    await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `🩺 Nueva solicitud de demo — ${nombre}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#f8fafc;border-radius:12px;">
          <div style="background:#fff;border-radius:10px;padding:28px 24px;border:1px solid #e5e7eb;">
            <h2 style="margin:0 0 4px;color:#0f172a;font-size:20px;">Nueva solicitud de demo</h2>
            <p style="margin:0 0 24px;color:#6b7280;font-size:13px;">Rovexca Health · Landing page</p>

            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:13px;width:40%;">Nombre</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;font-weight:600;">${nombre}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:13px;">Especialidad</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;">${especialidad}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:13px;">Teléfono</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;">${telefono}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:13px;">Correo</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;">${email}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;font-size:13px;">Consultorio</td>
                  <td style="padding:10px 0;color:#0f172a;font-size:14px;">${tamanoLabel[tamano] ?? tamano}</td></tr>
            </table>

            <div style="margin-top:24px;text-align:center;">
              <a href="mailto:${email}?subject=Tu demo con Rovexca Health"
                 style="display:inline-block;background:#2563eb;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                Responder a ${nombre.split(" ")[0]}
              </a>
            </div>
          </div>

          <p style="text-align:center;color:#9ca3af;font-size:11px;margin-top:16px;">
            Rovexca Health · rovexca.ai
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[lead] Resend error:", err);
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }

  console.log("[lead] Demo request sent:", { nombre, email, especialidad, tamano });

  return NextResponse.json(
    { success: true, message: "¡Gracias! Te contactaremos en menos de 24h." },
    { status: 201 }
  );
}
