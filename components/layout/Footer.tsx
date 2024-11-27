// components/layout/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="my-12 w-full max-w-6xl text-sm text-custom-darkgreen max-md:text-xs">
      <div className="mx-auto flex w-4/5 flex-col gap-8 px-4">
        <div className="flex gap-6">
          <Image
            src="/imgs/logo_sapin.svg"
            alt="small_logo_sapin"
            width={48}
            height={48}
            className="w-12"
          />
          <div>
            <p className="font-semibold max-md:text-sm">Margot REBOUL</p>
            <p>
              Psychologue clinicienne spécialisée dans l&apos;autisme et les
              troubles du neurodéveloppement
            </p>
          </div>
        </div>
        <div className="h-0.25 bg-custom-darkgreen"></div>
        <div className="flex w-full flex-col items-center justify-center">
          <div>
            <span className="font-semibold">Mail : </span>
            margotreboul.psychologue@hotmail.com
          </div>
          <div>
            <span className="font-semibold">Téléphone : </span>07 49 41 99 08
          </div>
        </div>
      </div>
    </footer>
  );
}
