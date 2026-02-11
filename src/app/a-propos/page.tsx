"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Eye,
  Shield,
  Heart,
  Award,
  Sparkles,
  Target,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    year: "2010",
    title: "Fondation",
    description:
      "Création du cabinet Oculus Santé avec la vision de proposer une ophtalmologie d'excellence accessible à tous.",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Agrandissement du cabinet et acquisition d'équipements OCT de dernière génération.",
  },
  {
    year: "2020",
    title: "Innovation",
    description:
      "Intégration de l'intelligence artificielle dans le dépistage des pathologies rétiniennes.",
  },
  {
    year: "2024",
    title: "Nouveau cabinet",
    description:
      "Inauguration de notre nouveau cabinet au 3 quai de Stalingrad, un espace entièrement repensé pour votre confort.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Excellence médicale",
    description:
      "Nous nous engageons à offrir les meilleurs soins possibles grâce à une formation continue et des équipements de pointe.",
  },
  {
    icon: Heart,
    title: "Approche humaine",
    description:
      "Chaque patient est unique. Nous prenons le temps d'écouter, d'expliquer et d'accompagner.",
  },
  {
    icon: Sparkles,
    title: "Innovation constante",
    description:
      "Nous investissons dans les dernières technologies pour un diagnostic plus précis et des traitements plus efficaces.",
  },
  {
    icon: Target,
    title: "Précision",
    description:
      "Des diagnostics rigoureux et des traitements ciblés pour des résultats optimaux.",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Nos praticiens sont reconnus par leurs pairs et formés dans les meilleurs centres hospitaliers.",
  },
  {
    icon: Eye,
    title: "Vision globale",
    description:
      "Une prise en charge complète de votre santé visuelle, du dépistage au traitement.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              À propos
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-bronze-900 mb-6">
              Oculus Santé
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 10 ans, nous mettons notre expertise au service de
              votre vision. Un cabinet d&apos;ophtalmologie où l&apos;excellence
              médicale rencontre le confort et l&apos;élégance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-bronze-200 via-cream-200 to-sage-100 flex items-center justify-center shadow-2xl shadow-bronze-200/30 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Oculus Santé Ophtalmologie"
                    width={400}
                    height={400}
                    className="w-3/4 h-auto object-contain drop-shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-sage-200/40 -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-bronze-200/40 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl font-bold text-bronze-900 mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-bronze-600/80 leading-relaxed mb-6">
                Chez Oculus Santé, notre mission est simple : offrir à chaque
                patient les meilleurs soins ophtalmologiques possibles, dans un
                environnement qui inspire confiance et sérénité.
              </p>
              <p className="text-lg text-bronze-600/80 leading-relaxed mb-6">
                Situé au 3 quai de Stalingrad à Boulogne-Billancourt, notre
                cabinet a été entièrement conçu pour allier confort du patient et
                performance médicale. Des matériaux nobles — bronze, bois naturel,
                marbre — créent une atmosphère chaleureuse et rassurante.
              </p>
              <p className="text-lg text-bronze-600/80 leading-relaxed">
                Nos ophtalmologues, formés dans les meilleurs centres hospitaliers
                parisiens, mettent leur expertise au service de votre santé
                visuelle avec passion et dévouement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-200/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Nos valeurs
            </p>
            <h2 className="text-4xl font-bold text-bronze-900 mb-4">
              Ce qui nous guide
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-bronze-100 hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl gradient-bronze flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-bronze-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-bronze-600/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Notre histoire
            </p>
            <h2 className="text-4xl font-bold text-bronze-900 mb-4">
              Un parcours d&apos;excellence
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-bronze-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.15}>
                  <div className="flex gap-8 items-start">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full gradient-bronze flex items-center justify-center text-white font-bold font-serif text-sm shrink-0 z-10">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-cream-50 border border-bronze-100">
                      <span className="md:hidden text-sm font-bold text-bronze-500 mb-1 block">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-bronze-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-bronze-600/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-bronze-900 mb-6">
              Venez nous rencontrer
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10">
              Découvrez notre cabinet et rencontrez notre équipe de spécialistes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33189462959"
                className="px-8 py-4 rounded-full text-base font-medium border-2 border-bronze-300 text-bronze-700 hover:bg-bronze-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                01 89 46 29 59
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
