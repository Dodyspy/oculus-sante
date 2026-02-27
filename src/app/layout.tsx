import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedBackground from "@/components/EnhancedBackground";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "OPHTALMOLOGIE Oculus Santé | Boulogne-Billancourt",
  description:
    "Cabinet d'ophtalmologie à Boulogne-Billancourt. Consultations, examens de la vue, OCT, correction visuelle et suivi du glaucome par des spécialistes qualifiés.",
  keywords:
    "ophtalmologie, ophtalmologue, Boulogne-Billancourt, consultation yeux, examen vue, OCT, glaucome, correction vue, Oculus Santé",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OPHTALMOLOGIE Oculus Santé",
    description:
      "Votre cabinet d'ophtalmologie à Boulogne-Billancourt",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
