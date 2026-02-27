"use client";

import {
  Eye,
  Stethoscope,
  Scan,
  Glasses,
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
      "Examen complet de la vue avec les technologies avancées pour un diagnostic précis et personnalisé.",
    details: [
      "Mesure de l'acuité visuelle",
      "Examen du fond d'œil",
      "Mesure de la pression intraoculaire",
      "Réfraction automatique et subjective",
      "Examen à la lampe à fente",
    ],
    gradient: "from-amber-50 via-orange-50 to-yellow-50",
    accentColor: "bg-amber-500",
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
    gradient: "from-emerald-50 via-teal-50 to-cyan-50",
    accentColor: "bg-emerald-500",
  },
  {
    icon: Glasses,
    title: "Correction de la Vue",
    description:
      "Prescription de lunettes et lentilles de contact adaptées à votre vision et votre mode de vie.",
    details: [
      "Prescription de lunettes correctrices",
      "Lentilles souples et rigides",
      "Lentilles multifocales",
      "Contrôle de la myopie chez l'enfant",
    ],
    gradient: "from-blue-50 via-indigo-50 to-violet-50",
    accentColor: "bg-blue-500",
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
    gradient: "from-rose-50 via-pink-50 to-fuchsia-50",
    accentColor: "bg-rose-500",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <div
      className="group relative rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50 overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-bronze-100/50 transition-all duration-500 h-full"
    >
      {/* Decorative background glow */}
      <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-70 blur-3xl transition-all duration-700`} />
      <div className={`absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 blur-3xl transition-all duration-700 delay-100`} />

      {/* Top accent bar */}
      <div className="h-1 w-full gradient-bronze opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 lg:p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl gradient-bronze flex items-center justify-center shadow-lg shadow-bronze-200/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-5">
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-bronze-900 mb-3 group-hover:text-bronze-700 transition-colors duration-300">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-bronze-600/80 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Details list */}
        <ul className="space-y-2 mt-auto">
          {service.details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-2.5 text-bronze-700 group-hover:text-bronze-800 transition-colors duration-300"
            >
              <CheckCircle className="w-4 h-4 text-sage-500 shrink-0" />
              <span className="text-xs lg:text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom shine effect on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-emerald-50/60 backdrop-blur-sm">
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

      {/* Services */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <ServiceCard service={service} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-200/60 backdrop-blur-sm">
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
              <a
                href="https://www.doctolib.fr/ophtalmologue/paris/veronica-stan"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </a>
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
