// app/price/page.tsx
import { Price } from "@/components/exports";

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
