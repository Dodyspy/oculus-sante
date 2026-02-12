import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedBackground from "@/components/EnhancedBackground";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Oculus Santé Ophtalmologie | Boulogne-Billancourt",
  description:
    "Cabinet d'ophtalmologie moderne à Boulogne-Billancourt. Consultations, examens de la vue, chirurgie réfractive et suivi personnalisé par des spécialistes qualifiés.",
  keywords:
    "ophtalmologie, ophtalmologue, Boulogne-Billancourt, consultation yeux, chirurgie réfractive, examen vue, Oculus Santé",
  openGraph: {
    title: "Oculus Santé Ophtalmologie",
    description:
      "Votre cabinet d'ophtalmologie de référence à Boulogne-Billancourt",
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
        <EnhancedBackground />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
