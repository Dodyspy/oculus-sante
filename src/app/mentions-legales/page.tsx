import AnimatedSection from "@/components/AnimatedSection";

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-6">
              Mentions légales
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-bronze max-w-none">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                <strong>Raison sociale :</strong> Cabinet d&apos;Ophtalmologie
                Oculus Santé
              </p>
              <p>
                <strong>Forme juridique :</strong> Entreprise Individuelle
              </p>
              <p>
                <strong>SIRET :</strong> 98973990900012
              </p>
              <p>
                <strong>Adresse :</strong> 3 quai de Stalingrad, 92100
                Boulogne-Billancourt
              </p>
              <p>
                <strong>Téléphone :</strong>{" "}
                <a
                  href="tel:+33189462959"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  01 89 46 29 59
                </a>
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@oculus-sante.fr"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  contact@oculus-sante.fr
                </a>
              </p>
              <p>
                <strong>Directeur de la publication :</strong> STAN Anamaria-Veronica
              </p>
              <p>
                <strong>N° RPPS :</strong> 1010 225 4280
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              2. Profession réglementée
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Profession : Médecin ophtalmologiste, réglementée par le Code de
                la santé publique.
              </p>
              <p>
                <strong>Ordre professionnel :</strong> Conseil National de
                l&apos;Ordre des Médecins —{" "}
                <a
                  href="https://www.conseil-national.medecin.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  www.conseil-national.medecin.fr
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              3. Hébergeur du site
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
                91723, États-Unis
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  vercel.com
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              4. Propriété intellectuelle
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logo,
                graphismes) est protégé par le droit d&apos;auteur et le droit
                de la propriété intellectuelle. Toute reproduction, même
                partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              5. Responsabilité
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Les informations présentes sur ce site sont fournies à titre
                indicatif et ne sauraient se substituer à une consultation
                médicale. Le cabinet Oculus Santé décline toute responsabilité
                quant à l&apos;utilisation qui pourrait être faite de ces
                informations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              6. Liens externes
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Ce site contient des liens vers des sites tiers (Doctolib,
                Google Maps). Le cabinet Oculus Santé ne peut être tenu
                responsable du contenu de ces sites externes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              7. Droit applicable
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2">
              <p>
                Le présent site est soumis au droit français. Tout litige
                relatif à son utilisation sera soumis aux tribunaux compétents de
                Nanterre.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
