Application React - Composants personnalisés

Ce projet React contient plusieurs composants de base pour pratiquer la création de composants et l'application de styles CSS dans un projet React structuré. Une production de Félix Sylvestre-Kentzinger pour Antoine Moevus.

Structure du projet

```
src/
├── App.jsx
├── App.css
├── index.css
└── components/
    ├── BusinessCard.jsx
    ├── WelcomeMessage.jsx
    ├── TaskList.jsx
    ├── ProductCard.jsx
    ├── Footer.jsx
    └── css/
        ├── BusinessCard.css
        ├── WelcomeMessage.css
        ├── TaskList.css
        ├── ProductCard.css
        └── Footer.css
```

Installation et exécution

1. **Créer l'application React

   Dans un dossier vide, lance :
   ```bash
   npx create-react-app .
   ```

2. Copier le contenu du dossier `src/` fourni dans ce ZIP dans ton projet React.**
   Remplace les fichiers `App.jsx`, `App.css`, `index.css` et ajoute le dossier `components/`.

3. Lancer le projet

   Dans le terminal, exécute :
   ```bash
   npm start
   ```

Composants inclus

- `WelcomeMessage` : Affiche un message de bienvenue.
- `BusinessCard` : Affiche une carte de visite avec nom, titre et e-mail.
- `TaskList` : Affiche une liste statique de tâches.
- `ProductCard` : Affiche un produit fictif avec son prix.
- `Footer` : Affiche les informations de pied de page.

Style

Chaque composant possède son propre fichier CSS, situé dans `components/css/`.  
Les styles globaux sont définis dans `App.css` et `index.css`.
