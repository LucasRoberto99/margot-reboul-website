// app/layout.tsx
import "./globals.css";
import { Header, Footer } from "@/components/exports";

import { Metadata } from "next";

import Script from "next/script";

const siteTitle = "Margot Reboul - Psychologue TND & Autisme";
const defaultDescription =
  "Psychologue clinicienne spécialisée dans l'autisme et les troubles du neurodéveloppement. Accompagnement personnalisé pour enfants, adolescents et adultes.";

export const metadata: Metadata = {
  verification: {
    google: "RwMW2b1JjOuMxTnlA_QBUcS21b8KfA5xmpW-CxQnrVE", // Le code fourni par Google
  },
  metadataBase: new URL("https://margot-reboul.vercel.app"),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    nocache: true,
  },
  description: defaultDescription,
  keywords: [
    "psychologue Toulouse",
    "psy Toulouse",
    "psychologue Plaisance du Touch",
    "psy Plaisance du Touch",
    "psychologue enfant",
    "psychologue adulte",
    "psychologue adolescent",
    "consultation psychologue",
    "rendez-vous psychologue",
    "psychologue près de moi",
    "prix consultation psychologue",
    "cabinet psychologue Toulouse",
  ],
  authors: [{ name: "Margot Reboul" }],
  openGraph: {
    title: siteTitle,
    description: defaultDescription,
    type: "website",
    images: [
      {
        url: "/imgs/margot.png",
        width: 1200, // Ajout
        height: 630, // Ajout
        alt: "Margot Reboul - Psychologue clinicienne à Toulouse et Plaisance-du-Touch",
      },
    ],
    locale: "fr_FR",
    siteName: siteTitle, // Ajout
  },
  icons: {
    icon: [
      { url: "/imgs/favicon.svg", type: "image/svg+xml" },
      {
        url: "/imgs/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/imgs/favicon.ico" },
    ],
    apple: [
      {
        url: "/imgs/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/imgs/favicon.ico" }],
  },
  manifest: "/imgs/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "FR-31",
    "geo.placename": "Toulouse, Plaisance-du-Touch",
    "apple-mobile-web-app-title": "Margot Reboul",
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Margot Reboul - Psychologue",
              image: "/imgs/margot.png",
              description: defaultDescription,
              location: [
                {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "25 rue Roquelaine",
                    addressLocality: "Toulouse",
                    addressRegion: "Haute-Garonne",
                    postalCode: "31000",
                    addressCountry: "FR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "43.61129076447967",
                    longitude: "1.446005912082745",
                  },
                },
                {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "18 rue Lorraine",
                    addressLocality: "Plaisance-du-Touch",
                    addressRegion: "Haute-Garonne",
                    postalCode: "31830",
                    addressCountry: "FR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "43.56550747226589",
                    longitude: "1.2859728096477008",
                  },
                },
              ],
              url: "https://margot-reboul.vercel.app",
              telephone: "0749419908", // Ajoutez votre téléphone si souhaité
              "@id": "https://margot-reboul.vercel.app",
              additionalType: "http://schema.org/PsychologicalTreatment",
            }),
          }}
        />
      </body>
    </html>
  );
}
