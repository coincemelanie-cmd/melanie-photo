/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  redirects: async () => [
    {
      source: "/contact-photographe-perpignan-narbonne",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/photo-reportage-de-mariage-a-perpignan",
      destination: "/prestations/mariage",
      permanent: true,
    },
    {
      source: "/galerie",
      destination: "/acces-galeries",
      permanent: true,
    },
    {
      source: "/accueil/contact",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/acces-galerie-melanie-photography",
      destination: "/acces-galeries",
      permanent: true,
    },
    {
      source: "/portfolio-mariage",
      destination: "/portfolio",
      permanent: true,
    },
    {
      source: "/nos-partenaires",
      destination: "/",
      permanent: true,
    },
    {
      source: "/protection-des-donnees-personnelles",
      destination: "/politique-confidentialite",
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://www.jingoo.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.jingoo.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "connect-src 'self' https://vitals.vercel-insights.com https://www.jingoo.com",
          ].join("; "),
        },
      ],
    },
  ],
};

export default nextConfig;
