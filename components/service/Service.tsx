// components/service/Service.tsx
import Image from "next/image";

interface ServiceProps {
  title: string;
  desc: string;
  img: string;
}

export default function Service({ title, desc, img }: ServiceProps) {
  return (
    <div className="flex w-4/5 items-start justify-between gap-12 rounded-xl bg-white p-10 max-lg:flex-col max-md:w-full">
      <Image
        src={img}
        alt={`image-${title}`}
        width={320}
        height={320}
        className="aspect-square w-80 rounded-md object-cover max-lg:self-center"
      />
      <div className="flex flex-1 flex-col gap-8">
        <h2 className="text-3xl font-bold max-lg:text-center max-md:text-xl">
          {title}
        </h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
