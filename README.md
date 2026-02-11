# Oculus Santé Ophtalmologie

Site web du cabinet d'ophtalmologie **Oculus Santé**, situé au 3 quai de Stalingrad, 92100 Boulogne-Billancourt.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec sections Hero, Services, Équipe, Galerie, CTA |
| `/services` | Détail des services ophtalmologiques |
| `/equipe` | Présentation de l'équipe médicale |
| `/a-propos` | Histoire, mission et valeurs du cabinet |
| `/galerie` | Galerie photos du cabinet |
| `/contact` | Formulaire de contact, carte et informations pratiques |

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Déploiement

Le site est déployé automatiquement sur **Vercel** à chaque push sur la branche `main`.
