// app/page.tsx
import { About, Details, Wrapper } from "@/components/exports";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Psychologue spécialisée TND & Autisme à Toulouse et Plaisance-du-Touch. Accompagnement personnalisé enfants, ados et adultes. Expertise en troubles du neurodéveloppement et TSA.",
  openGraph: {
    title: "Accueil | Margot Reboul - Psychologue TND & Autisme",
    description:
      "Psychologue spécialisée TND & Autisme à Toulouse et Plaisance-du-Touch. Accompagnement personnalisé enfants, ados et adultes. Expertise en troubles du neurodéveloppement et TSA.",
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
