"use client";

import Link from "next/link";
import {
  Eye,
  Stethoscope,
  Scan,
  Glasses,
  Syringe,
  Shield,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Eye,
    title: "Consultation Ophtalmologique",
    description:
      "Examen complet de la vue avec les technologies les plus avancées pour un diagnostic précis et personnalisé.",
    details: [
      "Mesure de l'acuité visuelle",
      "Examen du fond d'œil",
      "Mesure de la pression intraoculaire",
      "Réfraction automatique et subjective",
      "Examen à la lampe à fente",
    ],
  },
  {
    icon: Scan,
    title: "OCT & Imagerie Rétinienne",
    description:
      "Tomographie par cohérence optique pour l'analyse détaillée de la rétine et du nerf optique.",
    details: [
      "OCT maculaire haute résolution",
      "OCT du nerf optique (glaucome)",
      "Angiographie OCT sans injection",
      "Rétinographie couleur",
      "Suivi évolutif informatisé",
    ],
  },
  {
    icon: Glasses,
    title: "Correction de la Vue",
    description:
      "Prescription de lunettes et lentilles de contact adaptées à votre vision et votre mode de vie.",
    details: [
      "Prescription de lunettes correctrices",
      "Adaptation de lentilles de contact",
      "Lentilles souples et rigides",
      "Lentilles multifocales",
      "Contrôle de la myopie chez l'enfant",
    ],
  },
  {
    icon: Syringe,
    title: "Injections Intravitréennes",
    description:
      "Traitement de la DMLA et des pathologies rétiniennes par injections spécialisées en conditions stériles.",
    details: [
      "Traitement de la DMLA exsudative",
      "Œdème maculaire diabétique",
      "Occlusions veineuses rétiniennes",
      "Anti-VEGF de dernière génération",
      "Suivi rapproché et personnalisé",
    ],
  },
  {
    icon: Stethoscope,
    title: "Suivi du Glaucome",
    description:
      "Dépistage et suivi personnalisé du glaucome avec les technologies les plus récentes.",
    details: [
      "Tonométrie de précision",
      "Champ visuel automatisé",
      "Pachymétrie cornéenne",
      "OCT des fibres nerveuses",
      "Gonioscopie",
    ],
  },
  {
    icon: Shield,
    title: "Chirurgie Réfractive",
    description:
      "Bilan pré-opératoire complet pour la chirurgie laser et les implants intraoculaires.",
    details: [
      "Bilan complet pré-opératoire",
      "Topographie cornéenne",
      "Aberrométrie",
      "Orientation vers le chirurgien adapté",
      "Suivi post-opératoire",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Nos expertises
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-bronze-900 mb-6">
              Services d&apos;ophtalmologie
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Une prise en charge complète et personnalisée de votre santé
              visuelle, avec des équipements de dernière génération et une
              équipe de spécialistes dédiés.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl gradient-bronze flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-bronze-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-bronze-600/80 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-bronze-700"
                        >
                          <CheckCircle className="w-5 h-5 text-sage-500 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-bronze-100 via-cream-200 to-sage-100 flex items-center justify-center shadow-xl shadow-bronze-100/50">
                      <div className="text-center p-8">
                        <service.icon className="w-20 h-20 text-bronze-400 mx-auto mb-4" />
                        <p className="text-bronze-600 font-serif text-lg font-semibold">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-100/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-bronze-900 mb-6">
              Besoin d&apos;une consultation ?
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10">
              Prenez rendez-vous dès maintenant avec l&apos;un de nos
              spécialistes.
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
