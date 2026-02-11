"use client";

import Link from "next/link";
import { ArrowRight, Phone, Award, GraduationCap, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const teamMembers = [
  {
    name: "Dr. Sophie Martin",
    role: "Ophtalmologue — Chirurgie Réfractive",
    description:
      "Spécialiste en chirurgie réfractive avec plus de 15 ans d'expérience. Diplômée de la Faculté de Médecine Paris-Descartes, le Dr. Martin est reconnue pour son expertise en LASIK et implants intraoculaires.",
    specialties: [
      "Chirurgie réfractive (LASIK, PKR)",
      "Implants intraoculaires",
      "Cataracte",
      "Bilan pré-opératoire",
    ],
    education: "Faculté de Médecine Paris-Descartes",
  },
  {
    name: "Dr. Alexandre Dubois",
    role: "Ophtalmologue — Rétine Médicale",
    description:
      "Expert en pathologies rétiniennes et injections intravitréennes. Ancien chef de clinique à l'Hôpital des Quinze-Vingts, le Dr. Dubois apporte une expertise de pointe dans le traitement de la DMLA et des pathologies maculaires.",
    specialties: [
      "DMLA et pathologies maculaires",
      "Injections intravitréennes",
      "Rétinopathie diabétique",
      "Imagerie rétinienne avancée",
    ],
    education: "Hôpital des Quinze-Vingts, Paris",
  },
  {
    name: "Dr. Claire Lefèvre",
    role: "Ophtalmologue — Glaucome",
    description:
      "Spécialiste du glaucome et de la chirurgie filtrante. Formée à l'Hôpital Cochin, le Dr. Lefèvre assure un suivi personnalisé et rigoureux de chaque patient atteint de glaucome.",
    specialties: [
      "Dépistage et suivi du glaucome",
      "Chirurgie filtrante",
      "Laser SLT",
      "Champ visuel et OCT",
    ],
    education: "Hôpital Cochin, Paris",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Des praticiens formés dans les meilleurs centres hospitaliers français, en formation continue permanente.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Une écoute attentive et une prise en charge humaine, adaptée à chaque patient.",
  },
  {
    icon: GraduationCap,
    title: "Innovation",
    description:
      "Des équipements de dernière génération et des techniques médicales à la pointe de la recherche.",
  },
];

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Notre équipe
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-bronze-900 mb-6">
              Des spécialistes dévoués
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Une équipe pluridisciplinaire d&apos;ophtalmologues expérimentés,
              unis par la passion de l&apos;excellence médicale et le souci du
              bien-être de chaque patient.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl gradient-bronze flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
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

      {/* Team Members */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name}>
                <div
                  className={`grid lg:grid-cols-5 gap-12 items-start ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-2 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-bronze-200 via-cream-200 to-sage-100 flex items-center justify-center shadow-xl shadow-bronze-100/50">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-bronze-300 to-cream-300 mx-auto mb-6 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white font-serif">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <p className="text-bronze-700 font-serif text-lg font-semibold">
                          {member.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-3 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h2 className="text-3xl font-bold text-bronze-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-bronze-500 font-medium mb-6">
                      {member.role}
                    </p>
                    <p className="text-lg text-bronze-600/80 leading-relaxed mb-8">
                      {member.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-500 mb-3">
                        Spécialités
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-4 py-2 rounded-full bg-bronze-50 text-bronze-700 text-sm border border-bronze-100"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-500 mb-2">
                        Formation
                      </h3>
                      <p className="text-bronze-600 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-bronze-400" />
                        {member.education}
                      </p>
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
              Rencontrez notre équipe
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10">
              Prenez rendez-vous pour une consultation personnalisée avec l&apos;un
              de nos spécialistes.
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
