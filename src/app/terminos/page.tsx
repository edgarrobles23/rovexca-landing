import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Rovexca Health",
  description:
    "Conoce los términos y condiciones que rigen el uso de la plataforma Rovexca Health para consultorios médicos y clínicas.",
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

export default function TerminosPage() {
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
              Términos y Condiciones
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
              Los presentes Términos y Condiciones regulan el acceso y uso de <strong style={{ color: "#0f172a" }}>Rovexca Health</strong>, plataforma SaaS de gestión clínica para consultorios médicos y clínicas. Al acceder o usar la plataforma, aceptas en su totalidad estos términos. Si no estás de acuerdo, te pedimos que no uses el servicio.
            </p>

            <Section id="aceptacion" title="1. Aceptación del Servicio">
              <p>
                Al registrarte, acceder o utilizar cualquier función de Rovexca Health, declaras que:
              </p>
              <ul>
                <li>Tienes capacidad legal para celebrar contratos conforme a la legislación mexicana.</li>
                <li>La información que proporcionas es verídica, actual y completa.</li>
                <li>Usarás la plataforma exclusivamente para los fines descritos en estos términos.</li>
                <li>Aceptas estos Términos y Condiciones en nombre propio o en representación del consultorio o clínica que administras.</li>
              </ul>
            </Section>

            <Section id="descripcion" title="2. Descripción de Rovexca Health">
              <p>
                Rovexca Health es una plataforma SaaS (Software como Servicio) diseñada para consultorios médicos y clínicas en México. Sus principales funcionalidades incluyen:
              </p>
              <ul>
                <li>Gestión de agenda médica y citas</li>
                <li>Administración de pacientes y expedientes clínicos</li>
                <li>Recordatorios y confirmaciones de cita por WhatsApp</li>
                <li>Seguimiento de pacientes crónicos</li>
                <li>Reportes e indicadores de operación</li>
                <li>Control de ingresos y facturación</li>
              </ul>
              <p>
                El servicio es de acceso por suscripción. Rovexca Health se reserva el derecho de añadir, modificar o descontinuar funcionalidades con previo aviso a los usuarios activos.
              </p>
            </Section>

            <Section id="uso" title="3. Uso Permitido de la Plataforma">
              <p>
                Rovexca Health está diseñada exclusivamente para uso profesional en el ámbito de la salud. Se permite su uso para:
              </p>
              <ul>
                <li>Gestionar la operación de un consultorio médico o clínica legalmente constituida.</li>
                <li>Administrar y dar seguimiento a pacientes de manera ética y conforme a la normativa de salud aplicable en México.</li>
                <li>Comunicarse con pacientes mediante los canales integrados en la plataforma.</li>
              </ul>
              <p>Queda expresamente prohibido:</p>
              <ul>
                <li>Usar la plataforma para actividades ilegales o contrarias a la ética médica.</li>
                <li>Compartir credenciales de acceso con personas no autorizadas.</li>
                <li>Intentar acceder a cuentas de otros usuarios o realizar ingeniería inversa del sistema.</li>
                <li>Almacenar datos de pacientes con fines distintos a la atención médica directa.</li>
                <li>Revender, sublicenciar o comercializar el acceso a la plataforma sin autorización escrita de Rovexca Health.</li>
              </ul>
            </Section>

            <Section id="responsabilidades" title="4. Responsabilidades del Usuario">
              <p>Como usuario de la plataforma, eres responsable de:</p>
              <ul>
                <li>Mantener la confidencialidad de tus credenciales de acceso y notificar de inmediato cualquier uso no autorizado.</li>
                <li>Obtener el consentimiento de tus pacientes para el tratamiento de sus datos personales y para el envío de comunicaciones por WhatsApp u otros canales.</li>
                <li>Garantizar que la información ingresada a la plataforma sea correcta, actualizada y se trate con la debida confidencialidad médica.</li>
                <li>Cumplir con la normativa mexicana de protección de datos personales (LFPDPPP) y las disposiciones en materia de salud aplicables a tu práctica.</li>
                <li>Formar y supervisar a cualquier persona de tu equipo que tenga acceso a la plataforma.</li>
              </ul>
            </Section>

            <Section id="limitacion" title="5. Limitación de Responsabilidad">
              <p>
                Rovexca Health es una herramienta de gestión y comunicación. La plataforma <strong>no es un dispositivo médico</strong>, no realiza diagnósticos clínicos y no reemplaza el criterio profesional del médico.
              </p>
              <p>Rovexca Health no será responsable por:</p>
              <ul>
                <li>Decisiones clínicas tomadas por el médico o su equipo con base en la información gestionada en la plataforma.</li>
                <li>Errores en los datos ingresados por el usuario.</li>
                <li>Interrupciones del servicio causadas por terceros (proveedores de internet, Meta, Twilio, infraestructura cloud).</li>
                <li>Daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de la plataforma.</li>
              </ul>
              <p>
                La responsabilidad total de Rovexca Health, en cualquier caso, quedará limitada al monto pagado por el usuario en los últimos tres meses de suscripción.
              </p>
            </Section>

            <Section id="disponibilidad" title="6. Disponibilidad del Servicio">
              <p>
                Rovexca Health se compromete a mantener la plataforma disponible de manera continua, con un objetivo de disponibilidad del <strong>99% mensual</strong>, salvo en los siguientes casos:
              </p>
              <ul>
                <li>Mantenimientos programados, notificados con al menos 24 horas de anticipación.</li>
                <li>Fallas en infraestructura de terceros fuera del control de Rovexca Health.</li>
                <li>Eventos de fuerza mayor (desastres naturales, cortes masivos de internet, etc.).</li>
              </ul>
              <p>
                En caso de interrupciones no programadas significativas, Rovexca Health informará a los usuarios y trabajará para restablecer el servicio a la brevedad posible.
              </p>
            </Section>

            <Section id="terceros" title="7. Servicios de Terceros">
              <p>
                Rovexca Health integra servicios de terceros para ofrecer ciertas funcionalidades. Los principales son:
              </p>
              <ul>
                <li><strong>WhatsApp Business API / Meta:</strong> para el envío de mensajes de recordatorio y confirmación de citas. Su uso está sujeto a las Políticas de WhatsApp para Empresas y las Condiciones de Uso de Meta.</li>
                <li><strong>Twilio:</strong> proveedor de comunicaciones utilizado para la integración con WhatsApp. Sujeto a sus propios Términos de Servicio.</li>
                <li><strong>Proveedores de infraestructura cloud:</strong> para el almacenamiento y procesamiento de datos.</li>
                <li><strong>Procesadores de pago:</strong> para la gestión segura de cobros de suscripción.</li>
              </ul>
              <p>
                Rovexca Health no se hace responsable por cambios en las políticas o interrupciones de los servicios de terceros que puedan afectar el funcionamiento de la plataforma.
              </p>
            </Section>

            <Section id="pagos" title="8. Pagos y Suscripciones">
              <p>
                El acceso a Rovexca Health está sujeto al pago de una suscripción conforme al plan seleccionado al momento del registro o actualizado posteriormente.
              </p>
              <ul>
                <li>Los precios se expresan en pesos mexicanos (MXN) e incluyen IVA cuando aplique.</li>
                <li>La suscripción se renueva automáticamente al final de cada período (mensual o anual), salvo que el usuario la cancele antes de la fecha de renovación.</li>
                <li>Los pagos no son reembolsables, salvo en los casos expresamente indicados en nuestra política de cancelación o cuando la ley así lo establezca.</li>
                <li>En caso de falta de pago, el acceso a la plataforma podrá suspenderse hasta regularizar el adeudo.</li>
                <li>Rovexca Health se reserva el derecho de modificar los precios con un preaviso mínimo de 30 días.</li>
              </ul>
            </Section>

            <Section id="cancelacion" title="9. Cancelación del Servicio">
              <p>
                El usuario puede cancelar su suscripción en cualquier momento desde su panel de administración o enviando una solicitud a <strong>soporte@rovexca.ai</strong>.
              </p>
              <ul>
                <li>Al cancelar, el acceso a la plataforma se mantendrá activo hasta el final del período ya pagado.</li>
                <li>Los datos del consultorio y los pacientes estarán disponibles para exportación durante los 30 días posteriores a la cancelación.</li>
                <li>Transcurrido ese plazo, los datos podrán ser eliminados de los servidores de Rovexca Health conforme a nuestra Política de Privacidad.</li>
              </ul>
              <p>
                Rovexca Health también se reserva el derecho de suspender o cancelar cuentas que incumplan estos Términos y Condiciones, con o sin previo aviso dependiendo de la gravedad del incumplimiento.
              </p>
            </Section>

            <Section id="propiedad" title="10. Propiedad Intelectual">
              <p>
                Todo el contenido, diseño, código, marcas, logotipos y funcionalidades de Rovexca Health son propiedad exclusiva de Rovexca Health o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables en México.
              </p>
              <p>
                El usuario no adquiere ningún derecho de propiedad intelectual sobre la plataforma. Se otorga únicamente una licencia de uso limitada, no exclusiva e intransferible para acceder y usar el servicio durante la vigencia de la suscripción.
              </p>
              <p>
                Los datos ingresados por el usuario (información de pacientes, citas, notas clínicas) siguen siendo propiedad del consultorio. Rovexca Health no reclamará derechos sobre dicha información.
              </p>
            </Section>

            <Section id="modificaciones" title="11. Modificaciones a los Términos">
              <p>
                Rovexca Health puede actualizar estos Términos y Condiciones cuando sea necesario. Las modificaciones serán notificadas con al menos <strong>15 días de anticipación</strong> mediante:
              </p>
              <ul>
                <li>Un aviso visible dentro de la plataforma.</li>
                <li>Un correo electrónico a la dirección registrada del usuario.</li>
              </ul>
              <p>
                El uso continuado de la plataforma después de la fecha de entrada en vigor de los cambios implica la aceptación de los nuevos términos. Si no estás de acuerdo con las modificaciones, puedes cancelar tu suscripción antes de que entren en vigor.
              </p>
              <p>
                La versión vigente de estos Términos y Condiciones estará siempre disponible en <strong>rovexca.ai/terminos</strong>.
              </p>
            </Section>

            <Section id="contacto" title="12. Contacto">
              <p>Para cualquier pregunta, aclaración o reporte relacionado con estos Términos y Condiciones:</p>
              <ul>
                <li><strong>Soporte general:</strong> soporte@rovexca.ai</li>
                <li><strong>Privacidad y datos personales:</strong> privacidad@rovexca.ai</li>
                <li><strong>Sitio web:</strong> rovexca.ai</li>
              </ul>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se resolverá preferentemente de manera amistosa. En caso contrario, ambas partes se someten a la jurisdicción de los tribunales competentes en México.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}