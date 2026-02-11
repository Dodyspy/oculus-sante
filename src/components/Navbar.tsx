"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/equipe", label: "Équipe" },
  { href: "/a-propos", label: "À propos" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-bronze-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Oculus Santé Ophtalmologie"
              width={48}
              height={48}
              className="h-12 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wide text-bronze-800 font-serif">
                Oculus Santé
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-bronze-500 -mt-1">
                Ophtalmologie
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-bronze-700 hover:text-bronze-500 transition-all duration-300 ease-out relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-bronze-500 transition-all duration-500 ease-out group-hover:w-2/3 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+33189462959"
              className="flex items-center gap-2 text-sm text-bronze-600 hover:text-bronze-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>01 89 46 29 59</span>
            </a>
            <Link
              href="/contact"
              className="gradient-bronze text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-bronze-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-bronze-700"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-bronze-100"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-bronze-700 hover:text-bronze-500 hover:bg-bronze-50 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-bronze-100 mt-4">
                <a
                  href="tel:+33189462959"
                  className="flex items-center gap-2 px-4 py-3 text-bronze-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>01 89 46 29 59</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center gradient-bronze text-white px-6 py-3 rounded-full font-medium mt-2"
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
