// app/layout.tsx
import "./globals.css";
import { Header, Footer } from "@/components/exports";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ backgroundColor: "#c1e4a8" }}>
        <div className="flex flex-col items-center font-red-hat text-lg max-md:text-sm">
          <Header />
          <div className="flex w-full max-w-6xl justify-center">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
