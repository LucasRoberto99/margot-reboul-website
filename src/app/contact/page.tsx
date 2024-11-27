// app/contact/page.tsx
import { Adress, MyContact } from "@/components/exports";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Margot Reboul, psychologue à Toulouse et Plaisance-du-Touch. Prise de rendez-vous pour consultations TND & Autisme. Disponible pour enfants, adolescents et adultes.",
  openGraph: {
    title: "Contact | Margot Reboul - Psychologue TND & Autisme",
    description:
      "Contactez Margot Reboul, psychologue à Toulouse et Plaisance-du-Touch. Prise de rendez-vous pour consultations TND & Autisme. Disponible pour enfants, adolescents et adultes.",
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
