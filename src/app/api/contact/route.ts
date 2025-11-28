import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, prenom, email, telephone, formule, message } = body;

    // Validation des champs obligatoires
    if (!nom || !prenom || !email || !telephone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide" },
        { status: 400 }
      );
    }

    // Envoi de l'email avec Resend
    await resend.emails.send({
      from: "Accès Permis 77 <onboarding@resend.dev>", // Remplacez par votre domaine vérifié sur Resend
      to: ["accespermis77@gmail.com"], // Email de l'auto-école
      replyTo: email, // L'email du client pour pouvoir lui répondre directement
      subject: `Nouvelle demande de contact${formule ? ` - ${formule}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouvelle demande de contact</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #D4A574 0%, #C89968 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
            </div>

            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
              <h2 style="color: #2C4251; margin-top: 0;">Coordonnées du client</h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #D4A574;">Nom:</strong>
                  </td>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    ${nom}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #D4A574;">Prénom:</strong>
                  </td>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    ${prenom}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #D4A574;">Email:</strong>
                  </td>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${email}" style="color: #D4A574; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #D4A574;">Téléphone:</strong>
                  </td>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${telephone}" style="color: #D4A574; text-decoration: none;">${telephone}</a>
                  </td>
                </tr>
                ${
                  formule
                    ? `
                <tr>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #D4A574;">Formule souhaitée:</strong>
                  </td>
                  <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <span style="background: #D4A574; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold;">
                      ${formule}
                    </span>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

              ${
                message
                  ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #2C4251; margin-bottom: 10px;">Message:</h3>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #D4A574;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              `
                  : ""
              }

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  Cet email a été envoyé depuis le formulaire de contact du site web Accès Permis 77
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        message: "Votre demande a été envoyée avec succès",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande" },
      { status: 500 }
    );
  }
}
