// components/home/Details.tsx
import Image from "next/image";

export default function Details() {
  const tndList = [
    "Le trouble du spectre de l'autisme (TSA)",
    "Le trouble déficitaire de l'attention, avec ou sans hyperactivité (TDA/H)",
    "Le trouble du développement intellectuel",
    "Les troubles spécifiques des apprentissages (lecture, expression écrite, déficit du calcul)",
    "Les troubles de la communication",
    "Les troubles moteurs (trouble développemental de la coordination)",
  ];

  const consultationReasons = [
    "Compréhension, gestion et expression des émotions",
    "Travail des habiletés sociales",
    "Gestion des particularités et difficultés au quotidien",
    "Travail des fonctions exécutives (attention, organisation, mémoire...)",
    "Dans une démarche de dépistage précoce",
    "Mieux comprendre les troubles du neurodéveloppement",
    "Guidance parentale",
    "Acceptation du diagnostic",
  ];

  return (
    <div className="flex max-w-3xl flex-col items-center gap-16 max-lg:px-5">
      <div className="flex flex-col items-center gap-8">
        <h3 className="text-3xl font-bold max-md:text-xl">
          Le TND c&apos;est quoi ?
        </h3>
        <p>
          Un trouble neurodéveloppemental (TND) est un défaut de développement
          d&apos;une ou plusieurs compétences cognitives attendues lors du
          développement psychomoteur et affectif de l&apos;enfant...
        </p>
        <Image
          src="/imgs/tnd.jpeg"
          alt="tnd"
          width={1024}
          height={576}
          className="w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-6">
        <h4 className="text-xl font-semibold max-md:text-base">
          Les <span className="font-semibold">TND</span> comprennent :
        </h4>
        <ul className="list-disc space-y-2 pl-6">
          {tndList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex w-full flex-col gap-8">
        <h3 className="text-center text-3xl font-bold max-md:text-xl">
          Pourquoi consulter ?
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-xl max-md:text-base">
          {consultationReasons.map((reason, index) => (
            <li key={index} className="font-semibold">
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
