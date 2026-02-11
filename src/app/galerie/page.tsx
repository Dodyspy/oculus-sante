"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  {
    title: "Réception",
    description: "Un accueil chaleureux dans un cadre élégant en marbre et bronze.",
    color: "from-bronze-200 via-cream-200 to-bronze-100",
    size: "col-span-2 row-span-2",
    icon: "🏛️",
  },
  {
    title: "Salle d'attente",
    description: "Confort et sérénité avec mobilier design et touches végétales.",
    color: "from-sage-200 via-cream-200 to-sage-100",
    size: "col-span-1 row-span-1",
    icon: "🪴",
  },
  {
    title: "Espace détente",
    description: "Un espace pensé pour votre bien-être avant la consultation.",
    color: "from-cream-200 via-bronze-100 to-cream-100",
    size: "col-span-1 row-span-1",
    icon: "☕",
  },
  {
    title: "Salle d'examen 1",
    description: "Équipée des dernières technologies d'imagerie ophtalmologique.",
    color: "from-bronze-100 via-cream-200 to-sage-100",
    size: "col-span-1 row-span-1",
    icon: "🔬",
  },
  {
    title: "Salle d'examen 2",
    description: "Lampe à fente et réfractomètre automatique de dernière génération.",
    color: "from-sage-100 via-cream-200 to-bronze-200",
    size: "col-span-1 row-span-1",
    icon: "👁️",
  },
  {
    title: "Salle OCT",
    description: "Tomographe OCT haute résolution pour l'imagerie rétinienne.",
    color: "from-cream-200 via-sage-100 to-bronze-100",
    size: "col-span-2 row-span-1",
    icon: "📡",
  },
  {
    title: "Salle laser",
    description: "Équipement laser YAG et SLT pour les traitements spécialisés.",
    color: "from-bronze-200 via-cream-300 to-sage-200",
    size: "col-span-1 row-span-1",
    icon: "⚡",
  },
  {
    title: "Bureau médical",
    description: "Un espace de consultation privé et confortable.",
    color: "from-sage-200 via-cream-200 to-bronze-100",
    size: "col-span-1 row-span-1",
    icon: "📋",
  },
  {
    title: "Couloir principal",
    description: "Panneaux en bois naturel et éclairage LED intégré.",
    color: "from-bronze-100 via-cream-100 to-sage-100",
    size: "col-span-1 row-span-1",
    icon: "🚪",
  },
  {
    title: "Matériaux nobles",
    description: "Bronze Kito, bois naturel et marbre blanc pour un cadre d'exception.",
    color: "from-bronze-300 via-bronze-200 to-cream-200",
    size: "col-span-1 row-span-1",
    icon: "✨",
  },
];

export default function GaleriePage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Notre cabinet
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-bronze-900 mb-6">
              Galerie
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre cabinet d&apos;ophtalmologie, un espace alliant
              modernité, confort et élégance, conçu pour votre bien-être.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
            {galleryItems.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 0.05}
                className={item.size}
              >
                <div
                  onClick={() => setSelected(index)}
                  className={`w-full h-full rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center cursor-pointer group overflow-hidden relative hover-lift`}
                >
                  <div className="absolute inset-0 bg-bronze-900/0 group-hover:bg-bronze-900/10 transition-colors duration-300" />
                  <div className="text-center relative z-10 p-4">
                    <span className="text-4xl lg:text-5xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <p className="text-sm lg:text-base font-semibold text-bronze-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-bronze-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[200px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bronze-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bronze-50 flex items-center justify-center hover:bg-bronze-100 transition-colors"
              >
                <X className="w-5 h-5 text-bronze-700" />
              </button>

              <div
                className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${galleryItems[selected].color} flex items-center justify-center mb-6`}
              >
                <span className="text-7xl">
                  {galleryItems[selected].icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-bronze-900 mb-2">
                {galleryItems[selected].title}
              </h3>
              <p className="text-bronze-600/80 leading-relaxed">
                {galleryItems[selected].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <section className="py-16 bg-cream-100/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Bronze Kito",
                  description:
                    "Panneaux décoratifs Pfleiderer F76110 SD pour une ambiance chaleureuse et luxueuse.",
                },
                {
                  title: "Bois naturel",
                  description:
                    "Panneaux en bois à lames verticales pour une atmosphère apaisante et naturelle.",
                },
                {
                  title: "Marbre blanc",
                  description:
                    "Comptoir d'accueil en marbre blanc veiné, symbole d'élégance et de raffinement.",
                },
              ].map((material) => (
                <div key={material.title} className="p-6">
                  <h3 className="text-lg font-semibold text-bronze-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-bronze-600/80 text-sm leading-relaxed">
                    {material.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-bronze-900 mb-6">
              Venez découvrir notre cabinet
            </h2>
            <p className="text-lg text-bronze-600/80 mb-10">
              Prenez rendez-vous et découvrez un espace conçu pour votre confort.
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
