// components/price/Price.tsx
interface PriceProps {
  title: string;
  desc: string;
  price: string;
}

export default function Price({ title, desc, price }: PriceProps) {
  return (
    <div className="flex w-4/5 gap-8 rounded-xl bg-white p-10 max-md:w-full max-md:flex-col">
      <p className="flex-1 text-2xl font-bold max-md:text-center max-md:text-lg">
        {title}
      </p>
      <div className="w-0.5 bg-custom-lime max-md:h-0.5 max-md:w-full"></div>
      <div className="flex flex-2 flex-col gap-2">
        <p>{desc}</p>
        <p className="text-xl font-bold">{price}€</p>
      </div>
    </div>
  );
}
