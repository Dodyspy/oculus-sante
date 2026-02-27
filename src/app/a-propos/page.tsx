import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Shield,
  Heart,
  Eye,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Shield,
    title: "Qualité des soins",
    description:
      "Des soins de haute qualité grâce à des équipements de dernière génération et une mise à jour continue des pratiques.",
  },
  {
    icon: Heart,
    title: "Approche humaine",
    description:
      "Chaque patient est unique. Nous prenons le temps d'écouter, d'expliquer et d'accompagner avec bienveillance.",
  },
  {
    icon: Eye,
    title: "Vision globale",
    description:
      "Une prise en charge complète de votre santé visuelle, du dépistage au traitement, dans un cadre moderne et accueillant.",
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
              OPHTALMOLOGIE Oculus Santé
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Un nouveau cabinet d&apos;ophtalmologie à Boulogne-Billancourt,
              au service de votre vision dans un cadre moderne et
              chaleureux.
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
                Oculus Santé ouvre ses portes au 3 quai de Stalingrad à
                Boulogne-Billancourt avec une ambition claire : offrir à chaque
                patient des soins ophtalmologiques de qualité dans un
                environnement pensé pour votre confort et votre sérénité.
              </p>
              <p className="text-lg text-bronze-600/80 leading-relaxed mb-6">
                Notre cabinet a été entièrement conçu pour allier performance
                médicale et bien-être. Un espace moderne, lumineux et accueillant
                où chaque détail a été soigné pour rendre votre visite la plus
                agréable possible.
              </p>
              <p className="text-lg text-bronze-600/80 leading-relaxed">
                Un savoir-faire au service de votre santé
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

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-bronze-900 mb-6">
              Venez nous rencontrer
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10">
              Découvrez notre cabinet et rencontrez votre spécialiste.
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
