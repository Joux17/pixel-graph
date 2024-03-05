# Application de suivi

L'idée de ce programme est de suivre, via un code de couleur, une consommation de son choix (alcool, viande), un état d'esprit de la journée ou ce que l'utilisateur désire.

Le rendu sera sous forme de calendrier dont les mois seront à la verticale.

## Conception

Un jour est actuellement externalisé dans un composant dédié.

Le but est de pouvoir cliquer sur un jour et de sélectionner une couleur.

Cette information sera alors remontée au parent afin qu'il puisse sauvegarder l'état.

La sauvegarde de l'état du calendrier s'effectuera pour commencer dans le navigateur.
C'est le plus simple au début sans avoir à passer par un back-end.
Le front ne peut/doit pas écrire de fichier.


## Idées

- un bouton pour switcher de la vue horizontale à la vue verticale
- une vue calendrier par mois ?
- possibilité d'ajouter des onglets pour d'autres suivi ?
- ajout de base de données
  - historique des années
  - vision du graphe sur différents devices
- authentification
