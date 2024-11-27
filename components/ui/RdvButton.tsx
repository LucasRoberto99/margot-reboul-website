// components/ui/RdvButton.tsx
interface RdvButtonProps {
  href: string;
  title: string;
}

export default function RdvButton({ href, title }: RdvButtonProps) {
  return (
    <a
      href={href}
      className={
        "inline-block rounded-xl border-2 border-custom-darkgreen bg-custom-darkgreen px-6 py-3 text-center font-tango text-xl text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-custom-green hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-custom-lime focus:ring-opacity-50"
      }
    >
      {title}
    </a>
  );
}
