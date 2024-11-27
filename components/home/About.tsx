// components/home/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-10 max-lg:px-5">
      <h2 className="text-4xl font-bold max-md:text-2xl">À propos</h2>
      <div className="flex max-w-3xl items-center gap-8 max-lg:flex-col">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold max-lg:self-center max-md:text-xl">
            Margot Reboul
          </h3>
          <h3 className="text-xl font-semibold max-md:text-center max-md:text-base">
            Psychologue clinicienne spécialisée dans l&apos;autisme et les
            troubles du neurodéveloppement
          </h3>
          <p>
            Diplômée du
            <span className="font-semibold"> Master de Psychologie</span>{" "}
            parcours
            <span className="font-semibold">
              {" "}
              Autisme et autres troubles neurodéveloppementaux (TND){" "}
            </span>
            , j&apos;accueille des enfants, adolescents et adultes avec TND...
          </p>
          <p>
            Je propose un accompagnement adapté aux particularités et aux
            besoins de chacun...
          </p>
        </div>
        <Image
          src="/imgs/margot.png"
          alt="photo de margot"
          width={192}
          height={256}
          className="object-cover aspect-[3/4] w-48 rounded-md max-lg:self-center"
        />
      </div>
    </div>
  );
}
