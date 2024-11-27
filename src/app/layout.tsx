// app/layout.tsx
import "./globals.css";
import { Header, Footer } from "@/components/exports";

import { Metadata } from "next";

const siteTitle = "Margot Reboul - Psychologue TND & Autisme";
const defaultDescription =
  "Psychologue clinicienne à Toulouse et Plaisance-du-Touch, spécialisée dans l'autisme et les troubles du neurodéveloppement (TND). Accompagnement personnalisé pour enfants, adolescents et adultes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://margot-reboul.vercel.app"),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: defaultDescription,
  keywords: [
    "psychologue autisme Toulouse",
    "TND",
    "Plaisance-du-Touch",
    "TSA",
    "TDAH",
    "Haute-Garonne",
    "troubles neurodéveloppementaux",
    "psychologue enfants",
    "psychologue adolescents",
    "psychologue adultes",
  ],
  authors: [{ name: "Margot Reboul" }],
  openGraph: {
    title: siteTitle,
    description: defaultDescription,
    type: "website",
    images: [
      {
        url: "/imgs/margot.png",
        alt: "Margot Reboul - Psychologue clinicienne à Toulouse et Plaisance-du-Touch",
      },
    ],
    locale: "fr_FR",
  },
  icons: {
    icon: "/imgs/logo_sapin.svg",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "FR-31",
    "geo.placename": "Toulouse, Plaisance-du-Touch",
  },
};

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
