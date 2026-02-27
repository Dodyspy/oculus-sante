"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  Stethoscope,
  Scan,
  Glasses,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Logo3D from "@/components/Logo3D";
import { ScrollReveal, StaggerReveal } from "@/components/GSAPAnimations";

const services = [
  {
    icon: Eye,
    title: "Consultation Ophtalmologique",
    description:
      "Examen complet de la vue avec les technologies avancées pour un diagnostic précis.",
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
    icon: Stethoscope,
    title: "Suivi du Glaucome",
    description:
      "Dépistage et suivi personnalisé du glaucome avec champ visuel et mesure de la tension oculaire.",
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
                avec les technologies avancées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="https://www.doctolib.fr/ophtalmologue/paris/veronica-stan"
                  className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 flex items-center justify-center gap-2"
                  strength={0.4}
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  href="/services"
                  className="px-8 py-4 rounded-full text-base font-medium border-2 border-bronze-300 text-bronze-700 hover:bg-bronze-50 flex items-center justify-center gap-2"
                  strength={0.3}
                >
                  Nos services
                </MagneticButton>
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
                  <span>Lun–Ven 9h–19h</span>
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
                {/* Main circle with 3D Logo */}
                <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-bronze-100 via-cream-200 to-sage-100 flex items-center justify-center shadow-2xl shadow-bronze-200/30">
                  <Logo3D />
                </div>

                {/* Floating cards with TiltCard */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-8"
                >
                  <TiltCard className="glass-card rounded-2xl px-4 py-3 shadow-lg" tiltAmount={15}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Scan className="w-4 h-4 text-emerald-600" />
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
                  </TiltCard>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section id="services" className="py-24 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16" direction="up" distance={40}>
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
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <TiltCard key={service.title} className="h-full" tiltAmount={8}>
                <div className="group p-8 rounded-3xl border border-bronze-100 hover:border-bronze-200 bg-gradient-to-br from-white to-cream-50 cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-bronze flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-bronze-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-bronze-600/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </StaggerReveal>

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
            <ScrollReveal direction="left" distance={60}>
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
            </ScrollReveal>

            <ScrollReveal direction="right" distance={60} delay={0.2}>
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
              <StaggerReveal className="space-y-4 mb-8" staggerDelay={0.1}>
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
              </StaggerReveal>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 gradient-bronze text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" distance={50}>
            <h2 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-6">
              Prenez soin de votre vue
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10 max-w-2xl mx-auto">
              N&apos;attendez pas pour consulter. Notre équipe est à votre
              disposition pour un rendez-vous dans les meilleurs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="https://www.doctolib.fr/ophtalmologue/paris/veronica-stan"
                className="gradient-bronze text-white px-8 py-4 rounded-full text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 flex items-center justify-center gap-2"
                strength={0.4}
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="tel:+33189462959"
                className="px-8 py-4 rounded-full text-base font-medium border-2 border-bronze-300 text-bronze-700 hover:bg-bronze-50 flex items-center justify-center gap-2"
                strength={0.3}
              >
                <Phone className="w-4 h-4" />
                01 89 46 29 59
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
