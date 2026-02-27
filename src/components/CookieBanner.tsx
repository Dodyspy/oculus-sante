"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-bronze-200 shadow-2xl shadow-bronze-900/10 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-bronze-900 mb-1">
              Cookies & confidentialité
            </p>
            <p className="text-sm text-bronze-600 leading-relaxed">
              Ce site utilise Google Maps qui peut déposer des cookies tiers.
              En acceptant, vous consentez à leur utilisation.{" "}
              <Link
                href="/politique-confidentialite"
                className="underline text-bronze-500 hover:text-bronze-700 transition-colors"
              >
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={refuse}
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-bronze-200 text-bronze-700 hover:bg-bronze-50 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-full text-sm font-medium gradient-bronze text-white hover:shadow-lg hover:shadow-bronze-500/25 transition-all"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
