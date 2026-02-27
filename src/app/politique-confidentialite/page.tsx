import AnimatedSection from "@/components/AnimatedSection";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-emerald-50/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-bronze-900 mb-6">
              Politique de confidentialité
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-bronze-600/80 mb-10 leading-relaxed">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Le responsable du traitement des données personnelles est le
                Cabinet d&apos;Ophtalmologie Oculus Santé, situé au 3 quai de
                Stalingrad, 92100 Boulogne-Billancourt.
              </p>
              <p>
                <strong>Contact :</strong>{" "}
                <a
                  href="mailto:contact@oculus-sante.fr"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  contact@oculus-sante.fr
                </a>{" "}
                — 01 89 46 29 59
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              2. Données collectées
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Ce site vitrine ne collecte aucune donnée personnelle
                directement (pas de formulaire, pas de création de compte).
              </p>
              <p>Cependant, les services tiers intégrés peuvent collecter :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Google Maps :</strong> adresse IP, données de
                  localisation approximative, cookies techniques (pour
                  l&apos;affichage de la carte sur la page Contact).
                </li>
                <li>
                  <strong>Doctolib :</strong> lorsque vous cliquez sur un lien
                  de prise de rendez-vous, vous êtes redirigé vers le site
                  Doctolib qui dispose de sa propre politique de confidentialité.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              3. Cookies
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Ce site utilise des cookies strictement nécessaires à son
                fonctionnement. L&apos;intégration de Google Maps peut déposer
                des cookies tiers. Vous pouvez à tout moment gérer vos
                préférences via le bandeau de cookies affiché lors de votre
                première visite.
              </p>
              <p>
                <strong>Cookies techniques :</strong> nécessaires au bon
                fonctionnement du site, ils ne requièrent pas votre
                consentement.
              </p>
              <p>
                <strong>Cookies tiers (Google Maps) :</strong> soumis à votre
                consentement préalable conformément aux recommandations de la
                CNIL.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              4. Base légale du traitement
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Le traitement des données éventuellement collectées repose sur :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Votre consentement</strong> (article 6.1.a du RGPD)
                  pour les cookies non essentiels.
                </li>
                <li>
                  <strong>L&apos;intérêt légitime</strong> (article 6.1.f du
                  RGPD) pour le bon fonctionnement du site.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              5. Durée de conservation
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Les cookies tiers ont une durée de vie maximale de 13 mois
                conformément aux recommandations de la CNIL. Aucune donnée
                personnelle n&apos;est conservée par le site lui-même.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              6. Vos droits
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir la confirmation
                  que des données vous concernant sont traitées.
                </li>
                <li>
                  <strong>Droit de rectification :</strong> demander la
                  correction de données inexactes.
                </li>
                <li>
                  <strong>Droit d&apos;effacement :</strong> demander la
                  suppression de vos données.
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> vous opposer au
                  traitement de vos données.
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré.
                </li>
                <li>
                  <strong>Droit de retirer votre consentement</strong> à tout
                  moment.
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@oculus-sante.fr"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  contact@oculus-sante.fr
                </a>
                .
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              7. Autorité de contrôle
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2 mb-10">
              <p>
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation du RGPD, vous avez le droit
                d&apos;introduire une réclamation auprès de la CNIL :
              </p>
              <p>
                <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong>
                <br />
                3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
                <br />
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze-500 hover:text-bronze-700 transition-colors"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-bronze-900 mb-4">
              8. Modifications
            </h2>
            <div className="text-bronze-700 leading-relaxed space-y-2">
              <p>
                Nous nous réservons le droit de modifier la présente politique de
                confidentialité à tout moment. Toute modification sera publiée
                sur cette page avec une date de mise à jour.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
