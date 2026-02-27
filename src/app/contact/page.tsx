import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {

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
              Contactez-nous par téléphone ou prenez rendez-vous en ligne.
              Notre équipe vous accueille dans les meilleurs délais.
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
                sub: "Lun–Ven 9h–19h",
                external: false,
              },
              {
                icon: Mail,
                title: "Email",
                content: "contact@oculus-sante.fr",
                href: "mailto:contact@oculus-sante.fr",
                sub: "Réponse sous 24h",
                external: false,
              },
              {
                icon: MapPin,
                title: "Adresse",
                content: "3 quai de Stalingrad",
                href: "https://maps.google.com/?q=3+quai+de+Stalingrad+92100+Boulogne-Billancourt",
                sub: "92100 Boulogne-Billancourt",
                external: true,
              },
              {
                icon: Clock,
                title: "Prendre RDV",
                content: "Lun–Ven : 9h–19h",
                href: "https://www.doctolib.fr/ophtalmologue/paris/veronica-stan",
                sub: "Sam & Dim : Fermé",
                external: true,
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block p-6 rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50 hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze-100/40 hover:border-bronze-200 transition-all duration-300 text-center h-full group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bronze flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-bronze-800 font-medium group-hover:text-bronze-500 transition-colors">
                    {item.content}
                  </p>
                  <p className="text-xs text-bronze-500 mt-1">{item.sub}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info + CTA */}
      <section className="py-24 bg-cream-200/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Doctolib CTA */}
            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-3xl border border-bronze-100 bg-gradient-to-br from-white to-cream-50 flex flex-col justify-center h-full">
                <h2 className="text-2xl font-bold text-bronze-900 mb-2">
                  Prendre rendez-vous
                </h2>
                <p className="text-bronze-600/80 mb-8">
                  Réservez votre consultation en ligne directement via Doctolib.
                </p>
                <a
                  href="https://www.doctolib.fr/ophtalmologue/paris/veronica-stan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bronze text-white px-8 py-4 rounded-xl text-base font-medium hover:shadow-xl hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Prendre rendez-vous sur Doctolib
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-8 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-bronze-500" />
                  <div>
                    <p className="text-sm text-bronze-500">Ou appelez-nous</p>
                    <a href="tel:+33189462959" className="text-lg font-semibold text-bronze-800 hover:text-bronze-500 transition-colors">
                      01 89 46 29 59
                    </a>
                  </div>
                </div>
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
