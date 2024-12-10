// app/price/page.tsx
import { Price } from "@/components/exports";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs", // Donnera "Tarifs | Margot Reboul - Psychologue"
  description:
    "Consultations psychologiques à Toulouse et Plaisance-du-Touch : première séance 60€. Accompagnement individuel, guidance parentale et groupes d'habiletés sociales. Spécialiste TND & Autisme, remboursement possible.",
  alternates: {
    canonical: "/price", // Modifié pour utiliser un chemin relatif
  },
  openGraph: {
    title: "Tarifs et remboursements | Psychologue TND & Autisme à Toulouse", // Plus attractif et informatif
    description:
      "Consultations psychologiques à Toulouse et Plaisance-du-Touch : première séance 60€. Accompagnement individuel, guidance parentale et groupes d'habiletés sociales. Spécialiste TND & Autisme, remboursement possible.",
    url: "/price",
    images: [
      {
        url: "/imgs/margot.png",
        width: 1200,
        height: 630,
        alt: "Cabinet de psychologie Margot Reboul - Tarifs des consultations à Toulouse et Plaisance-du-Touch", // Alt text plus descriptif
      },
    ],
  },
};

export default function Prices() {
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-custom-lime max-md:mx-3">
      <Price
        title="Première séance :"
        desc="Cette séance permet de se rencontrer et d'identifier les besoins et la demande de la famille."
        price="1h - 60"
      />
      <Price
        title="Séance individuelle :"
        desc="Séance psychoéducative individuelle."
        price="45 min - 60"
      />
      <Price
        title="Guidance parentale :"
        desc="Avec le parent, pour gérer les problématiques quotidiennes."
        price="45 min - 60"
      />
      <Price
        title="Groupes d'habiletés sociales :"
        desc="Groupes d'enfants/adolescents."
        price="45 min - 40"
      />
    </div>
  );
}
