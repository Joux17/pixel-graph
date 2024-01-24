# Application de suivi

L'idée de ce programme est de suivre, via un code de couleur, une consommation de son choix (alcool, viande), un état d'esprit de la journée ou ce que l'utilisateur désire.

Le rendu sera sous forme de calendrier dont les mois seront à la verticale.

## Conception

Un jour est actuellement externalisé dans un composant dédié.

Le but est de pouvoir cliquer sur un jour et de sélectionner une couleur.

Cette information sera alors remontée au parent afin qu'il puisse sauvegarder l'état.
