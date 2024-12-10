// app/service/page.tsx
import { Service } from "@/components/exports";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestations", // Avec le template, ça donnera "Prestations | Margot Reboul - Psychologue"
  description:
    "Consultations psychologiques spécialisées en TND et autisme à Toulouse. Évaluations, bilans psychologiques, accompagnement thérapeutique, guidance parentale. Expertise troubles neurodéveloppementaux.",
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "Services psychologiques spécialisés TND & Autisme à Toulouse",
    description:
      "Consultations psychologiques spécialisées en TND et autisme à Toulouse. Évaluations, bilans psychologiques, accompagnement thérapeutique, guidance parentale. Expertise troubles neurodéveloppementaux.",
    url: "/service",
    images: [
      {
        url: "/imgs/margot.png",
        width: 1200,
        height: 630,
        alt: "Services psychologiques - Margot Reboul à Toulouse et Plaisance-du-Touch",
      },
    ],
  },
};

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-8 bg-custom-lime max-md:mx-3">
      <Service
        title="Accompagnement individuel personnalisé :"
        desc="Les séances individuelles permettent de répondre aux besoins spécifiques de chacun, déterminé avec le patient et sa famille. Durant ces séances nous pouvons faire un travail autour des fonctions exécutives (attention, mémoire, flexibilité, organisation etc.), autour de l'autonomie, des habiletés sociales, des émotions, de la confiance en soi avec une approche psychoéducative."
        img="/imgs/enseignante.jpg"
      />
      <Service
        title="Guidance parentale :"
        desc="Elle permet d'apporter un soutien aux parents / à la famille afin de mieux comprendre le comportement de l'enfant et de mettre en place des stratégies pour gérer les troubles du comportements ou les difficultés à la maison. Des interventions à domicile peuvent être possibles."
        img="/imgs/velo.jpeg"
      />
      <Service
        title="Groupes d'habiletés sociales :"
        desc="Les groupes permettent aux enfants/adolescents d'interagir avec des pairs du même âge à l'aide de jeux, de comprendre les règles sociales. Dire bonjour, partager, collaborer, gérer ses émotions et faire des demandes en font partie."
        img="/imgs/enfants2.jpg"
      />
      <Service
        title="Séances fratries :"
        desc="Elles permettent d'apaiser les relations frères/soeurs qui ne sont pas toujours évidentes lorsque l'un deux a des besoins particuliers et des difficultés liées à son TND."
        img="/imgs/enfants.jpg"
      />
    </div>
  );
}
