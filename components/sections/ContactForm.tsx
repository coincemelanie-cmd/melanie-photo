"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  nom: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Adresse email invalide"),
  telephone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s\-().]+$/, "Numéro de téléphone invalide"),
  prestation: z.string().min(1, "Sélectionnez une prestation"),
  dateSouhaitee: z.string().optional(),
  message: z.string().min(10, "Décrivez brièvement votre projet"),
  honeypot: z.string().max(0, "Spam détecté"),
});

type FormData = z.infer<typeof schema>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle
          className="mx-auto h-10 w-10 text-emerald-500 mb-4"
          aria-hidden="true"
        />
        <h2 className="text-lg font-semibold text-neutral-900">
          Message envoyé !
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Mélanie vous recontacte sous 24h pour échanger sur votre projet.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-lg font-semibold text-neutral-950 mb-1">
        Demander un devis
      </h2>
      <p className="text-sm text-neutral-500 mb-6">
        Réponse personnelle sous 24h.
      </p>

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
            aria-hidden="true"
          />
          <p className="text-sm text-red-700">
            Une erreur est survenue. Réessayez ou contactez-moi directement.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
        aria-label="Formulaire de contact"
      >
        {/* Honeypot anti-spam */}
        <div className="sr-only" aria-hidden="true">
          <input tabIndex={-1} {...register("honeypot")} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Nom et prénom"
            required
            autoComplete="name"
            error={errors.nom?.message}
            {...register("nom")}
          />
          <Input
            label="Email"
            type="email"
            required
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Téléphone"
            type="tel"
            required
            autoComplete="tel"
            error={errors.telephone?.message}
            {...register("telephone")}
          />
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="prestation"
              className="text-sm font-medium text-neutral-700"
            >
              Prestation souhaitée{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <select
              id="prestation"
              className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-400"
              aria-invalid={errors.prestation ? "true" : undefined}
              {...register("prestation")}
            >
              <option value="">Sélectionnez...</option>
              <option value="mariage">Mariage</option>
              <option value="grossesse">Grossesse</option>
              <option value="naissance">Naissance</option>
              <option value="famille">Famille</option>
              <option value="autre">Autre</option>
            </select>
            {errors.prestation && (
              <p role="alert" className="text-xs font-medium text-red-600">
                {errors.prestation.message}
              </p>
            )}
          </div>
        </div>

        <Input
          label="Date souhaitée (si connue)"
          type="date"
          hint="Facultatif — utile pour vérifier les disponibilités"
          {...register("dateSouhaitee")}
        />

        <Textarea
          label="Votre projet"
          required
          rows={4}
          placeholder="Décrivez votre projet : lieu, contexte, ambiance recherchée..."
          error={errors.message?.message}
          {...register("message")}
        />

        <Button type="submit" loading={status === "loading"} fullWidth size="lg">
          Envoyer ma demande
        </Button>

        <p className="text-xs text-center text-neutral-400">
          En soumettant ce formulaire, vous acceptez d'être recontacté par
          email ou téléphone. Aucune donnée n'est transmise à des tiers.
        </p>
      </form>
    </div>
  );
}
