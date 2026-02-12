import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bronze-900 text-cream-200">
      {/* Top accent line */}
      <div className="h-1 gradient-bronze" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Oculus Santé Ophtalmologie"
                width={48}
                height={48}
                className="h-12 w-auto object-contain brightness-110"
              />
              <div>
                <p className="text-lg font-semibold text-cream-100 font-serif">
                  OPHTALMOLOGIE
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-bronze-400">
                  OCULUS SANTÉ
                </p>
              </div>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed">
              Votre cabinet d&apos;ophtalmologie de référence à
              Boulogne-Billancourt. Des soins de qualité dans un cadre
              d&apos;exception.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/equipe", label: "Équipe" },
                { href: "/a-propos", label: "À propos" },
                { href: "/galerie", label: "Galerie" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-bronze-400 transition-colors duration-300 ease-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream-300">
                <MapPin className="w-4 h-4 text-bronze-400 mt-0.5 shrink-0" />
                <span>
                  3 quai de Stalingrad
                  <br />
                  92100 Boulogne-Billancourt
                </span>
              </li>
              <li>
                <a
                  href="tel:+33189462959"
                  className="flex items-center gap-3 text-sm text-cream-300 hover:text-bronze-400 transition-colors duration-300 ease-out"
                >
                  <Phone className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>01 89 46 29 59</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@oculus-sante.fr"
                  className="flex items-center gap-3 text-sm text-cream-300 hover:text-bronze-400 transition-colors duration-300 ease-out"
                >
                  <Mail className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>contact@oculus-sante.fr</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze-400 mb-4">
              Horaires
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream-300">
                <Clock className="w-4 h-4 text-bronze-400 mt-0.5 shrink-0" />
                <div>
                  <p>Lundi – Vendredi</p>
                  <p className="text-cream-400">9h00 – 18h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-300">
                <Clock className="w-4 h-4 text-bronze-400 mt-0.5 shrink-0" />
                <div>
                  <p>Samedi</p>
                  <p className="text-cream-400">9h00 – 13h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-bronze-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400">
            © {new Date().getFullYear()} Oculus Santé Ophtalmologie. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-cream-400 hover:text-bronze-400 transition-colors duration-300 ease-out"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-xs text-cream-400 hover:text-bronze-400 transition-colors duration-300 ease-out"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
