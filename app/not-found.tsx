import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-serif text-6xl font-semibold text-brand-200">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-neutral-950">
        Cette page n'existe pas
      </h1>
      <p className="mt-2 max-w-md text-neutral-600">
        La page que vous cherchez a peut-être été déplacée ou n'existe plus.
      </p>
      <div className="mt-8">
        <Button href="/">Retour à l'accueil</Button>
      </div>
    </div>
  );
}
