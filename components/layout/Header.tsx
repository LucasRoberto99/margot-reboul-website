"use client";

// components/layout/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavButton, RdvButton } from "../exports";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between p-10 max-xl:flex-col max-xl:gap-10 max-md:mx-4 max-md:px-3">
      <Link href="/">
        <Image
          src="/imgs/logo_nom.svg"
          alt="margot-logo"
          width={240}
          height={80}
          className="h-20"
        />
      </Link>
      <div className="no-scrollbar flex gap-6 max-md:w-full max-md:overflow-x-scroll max-md:py-2">
        <Link href="/">
          <NavButton title="Accueil" isActive={pathname === "/"} />
        </Link>
        <Link href="/service">
          <NavButton title="Prestations" isActive={pathname === "/service"} />
        </Link>
        <Link href="/price">
          <NavButton title="Tarifs" isActive={pathname === "/price"} />
        </Link>
        <Link href="/contact">
          <NavButton title="Contact" isActive={pathname === "/contact"} />
        </Link>
      </div>
      <div>
        <RdvButton
          href="https://www.doctolib.fr/psychologue/plaisance-du-touch/margot-reboul/booking/motives?specialityId=14&telehealth=false&placeId=practice-628639&bookingFunnelSource=profile"
          title="Prendre rendez-vous"
        />
      </div>
    </header>
  );
};

export default Header;
