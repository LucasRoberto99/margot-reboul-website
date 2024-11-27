// components/home/Wrapper.tsx
interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-20 rounded-xl bg-white py-16 max-md:mx-3 max-md:w-full">
      {children}
    </div>
  );
}
