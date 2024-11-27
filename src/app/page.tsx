// app/page.tsx
import { About, Details, Wrapper } from "@/components/exports";
import Image from "next/image";

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
