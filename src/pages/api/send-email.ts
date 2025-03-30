import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, recaptcha } = await request.json();

    // Verificar reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return new Response(JSON.stringify({
        error: 'Verificación de reCAPTCHA fallida'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Crear el transportador de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS
      }
    });

    // Configurar el email
    const mailOptions = {
      from: `"Hey Dev" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
Nuevo mensaje de contacto desde Hey Dev

Nombre: ${name}
Email: ${email}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de Hey Dev.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Nuevo mensaje de contacto desde Hey Dev</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0;"><strong style="color: #374151;">Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Este mensaje fue enviado desde el formulario de contacto de Hey Dev.
          </p>
        </div>
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({
      message: 'Email enviado exitosamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error al enviar el email:', error);
    return new Response(JSON.stringify({
      error: 'Error al enviar el email'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 