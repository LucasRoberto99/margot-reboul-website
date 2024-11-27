// components/home/Profile.tsx
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex gap-12 px-5 max-lg:flex-col">
      <Image
        className="aspect-[3/4] w-1/3 rounded-md object-cover max-lg:aspect-square max-lg:w-1/3 max-lg:self-center"
        src="/imgs/margot.png"
        alt="margot-profile"
        width={400}
        height={533}
        priority
      />
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold max-lg:self-center max-md:text-xl">
          Margot Reboul
        </h2>
        <h3 className="text-xl font-semibold max-md:text-base">
          Psychologue clinicienne spécialisée dans l&apos;autisme et les
          troubles du neurodéveloppement
        </h3>
        <p>
          Diplômée du
          <span className="font-semibold"> Master de Psychologie</span> parcours
          <span className="font-semibold">
            {" "}
            Autisme et autres troubles neurodéveloppementaux (TND){" "}
          </span>
          , j&apos;accueille des enfants, adolescents et adultes avec TND (TSA,
          TDAH, troubles des apprentissages, trouble du développement
          intellectuel…), ainsi que leurs proches, dans le cadre d&apos;un
          accompagnement psycho-éducatif centré sur leurs besoins.
        </p>
        <p>
          Je propose un accompagnement adapté aux particularités et aux besoins
          de chacun, en respectant les recommandations de bonne pratique de la
          Haute Autorité de la Santé (HAS).
        </p>
      </div>
    </div>
  );
}
