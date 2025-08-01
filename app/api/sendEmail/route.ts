import { type NextRequest, NextResponse } from "next/server"
console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface BrevoEmailRequest {
  sender: {
    name: string
    email: string
  }
  to: Array<{
    email: string
    name: string
  }>
  subject: string
  htmlContent: string
  textContent: string
}

export const POST = async (request: NextRequest) => {
    console.log("➡️ Llamada recibida en /api/sendEmail")
  try {
    const body: ContactFormData = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: "Todos los campos son requeridos" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Formato de email inválido" }, { status: 400 })
    }

    const brevoApiKey = process.env.BREVO_API_KEY
    if (!brevoApiKey) {
      console.error("BREVO_API_KEY not found in environment variables")
      return NextResponse.json({ success: false, message: "Error de configuración del servidor" }, { status: 500 })
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo contacto desde el sitio web</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f9dc5c; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; border-left: 4px solid #f9dc5c; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; background-color: #f0f0f0; border-radius: 0 0 8px 8px; }
            .logo { color: #333; font-size: 24px; font-weight: bold; margin: 0; }
            .subtitle { color: #666; margin: 5px 0 0 0; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="logo">LA TORRE</h1>
              <p class="subtitle">Grupo Constructora</p>
              <h2 style="margin: 15px 0 0 0; color: #333; font-size: 18px;">Nuevo Contacto desde el Sitio Web</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #f9dc5c; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value"><a href="tel:${phone}" style="color: #f9dc5c; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p><strong>Constructora La Torre</strong></p>
              <p>Este mensaje fue enviado desde el formulario de contacto del sitio web oficial.</p>
              <p>📅 Fecha: ${new Date().toLocaleString("es-CR", {
                timeZone: "America/Costa_Rica",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}</p>
              <p style="margin-top: 15px;">
                <a href="mailto:${email}" style="background-color: #f9dc5c; color: #333; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold;">Responder al Cliente</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    const textContent = `
NUEVO CONTACTO - CONSTRUCTORA LA TORRE
=====================================

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}

=====================================
Enviado desde: Sitio Web Oficial
Fecha: ${new Date().toLocaleString("es-CR", { timeZone: "America/Costa_Rica" })}

Para responder al cliente, envía un email a: ${email}
    `

    const emailData: BrevoEmailRequest = {
      sender: {
        name: "Sitio Web - Grupo La Torre Constructora",
        email: "servicioalcliente@grupolatorreconstructora.com",
      },
      to: [
        {
          email: "servicioalcliente@grupolatorreconstructora.com",
          name: "Servicio al Cliente - Grupo La Torre",
        },
      ],
      subject: `🏗️ Nuevo contacto web: ${name} - ${new Date().toLocaleDateString("es-CR")}`,
      htmlContent,
      textContent,
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify(emailData),
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      console.error("Brevo API error:", errorData)

      return NextResponse.json({ success: false, message: "Error al enviar el email", error: errorData }, { status: 500 })
    }

    const result = await brevoResponse.json()
    console.log("Email enviado correctamente:", result)
    console.log("✅ Email enviado exitosamente")
    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente a Grupo La Torre" })
  } catch (error) {
    console.error("Error en API /sendEmail:", error)
    return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 })
  }
}
