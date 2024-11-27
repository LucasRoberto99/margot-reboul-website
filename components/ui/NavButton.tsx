// components/ui/NavButton.tsx
interface NavButtonProps {
  isActive: boolean;
  title: string;
}

export default function NavButton({ isActive, title }: NavButtonProps) {
  return (
    <div
      className={`rounded-full px-4 py-2 font-tango ${
        isActive
          ? "bg-custom-green text-white"
          : "bg-custom-lime text-custom-darkgreen"
      } min-w-fit shrink-0 whitespace-nowrap border-2 border-custom-darkgreen shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-custom-green hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-custom-darkgreen focus:ring-opacity-50`}
    >
      {title}
    </div>
  );
}
