# Footer Simple

## Description
Un pied de page simple et élégant avec branding, liens rapides et réseaux sociaux.

## Caractéristiques
- Logo texte ou image
- Description de l'entreprise
- Liens rapides organisés
- Liens réseaux sociaux
- Copyright personnalisable
- Grid responsive (1 col mobile, 4 cols desktop)

## Structure

```
┌─────────────────────────────────────────────┐
│  [Logo]                                     │
│  Description text...                        │
│                                             │
│  Quick Links        Follow Us               │
│  • About            ○ Facebook              │
│  • Contact          ○ Twitter               │
│  • Privacy          ○ Instagram             │
│                                             │
│  ─────────────────────────────────────────  │
│  © 2024 Your Company. All rights reserved  │
└─────────────────────────────────────────────┘
```

## Props

### logo
- `text` (string): Texte du logo
- `image` (string, optional): URL de l'image du logo

### description
(string): Description courte de l'entreprise

### links
Array d'objets avec:
- `label` (string): Libellé du lien
- `href` (string): URL de destination

### socialLinks
Array d'objets avec:
- `platform` (string): Nom de la plateforme
- `href` (string): URL du profil

### copyright
(string): Texte du copyright

### Styles
- `backgroundColor` (string): Couleur de fond (hex)
- `textColor` (string): Couleur du texte (hex)

## Responsive
- **Desktop**: Grid 4 colonnes
- **Tablet**: Grid 2 colonnes
- **Mobile**: Grid 1 colonne, tout empilé verticalement
