import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-neutral-200 bg-white"
      aria-label="Pied de page"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-lg font-semibold text-neutral-950"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 max-w-xs">
              {siteConfig.tagline}. Intervention sur Perpignan, Narbonne et
              toute la région.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {navigation.footer.pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.author.phone.replace(/\s/g, "")}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.author.phone}
                </a>
              </li>
              <li className="text-sm text-neutral-500">
                {siteConfig.author.address}
              </li>
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Légal
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {navigation.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-neutral-400">
            {siteConfig.author.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
