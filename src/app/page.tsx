"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Stethoscope,
  Scan,
  Glasses,
  Syringe,
  Shield,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Eye,
    title: "Consultation Ophtalmologique",
    description:
      "Examen complet de la vue avec les technologies les plus avancées pour un diagnostic précis.",
  },
  {
    icon: Scan,
    title: "OCT & Imagerie Rétinienne",
    description:
      "Tomographie par cohérence optique pour l'analyse détaillée de la rétine et du nerf optique.",
  },
  {
    icon: Glasses,
    title: "Correction de la Vue",
    description:
      "Prescription de lunettes et lentilles de contact adaptées à votre vision.",
  },
  {
    icon: Syringe,
    title: "Injections Intravitréennes",
    description:
      "Traitement de la DMLA et des pathologies rétiniennes par injections spécialisées.",
  },
  {
    icon: Stethoscope,
    title: "Suivi du Glaucome",
    description:
      "Dépistage et suivi personnalisé du glaucome avec champ visuel et mesure de la tension oculaire.",
  },
  {
    icon: Shield,
    title: "Chirurgie Réfractive",
    description:
      "Bilan pré-opératoire complet pour la chirurgie laser (LASIK, PKR) et implants.",
  },
];

const teamMembers = [
  {
    name: "Dr. Sophie Martin",
    role: "Ophtalmologue — Chirurgie Réfractive",
    description:
      "Spécialiste en chirurgie réfractive avec plus de 15 ans d'expérience.",
  },
  {
    name: "Dr. Alexandre Dubois",
    role: "Ophtalmologue — Rétine Médicale",
    description:
      "Expert en pathologies rétiniennes et injections intravitréennes.",
  },
  {
    name: "Dr. Claire Lefèvre",
    role: "Ophtalmologue — Glaucome",
    description:
      "Spécialiste du glaucome et de la chirurgie filtrante.",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-bronze-200/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-sage-200/20 blur-3xl" />

        {/* Floating eye shapes */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-bronze-200/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-sage-200/20 rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bronze-100/60 border border-bronze-200/50 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-bronze-700 uppercase tracking-wider">
                  Cabinet ouvert — Prenez rendez-vous
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                <span className="text-bronze-900">Votre vision,</span>
                <br />
                <span className="text-gradient-gold">notre expertise</span>
              </h1>

              <p className="text-lg text-bronze-700/80 max-w-lg mb-10 leading-relaxed">
                Cabinet d&apos;ophtalmologie de référence à Boulogne-Billancourt.
                Des soins d&apos;excellence dans un cadre moderne et chaleureux,
                avec les technologies les plus avancées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-500 ease-out hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full text-base font-medium border-2 border-bronze-300 text-bronze-700 hover:bg-bronze-50 transition-all duration-500 ease-out flex items-center justify-center gap-2"
                >
                  Nos services
                </Link>
              </div>

              {/* Quick info */}
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-bronze-600">
                  <MapPin className="w-4 h-4 text-bronze-500" />
                  <span>Boulogne-Billancourt</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-bronze-600">
                  <Phone className="w-4 h-4 text-bronze-500" />
                  <span>01 89 46 29 59</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-bronze-600">
                  <Clock className="w-4 h-4 text-bronze-500" />
                  <span>Lun–Ven 9h–18h</span>
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Main circle */}
                <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-bronze-100 via-cream-200 to-sage-100 flex items-center justify-center shadow-2xl shadow-bronze-200/30">
                  <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-white via-cream-50 to-bronze-50 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Oculus Santé Ophtalmologie"
                      width={280}
                      height={280}
                      className="w-64 h-auto object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-8 glass-card rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-sage-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-bronze-800">
                        Équipement
                      </p>
                      <p className="text-[10px] text-bronze-500">
                        Dernière génération
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services" className="py-24 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Nos expertises
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-4">
              Services d&apos;ophtalmologie
            </h2>
            <p className="text-lg text-bronze-600/80 max-w-2xl mx-auto">
              Une prise en charge complète de votre santé visuelle avec des
              équipements de dernière génération.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="group p-8 rounded-3xl border border-bronze-100 hover:border-bronze-200 bg-gradient-to-br from-white to-cream-50 hover-lift cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-bronze flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-bronze-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-bronze-600/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-bronze-600 hover:text-bronze-500 font-medium transition-colors group"
            >
              Découvrir tous nos services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ ABOUT PREVIEW ═══════════════════ */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-bronze-200 via-cream-300 to-emerald-100 overflow-hidden shadow-2xl shadow-bronze-200/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full gradient-bronze mx-auto mb-4 flex items-center justify-center">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-bronze-800 font-serif text-xl font-semibold">
                        Un cadre d&apos;exception
                      </p>
                      <p className="text-bronze-600 text-sm mt-2">
                        Design moderne • Matériaux nobles • Confort optimal
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-sage-200/50 -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-bronze-200/50 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
                À propos
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-6">
                L&apos;excellence au service de votre regard
              </h2>
              <p className="text-lg text-bronze-600/80 leading-relaxed mb-6">
                Chez Oculus Santé, nous combinons expertise médicale de pointe et
                environnement haut de gamme pour vous offrir une expérience de
                soins unique. Notre cabinet, situé au cœur de Boulogne-Billancourt,
                a été conçu pour votre confort et votre bien-être.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Équipements de dernière génération",
                  "Équipe de spécialistes expérimentés",
                  "Cadre moderne et chaleureux",
                  "Prise en charge personnalisée",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-sage-500" />
                    </div>
                    <span className="text-bronze-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 gradient-bronze text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM PREVIEW ═══════════════════ */}
      <section id="equipe" className="py-24 bg-cream-200/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Notre équipe
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-4">
              Des spécialistes à votre écoute
            </h2>
            <p className="text-lg text-bronze-600/80 max-w-2xl mx-auto">
              Une équipe pluridisciplinaire dédiée à la santé de vos yeux.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.15}>
                <div className="group text-center p-8 rounded-3xl border border-bronze-100 hover:border-bronze-200 bg-gradient-to-br from-white to-cream-50 hover-lift">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-bronze-200 to-cream-200 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl font-bold text-bronze-600 font-serif">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-bronze-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-bronze-500 mb-4">{member.role}</p>
                  <p className="text-bronze-600/80 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 text-bronze-600 hover:text-bronze-500 font-medium transition-colors group"
            >
              Voir toute l&apos;équipe
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="py-20 bg-emerald-700/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Années d'expérience" },
              { value: "10k+", label: "Patients suivis" },
              { value: "3", label: "Spécialistes" },
              { value: "100%", label: "Équipement moderne" },
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2 font-serif">
                  {stat.value}
                </p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY PREVIEW ═══════════════════ */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Notre cabinet
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-4">
              Un espace pensé pour vous
            </h2>
            <p className="text-lg text-bronze-600/80 max-w-2xl mx-auto">
              Découvrez notre cabinet alliant modernité, confort et élégance.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Accueil",
                color: "from-bronze-200 to-cream-200",
                icon: "🏛️",
              },
              {
                title: "Salle d'attente",
                color: "from-sage-200 to-cream-200",
                icon: "🪴",
              },
              {
                title: "Salle d'examen",
                color: "from-cream-200 to-bronze-200",
                icon: "🔬",
              },
              {
                title: "Équipements",
                color: "from-bronze-200 to-sage-200",
                icon: "⚕️",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center hover-lift cursor-pointer group overflow-hidden`}
                >
                  <div className="text-center">
                    <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <p className="text-sm font-medium text-bronze-800">
                      {item.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 text-bronze-600 hover:text-bronze-500 font-medium transition-colors group"
            >
              Voir la galerie complète
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-6">
              Prenez soin de votre vue
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10 max-w-2xl mx-auto">
              N&apos;attendez pas pour consulter. Notre équipe est à votre
              disposition pour un rendez-vous dans les meilleurs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-500 ease-out hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33189462959"
                className="px-8 py-4 rounded-full text-base font-medium border-2 border-bronze-300 text-bronze-700 hover:bg-bronze-50 transition-all duration-500 ease-out flex items-center justify-center gap-2"
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
