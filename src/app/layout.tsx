import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedBackground from "@/components/EnhancedBackground";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://oculus-sante.fr"),
  title: "Ophtalmologue Boulogne-Billancourt | Cabinet Oculus Santé - Rendez-vous",
  description:
    "Cabinet d'ophtalmologie Oculus Santé à Boulogne-Billancourt (92100). Consultations, examens de la vue, OCT, rétinographie, suivi du glaucome. Prenez RDV sur Doctolib. 3 quai de Stalingrad.",
  keywords:
    "ophtalmologue Boulogne-Billancourt, ophtalmologie Boulogne-Billancourt, ophtalmo Boulogne, rendez-vous ophtalmologue, consultation ophtalmologique, examen vue Boulogne-Billancourt, OCT rétine, glaucome, rétinographie, correction vue, lunettes, lentilles, ophtalmologue 92100, cabinet ophtalmologie, Oculus Santé, ophtalmologue près de moi, ophtalmo Hauts-de-Seine, ophtalmologue Issy-les-Moulineaux, ophtalmologue Paris 16, médecin yeux Boulogne, spécialiste vue, examen fond oeil, tension oculaire, champ visuel",
  authors: [{ name: "Cabinet Oculus Santé" }],
  creator: "Cabinet Oculus Santé",
  publisher: "Cabinet Oculus Santé",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ophtalmologue Boulogne-Billancourt | Cabinet Oculus Santé",
    description:
      "Cabinet d'ophtalmologie à Boulogne-Billancourt. Consultations, OCT, rétinographie, suivi du glaucome. Prenez RDV sur Doctolib.",
    url: "https://oculus-sante.fr",
    siteName: "Oculus Santé",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Cabinet Oculus Santé - Ophtalmologie Boulogne-Billancourt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ophtalmologue Boulogne-Billancourt | Cabinet Oculus Santé",
    description:
      "Cabinet d'ophtalmologie à Boulogne-Billancourt. Consultations, OCT, suivi du glaucome. Prenez RDV sur Doctolib.",
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
  },
  verification: {
    google: "verification_token_placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:rounded-full focus:gradient-bronze focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <EnhancedBackground />
        <Navbar />
        <PageTransition>
          <main id="main-content" role="main" aria-label="Contenu principal">{children}</main>
        </PageTransition>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
