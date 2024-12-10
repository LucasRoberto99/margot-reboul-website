// app/page.tsx
import { About, Details, Wrapper } from "@/components/exports";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil", // Le template dans layout.tsx ajoutera "| Margot Reboul - Psychologue"
  description:
    "Psychologue spécialisée TND & Autisme à Toulouse et Plaisance-du-Touch. Accompagnement personnalisé enfants, ados et adultes. Expertise en troubles du neurodéveloppement et TSA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Margot Reboul - Psychologue TND & Autisme à Toulouse",
    description:
      "Psychologue spécialisée TND & Autisme à Toulouse et Plaisance-du-Touch. Accompagnement personnalisé enfants, ados et adultes. Expertise en troubles du neurodéveloppement et TSA.",
    url: "/",
    images: [
      {
        url: "/imgs/margot.png",
        width: 1200,
        height: 630,
        alt: "Margot Reboul - Psychologue clinicienne à Toulouse et Plaisance-du-Touch",
      },
    ],
  },
};

export default function Home() {
  return (
    <Wrapper>
      <About />
      <Details />
      <div className="mt-16">
        <Image
          src="/imgs/logo_sauge.svg"
          alt="pb"
          width={24}
          height={24}
          className="w-6"
        />
      </div>
    </Wrapper>
  );
}
