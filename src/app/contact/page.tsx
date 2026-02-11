"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    motif: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      motif: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-500 mb-3">
              Contact
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-bronze-900 mb-6">
              Prenez rendez-vous
            </h1>
            <p className="text-xl text-bronze-600/80 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous par téléphone ou via le formulaire ci-dessous.
              Notre équipe vous répondra dans les meilleurs délais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Téléphone",
                content: "01 89 46 29 59",
                href: "tel:+33189462959",
                sub: "Lun–Ven 9h–18h",
              },
              {
                icon: Mail,
                title: "Email",
                content: "contact@oculus-sante.fr",
                href: "mailto:contact@oculus-sante.fr",
                sub: "Réponse sous 24h",
              },
              {
                icon: MapPin,
                title: "Adresse",
                content: "3 quai de Stalingrad",
                href: "https://maps.google.com/?q=3+quai+de+Stalingrad+92100+Boulogne-Billancourt",
                sub: "92100 Boulogne-Billancourt",
              },
              {
                icon: Clock,
                title: "Horaires",
                content: "Lun–Ven : 9h–18h",
                href: null,
                sub: "Sam : 9h–13h",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="p-6 rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50 hover-lift text-center h-full">
                  <div className="w-12 h-12 rounded-xl gradient-bronze flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-500 mb-2">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-bronze-800 font-medium hover:text-bronze-500 transition-colors block"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-bronze-800 font-medium">{item.content}</p>
                  )}
                  <p className="text-xs text-bronze-500 mt-1">{item.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-cream-200/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50">
                <h2 className="text-2xl font-bold text-bronze-900 mb-2">
                  Demande de rendez-vous
                </h2>
                <p className="text-bronze-600/80 mb-8">
                  Remplissez le formulaire et nous vous recontacterons rapidement.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                    >
                      <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-sage-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-bronze-900 mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-bronze-600/80">
                        Nous vous recontacterons dans les meilleurs délais.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                            Nom *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.nom}
                            onChange={(e) =>
                              setFormState({ ...formState, nom: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800 placeholder:text-bronze-300"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.prenom}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                prenom: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800 placeholder:text-bronze-300"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800 placeholder:text-bronze-300"
                            placeholder="votre@email.fr"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            value={formState.telephone}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                telephone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800 placeholder:text-bronze-300"
                            placeholder="06 XX XX XX XX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                          Motif de consultation
                        </label>
                        <select
                          value={formState.motif}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              motif: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800"
                        >
                          <option value="">Sélectionnez un motif</option>
                          <option value="consultation">
                            Consultation générale
                          </option>
                          <option value="urgence">Urgence ophtalmologique</option>
                          <option value="controle">Contrôle de la vue</option>
                          <option value="glaucome">Suivi glaucome</option>
                          <option value="retine">Pathologie rétinienne</option>
                          <option value="chirurgie">
                            Bilan chirurgie réfractive
                          </option>
                          <option value="lentilles">
                            Adaptation lentilles
                          </option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-bronze-700 mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-bronze-200 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:border-transparent transition-all text-bronze-800 placeholder:text-bronze-300 resize-none"
                          placeholder="Décrivez brièvement votre demande..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full gradient-bronze text-white px-8 py-4 rounded-xl text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Envoyer la demande
                        <Send className="w-4 h-4" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {/* Map */}
                <div className="rounded-3xl overflow-hidden border border-bronze-100 shadow-lg h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.5!2d2.238!3d48.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ae0c5e1e8e7%3A0x0!2s3+Quai+de+Stalingrad%2C+92100+Boulogne-Billancourt!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Oculus Santé"
                  />
                </div>

                {/* Access info */}
                <div className="p-8 rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50">
                  <h3 className="text-xl font-bold text-bronze-900 mb-4">
                    Accès au cabinet
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-bronze-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-bronze-800">Adresse</p>
                        <p className="text-bronze-600 text-sm">
                          3 quai de Stalingrad, 92100 Boulogne-Billancourt
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="text-white text-[10px] font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-medium text-bronze-800">Métro</p>
                        <p className="text-bronze-600 text-sm">
                          Ligne 10 — Boulogne Jean Jaurès (5 min à pied)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="text-white text-[10px] font-bold">P</span>
                      </div>
                      <div>
                        <p className="font-medium text-bronze-800">Parking</p>
                        <p className="text-bronze-600 text-sm">
                          Parking public à proximité — Quai de Stalingrad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
