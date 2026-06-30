import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "mariage",
    category: "mariage",
    title: "Photographe Mariage",
    shortTitle: "Mariage",
    description:
      "Un photo-reportage de mariage sensible et authentique, qui raconte votre journée telle qu'elle a vraiment été vécue — sans mise en scène forcée.",
    hero: "Raconter votre histoire, un instant à la fois.",
    highlights: [
      "Une approche photojournalistique : je capture les instants tels qu'ils arrivent, sans les figer",
      "Une présence discrète qui laisse vivre l'émotion plutôt que de la diriger",
      "Une attention particulière aux détails qui font sens pour vous (lieux, objets, regards)",
      "Une sélection finale pensée comme un récit, du matin des préparatifs à la soirée",
    ],
    includes: [
      "Rendez-vous de préparation pour cerner vos attentes et le déroulé de la journée",
      "Couverture complète : préparatifs, cérémonie, photos de couple, réception",
      "Sélection et retouche soignée de toutes les photos",
      "Galerie privée en ligne pour télécharger et partager vos photos",
    ],
    process: [
      {
        step: 1,
        title: "Premier échange",
        description:
          "Un appel ou une rencontre pour parler de votre mariage, vos envies et le déroulé prévu.",
      },
      {
        step: 2,
        title: "Préparation",
        description:
          "On affine ensemble le timing photo et les moments clés à ne pas manquer.",
      },
      {
        step: 3,
        title: "Le grand jour",
        description:
          "Je suis présente, discrète, à l'écoute — pour capturer l'émotion sans jamais l'interrompre.",
      },
      {
        step: 4,
        title: "Livraison",
        description:
          "Sélection et retouche des photos, puis livraison dans une galerie privée en ligne sous 4 à 6 semaines.",
      },
    ],
    pricing: [
      {
        label: "Sur devis",
        price: "Sur devis",
        description:
          "Chaque mariage est unique : la formule est construite avec vous selon la durée de couverture souhaitée et vos besoins.",
        features: [
          "Couverture à la demi-journée ou journée complète",
          "Galerie privée en ligne incluse",
          "Possibilité de seconde photographe sur demande",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps avant le mariage faut-il réserver ?",
        answer:
          "Idéalement 6 à 12 mois à l'avance, surtout pour les mariages en saison haute (avril à septembre), les disponibilités partant vite.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Le nombre dépend de la durée de couverture, généralement entre 300 et 600 photos retouchées pour une journée complète.",
      },
      {
        question: "Intervenez-vous en dehors de Perpignan et Narbonne ?",
        answer:
          "Oui, je me déplace dans toute la région Occitanie et au-delà. Les frais de déplacement sont à discuter selon la distance.",
      },
    ],
    keywords: [
      "photographe mariage Perpignan",
      "photographe mariage Narbonne",
      "photo-reportage mariage Aude",
    ],
  },
  {
    slug: "grossesse",
    category: "grossesse",
    title: "Photographe Grossesse",
    shortTitle: "Grossesse",
    description:
      "Une séance maternité douce et intime pour immortaliser cette période unique, entre attente et émerveillement.",
    hero: "Sublimer ce moment suspendu avant l'arrivée de bébé.",
    highlights: [
      "Une ambiance bienveillante pour vous sentir à l'aise devant l'objectif",
      "Un style naturel et lumineux, loin des poses figées",
      "Une séance pensée pour vous, seule, en couple ou en famille avec vos aînés",
      "Le choix du lieu : en studio, en extérieur ou à votre domicile",
    ],
    includes: [
      "Échange préalable pour choisir le lieu, la tenue et l'ambiance souhaitée",
      "Séance d'environ 1h, au rythme de chacune",
      "Sélection et retouche des plus belles photos",
      "Galerie privée en ligne pour télécharger vos souvenirs",
    ],
    process: [
      {
        step: 1,
        title: "Prise de contact",
        description:
          "On discute de vos envies, du moment idéal (entre le 7e et le 8e mois en général) et du lieu de la séance.",
      },
      {
        step: 2,
        title: "Préparation",
        description:
          "Conseils tenue et mise en beauté pour vous sentir belle et à l'aise le jour J.",
      },
      {
        step: 3,
        title: "La séance",
        description:
          "Un moment doux, sans pression, pour capturer votre rondeur et votre émotion telles qu'elles sont.",
      },
      {
        step: 4,
        title: "Livraison",
        description:
          "Sélection et retouche des photos, livrées sous 2 à 3 semaines dans une galerie privée.",
      },
    ],
    pricing: [
      {
        label: "Séance Grossesse",
        price: "Sur devis",
        description:
          "Une formule simple pour une séance d'environ 1h, en studio ou en extérieur.",
        features: [
          "Séance d'environ 1h",
          "Photos en solo, en couple ou en famille",
          "Galerie privée en ligne incluse",
        ],
      },
    ],
    faq: [
      {
        question: "À quel mois de grossesse faut-il faire la séance ?",
        answer:
          "Le moment idéal se situe généralement entre le 7e et le 8e mois, quand le ventre est bien rond tout en restant à l'aise pour bouger.",
      },
      {
        question: "Peut-on inclure le conjoint ou les aînés ?",
        answer:
          "Bien sûr, la séance peut être réalisée en solo, en couple, ou en famille avec vos autres enfants.",
      },
    ],
    keywords: [
      "photographe grossesse Narbonne",
      "séance maternité Aude",
      "photographe grossesse Perpignan",
    ],
  },
  {
    slug: "famille",
    category: "famille",
    title: "Photographe Famille",
    shortTitle: "Famille",
    description:
      "Des séances photo en famille pour capturer la complicité et la spontanéité de votre quotidien, à Perpignan et dans toute la région.",
    hero: "Garder une trace vivante de vos liens, tels qu'ils sont aujourd'hui.",
    highlights: [
      "Une séance pensée pour le naturel : on joue, on rit, on capture la vraie complicité",
      "Un cadre adapté aux enfants, sans contrainte de pose interminable",
      "Le choix du lieu : à la maison, en extérieur ou dans un endroit qui vous est cher",
      "Une approche douce pour que petits et grands se sentent à l'aise",
    ],
    includes: [
      "Échange préalable pour définir le lieu et l'ambiance de la séance",
      "Séance d'environ 45 minutes à 1h, adaptée au rythme des enfants",
      "Sélection et retouche des plus belles photos",
      "Galerie privée en ligne pour télécharger vos souvenirs",
    ],
    process: [
      {
        step: 1,
        title: "Prise de contact",
        description:
          "On échange sur votre famille, vos envies et le lieu qui vous correspond le mieux.",
      },
      {
        step: 2,
        title: "Préparation",
        description:
          "Quelques conseils simples pour que chacun se sente à l'aise le jour de la séance.",
      },
      {
        step: 3,
        title: "La séance",
        description:
          "On laisse place au jeu et à la spontanéité : les plus beaux moments arrivent souvent sans y penser.",
      },
      {
        step: 4,
        title: "Livraison",
        description:
          "Sélection et retouche des photos, livrées sous 2 à 3 semaines dans une galerie privée.",
      },
    ],
    pricing: [
      {
        label: "Séance Famille",
        price: "Sur devis",
        description:
          "Une formule simple pour une séance de 45 minutes à 1h, où que vous soyez.",
        features: [
          "Séance de 45 min à 1h",
          "À domicile, en extérieur ou en studio",
          "Galerie privée en ligne incluse",
        ],
      },
    ],
    faq: [
      {
        question: "La séance convient-elle aux jeunes enfants ?",
        answer:
          "Oui, le format est volontairement court et ludique pour s'adapter au rythme et à l'humeur des enfants, sans pression.",
      },
      {
        question: "Peut-on faire la séance chez nous ?",
        answer:
          "Tout à fait, beaucoup de familles préfèrent un cadre familier comme leur domicile ou un lieu qu'elles affectionnent.",
      },
    ],
    keywords: [
      "photographe famille Perpignan",
      "séance photo famille Aude",
      "photographe enfant Narbonne",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
