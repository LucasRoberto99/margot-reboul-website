// app/contact/page.tsx
import { Adress, MyContact } from "@/components/exports";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prenez rendez-vous avec Margot Reboul, psychologue TND & Autisme à Toulouse (Centre) et Plaisance-du-Touch. Consultations enfants, adolescents et adultes. Horaires flexibles, deux cabinets à votre disposition.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Prendre rendez-vous | Psychologue TND & Autisme Toulouse",
    description:
      "Prenez rendez-vous avec Margot Reboul, psychologue TND & Autisme à Toulouse (Centre) et Plaisance-du-Touch. Consultations enfants, adolescents et adultes. Horaires flexibles, deux cabinets à votre disposition.",
    url: "/contact",
    images: [
      {
        url: "/imgs/margot.png",
        width: 1200,
        height: 630,
        alt: "Prendre rendez-vous avec Margot Reboul - Cabinets à Toulouse et Plaisance-du-Touch",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white p-6 max-xl:w-4/5 max-xl:gap-10 max-md:mx-3 max-md:w-full">
      <h2 className="text-center text-3xl font-bold max-md:text-xl">
        Me contacter
      </h2>
      <div className="flex gap-2 max-xl:flex-col">
        <Adress />
        <div className="mx-3 w-px bg-custom-lime"></div>
        <MyContact />
      </div>
    </div>
  );
}
