import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email().max(200),
  telephone: z
    .string()
    .min(10)
    .max(20)
    .regex(/^[0-9+\s\-().]+$/),
  prestation: z.enum(["mariage", "grossesse", "naissance", "famille", "autre"]),
  dateSouhaitee: z.string().max(20).optional(),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0),
});

const prestationLabel: Record<string, string> = {
  mariage: "Mariage",
  grossesse: "Grossesse",
  naissance: "Naissance",
  famille: "Famille",
  autre: "Autre",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Mélanie Photography <no-reply@melanie-photo.fr>`,
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `Nouvelle demande — ${prestationLabel[data.prestation]} (${data.nom})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b8432a; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
            Nouvelle demande de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; width: 40%; color: #374151;">Nom</td>
              <td style="padding: 10px 14px; color: #111827;">${data.nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 14px; color: #111827;">
                <a href="mailto:${data.email}" style="color: #b8432a;">${data.email}</a>
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Téléphone</td>
              <td style="padding: 10px 14px; color: #111827;">
                <a href="tel:${data.telephone}" style="color: #b8432a;">${data.telephone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Prestation</td>
              <td style="padding: 10px 14px; color: #111827;">${prestationLabel[data.prestation]}</td>
            </tr>
            ${
              data.dateSouhaitee
                ? `<tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Date souhaitée</td>
              <td style="padding: 10px 14px; color: #111827;">${data.dateSouhaitee}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #fdf4f1; border-left: 4px solid #b8432a; border-radius: 4px;">
            <p style="font-weight: bold; color: #7a2f20; margin: 0 0 8px;">Message</p>
            <p style="color: #652a1e; margin: 0; white-space: pre-line;">${data.message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${data.email}"
               style="display: inline-block; background: #b8432a; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Répondre à ${data.nom}
            </a>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            Demande reçue via melanie-photo.fr
          </p>
        </div>
      `,
    });

    // Email de confirmation au prospect
    await resend.emails.send({
      from: `Mélanie Photography <no-reply@melanie-photo.fr>`,
      to: data.email,
      subject: "Votre demande a bien été reçue",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111827;">Bonjour ${data.nom},</h2>

          <p style="color: #374151; line-height: 1.6;">
            Votre demande concernant une séance "${prestationLabel[data.prestation]}" a bien été reçue.
          </p>

          <p style="color: #374151; line-height: 1.6;">
            Je vous recontacte personnellement sous <strong>24h</strong> pour
            échanger sur votre projet et vérifier les disponibilités.
          </p>

          <p style="color: #374151; line-height: 1.6;">
            À très bientôt,
          </p>
          <p style="color: #111827; font-weight: bold;">Mélanie</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">
            melanie-photo.fr — Photographe Mariage, Grossesse, Naissance et Famille
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 422 }
      );
    }
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
