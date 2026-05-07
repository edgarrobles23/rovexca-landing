import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — Rovexca Health",
  description:
    "Conoce cómo Rovexca Health recopila, usa y protege tus datos personales conforme a la legislación mexicana.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 48 }}>
      <h2 style={{
        fontSize: "clamp(16px, 2vw, 19px)", fontWeight: 700,
        color: "#00174b", marginBottom: 16,
        paddingBottom: 10, borderBottom: "2px solid #e8f0ff",
      }}>
        {title}
      </h2>
      <div className="legal-content">{children}</div>
    </section>
  );
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#f7f9fb", minHeight: "100vh", paddingTop: 68 }}>
        {/* Header */}
        <div style={{ background: "#00174b", padding: "64px 1.5rem 56px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>
              Legal
            </p>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>
              Política de Privacidad
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Última actualización: mayo de 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "56px 1.5rem 80px" }}>
          <div style={{
            background: "#fff", borderRadius: 16,
            padding: "clamp(28px, 5vw, 56px)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,23,75,0.06)",
          }}>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid #e5e7eb" }}>
              En Rovexca Health nos tomamos en serio la privacidad de quienes confían en nuestra plataforma. Este Aviso de Privacidad describe qué datos recopilamos, para qué los usamos y cómo los protegemos, en cumplimiento de la <strong style={{ color: "#0f172a" }}>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y demás normativa aplicable en México.
            </p>

            <Section id="responsable" title="1. Identidad del Responsable">
              <p>
                Rovexca Health es responsable del tratamiento de los datos personales que se recopilan a través de su plataforma SaaS de gestión clínica, accesible en <strong>rovexca.ai</strong> y sus subdominios.
              </p>
              <p>
                La plataforma opera bajo la legislación mexicana, incluyendo la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
              </p>
              <p>
                Para cualquier asunto relacionado con el tratamiento de tus datos personales, puedes contactarnos en: <strong>privacidad@rovexca.ai</strong>
              </p>
            </Section>

            <Section id="datos" title="2. Datos Personales que Recopilamos">
              <p>Rovexca Health recopila dos tipos de información:</p>
              <h3>Datos de los consultorios y médicos (usuarios de la plataforma)</h3>
              <ul>
                <li>Nombre completo del médico o administrador</li>
                <li>Correo electrónico y número de teléfono de contacto</li>
                <li>Información del consultorio o clínica (nombre, dirección, especialidad)</li>
                <li>Datos de facturación y pago (procesados de forma segura por terceros)</li>
                <li>Registros de uso de la plataforma (inicio de sesión, acciones realizadas, configuraciones)</li>
              </ul>
              <h3>Datos de los pacientes (gestionados por el consultorio)</h3>
              <ul>
                <li>Nombre completo</li>
                <li>Número de teléfono y correo electrónico</li>
                <li>Fecha y hora de citas médicas</li>
                <li>Médico asignado y motivo de consulta</li>
                <li>Notas clínicas y seguimiento de padecimientos crónicos</li>
                <li>Historial de citas</li>
                <li>Mensajes enviados y recibidos a través de WhatsApp</li>
              </ul>
              <p>
                Los datos de pacientes constituyen <strong>datos personales sensibles</strong> conforme a la LFPDPPP, ya que están relacionados con el estado de salud de las personas. Su tratamiento se realiza con estrictas medidas de seguridad y únicamente para los fines descritos en este aviso.
              </p>
            </Section>

            <Section id="finalidad" title="3. Finalidad del Tratamiento">
              <p>Los datos personales recopilados se utilizan para las siguientes finalidades:</p>
              <h3>Finalidades primarias (necesarias para el servicio)</h3>
              <ul>
                <li>Gestionar y administrar la agenda médica del consultorio</li>
                <li>Enviar recordatorios de cita, confirmaciones y notificaciones a pacientes</li>
                <li>Registrar y dar seguimiento a pacientes crónicos</li>
                <li>Generar reportes e indicadores de operación del consultorio</li>
                <li>Procesar pagos y emitir comprobantes de suscripción</li>
                <li>Brindar soporte técnico y atención al cliente</li>
              </ul>
              <h3>Finalidades secundarias (opcionales)</h3>
              <ul>
                <li>Enviar información sobre actualizaciones y nuevas funciones de la plataforma</li>
                <li>Mejorar el servicio a partir de datos agregados y anónimos de uso</li>
              </ul>
              <p>
                Puedes oponerte al tratamiento con fines secundarios enviando un correo a <strong>privacidad@rovexca.ai</strong> sin que esto afecte tu acceso a la plataforma.
              </p>
            </Section>

            <Section id="whatsapp" title="4. Uso de WhatsApp y Proveedores Externos">
              <p>
                Rovexca Health utiliza la <strong>API de WhatsApp Business</strong>, proporcionada por Meta Platforms, Inc., a través de proveedores autorizados como <strong>Twilio</strong>, para enviar recordatorios de cita, confirmaciones y mensajes de atención médica.
              </p>
              <p>Al usar esta funcionalidad, considera lo siguiente:</p>
              <ul>
                <li>Los mensajes se envían únicamente cuando el consultorio cuenta con el consentimiento del paciente para recibir comunicaciones por ese medio.</li>
                <li>El contenido puede incluir nombre del paciente, fecha de cita y nombre del médico o consultorio.</li>
                <li>Meta y Twilio actúan como encargados del tratamiento y están sujetos a sus propias políticas de privacidad.</li>
                <li>Rovexca Health no utiliza WhatsApp para fines de marketing sin consentimiento explícito.</li>
              </ul>
              <p>
                La plataforma también puede integrarse con proveedores de correo electrónico transaccional y herramientas de análisis. En todos los casos, se seleccionan proveedores con estándares de seguridad reconocidos.
              </p>
            </Section>

            <Section id="proteccion" title="5. Protección de los Datos Personales">
              <p>
                Rovexca Health implementa medidas técnicas, administrativas y físicas para proteger los datos contra acceso no autorizado, pérdida, alteración o divulgación indebida:
              </p>
              <ul>
                <li>Cifrado de datos en tránsito mediante protocolo TLS/HTTPS</li>
                <li>Almacenamiento seguro en infraestructura cloud con controles de acceso estrictos</li>
                <li>Acceso a los datos restringido al personal autorizado bajo principios de necesidad</li>
                <li>Respaldos periódicos y planes de recuperación ante desastres</li>
                <li>Monitoreo continuo de accesos y actividad sospechosa</li>
              </ul>
              <p>
                En caso de un incidente de seguridad que afecte datos personales, Rovexca Health notificará a los usuarios afectados conforme a la legislación aplicable.
              </p>
            </Section>

            <Section id="arco" title="6. Derechos ARCO">
              <p>
                Conforme a la LFPDPPP, tienes derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong> (derechos ARCO) al tratamiento de tus datos personales.
              </p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti y cómo los usamos.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos incorrectos o incompletos.</li>
                <li><strong>Cancelación:</strong> Pedir la eliminación de tus datos cuando ya no sean necesarios para el servicio.</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para finalidades específicas.</li>
              </ul>
              <p>
                Para ejercer estos derechos, envía tu solicitud a <strong>privacidad@rovexca.ai</strong> con el asunto "Solicitud ARCO", indicando tu nombre completo, el derecho que deseas ejercer y una descripción de los datos en cuestión.
              </p>
              <p>
                Atenderemos tu solicitud en un plazo máximo de <strong>20 días hábiles</strong> a partir de su recepción.
              </p>
            </Section>

            <Section id="conservacion" title="7. Conservación de la Información">
              <p>Los datos personales se conservan durante el tiempo necesario para cumplir con los fines del servicio:</p>
              <ul>
                <li><strong>Datos de cuenta y uso:</strong> durante la vigencia de la suscripción y hasta 2 años posteriores a la cancelación, salvo solicitud de eliminación anticipada.</li>
                <li><strong>Datos de pacientes:</strong> mientras el consultorio mantenga activa su cuenta o hasta que ejerza su derecho de cancelación.</li>
                <li><strong>Datos de facturación:</strong> conforme a los plazos establecidos por la legislación fiscal mexicana (generalmente 5 años).</li>
              </ul>
              <p>
                Una vez cumplidos los plazos, los datos son eliminados de forma segura o anonimizados para fines estadísticos.
              </p>
            </Section>

            <Section id="cambios" title="8. Cambios al Aviso de Privacidad">
              <p>
                Rovexca Health puede modificar este Aviso de Privacidad cuando sea necesario, por ejemplo, ante cambios en la legislación, en las funciones de la plataforma o en los proveedores de servicios.
              </p>
              <p>
                Cualquier modificación relevante será notificada mediante un aviso en la plataforma o por correo electrónico a la cuenta registrada del usuario.
              </p>
              <p>
                La versión más actualizada estará siempre disponible en <strong>rovexca.ai/privacidad</strong>. El uso continuado de la plataforma después de la notificación implica la aceptación de los cambios.
              </p>
            </Section>

            <Section id="contacto" title="9. Contacto">
              <p>Para cualquier pregunta o solicitud relacionada con el tratamiento de tus datos personales:</p>
              <ul>
                <li><strong>Correo electrónico:</strong> privacidad@rovexca.ai</li>
                <li><strong>Sitio web:</strong> rovexca.ai</li>
              </ul>
              <p>
                Si consideras que tu solicitud no fue atendida de forma satisfactoria, puedes acudir ante el <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong> para hacer valer tus derechos.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}