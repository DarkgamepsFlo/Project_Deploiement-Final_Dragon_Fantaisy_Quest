# Ogès Florian - Projet de déploiement / Automatisation - RPG Final Dragon Fantasy Quest

## Présentation du projet

<div style="text-align: justify;">
Pour la ressource déploiement, ce projet est une application web en VueJS / NodeJS se basant sur un RPG tour à tour style Final Fantasy / Dragon Quest (d'où le nom).  

Ce projet n'est pas seulement du développement web mais également de l'automatisation et de la maintenance, cela implique donc d'abord l'utilisation de la virtualisation sur docker et des termes comme du "versening", l'utilisation de Github, des suivis de tâches, des tests, et d'autres choses permettant de faire de la maintenance et d'automatiser l'application.  
L'idée est de réaliser un combat entre un personnage "Joueur" et un personnage "Ennemi" du style RPG Pixel Art. Ces deux personnages vont s'infliger des dégâts (ou se soigner) tour par tour et lorsque les PV du joueur sont à 0, le joueur a perdu et lorsque ce sont les PV de l'ennemi, le joueur gagne la partie. Le développement se fera en prenant compte de l'ensemble des éléments à mettre en place afin d'assurer l'automatisation et la maintenance de l'application.
</div>

## Présentation des versions

Dans ce projet vous pouvez retrouver 4 version de l'application : 
<div style="text-align: justify;">

- V0 : Cette version contient une version vraiment basique de l'application avec le message de base de VueJS, deux champs de texte pour afficher les PV du "joueur" et de "l'ennemi" (Ce sont juste des div de couleurs différentes) et deux boutons permettant d'infliger des dégâts au personnage. Cette version permet principalement de mettre en place la conteneurisation avec Docker concernant VueJS et NodeJS avec un Dockerfile puis un docker-compose.yaml dans le dossier racine de la version.
</div>
<div style="text-align: justify;">

- V1 : Cette version est une version de base de l'application, nous voyons le joueur ainsi que l'ennemi à l'écran mais également leurs points de vie et les dégâts qu'ils subissent. Une barre d'action ainsi que des boutons sont mis en place pour pouvoir attaquer l'ennemi de différentes manières ou se soigner. Des éléments de styles ont été ajouté pour pouvoir directement visualiser plus facilement la base du jeu.
</div>
<div style="text-align: justify;">

- V2 : Cette version est une version plus poussé de la V1. Elle contient des nouveaux éléments de CSS beaucoup plus esthétique (Comme des nouveaux personnages, un nouveau décors, des nouveaux boutons et même une barre de vie dynamique) ainsi qu'un remaniement du code pour pouvoir faciliter les échanges de dégâts entre le joueur et l'ennemi. Il n'y a pas encore de fin de partie et la vie se décrémente dans les nombres négatifs.
</div>
<div style="text-align: justify;">

- V3 : Cette version est la dernière version de l'application. Par rapport à la V2, elle ajoute des animations lorsque le joueur ou l'ennemi attaque, une vérification du nombre de point de vie et deux écrans de fin de jeu, un lorsque le joueur gagne et un lorsqu'il perd. Dans les deux cas, le joueur peut recommencer une nouvelle partie.
</div>

## Lancement du projet

### Première méthode avec le localhost

Pour le lancer sur votre machine directement avec votre PC vous devez faire ces étapes : 

1. Installer NodeJS sur votre machine via ce lien : [Télécharger NodeJS](https://nodejs.org/en/download)
2. Clonez le dépôt du jeu depuis GitHub avec cette commande dans un terminal : 
```bash
git clone https://github.com/DarkgamepsFlo/Project_Deploiement-Final_Dragon_Fantaisy_Quest.git
```
2. (Alternative) Télécharger directement le jeu ou la version du jeu en format .zip avec le bouton `Code` -> `Download ZIP`
3. Naviguez dans le répertoire de la version que vous voulez utiliser :
```bash
cd V0 
cd V1
cd V2
cd V3
```
4. Dans votre dossier de version, allez d'abord dans le premier dossier :
```bash
cd final_dragon_fantaisy_quest_nodejs
```
5. Et entrez cette commande pour installer les dépendances :
```bash
npm install
```
6. Vous pouvez démarrer le service nodeJS avec cette commande :
```bash
node index
```
7. Ensuite allez dans le deuxième dossier
```bash
cd ..
cd final_dragon_fantaisy_quest_vuejs
```
7. Et entrez cette commande pour installer les dépendances :
```bash
npm install
```
8. Vous pouvez démarrer le service vueJS avec cette commande :
```bash
npm run serve
```
9. Une fois fait, allez sur cette page : `http://localhost:8080/` et vous allez trouver l'application

### Deuxième méthode avec docker

Pour le lancer sous docker vous devez faire ces étapes : 

1. Installer Docker sur votre machine via ce lien : [Télécharger Docker](https://www.docker.com/products/docker-desktop/)
2. Clonez le dépôt du jeu depuis GitHub avec cette commande dans un terminal : 
```bash
git clone https://github.com/DarkgamepsFlo/Project_Deploiement-Final_Dragon_Fantaisy_Quest.git
```
2. (Alternative) Télécharger directement le jeu ou la version du jeu en format .zip avec le bouton `Code` -> `Download ZIP`
3. Naviguez dans le répertoire de la version que vous voulez utiliser :
```bash
cd V0 
cd V1
cd V2
cd V3
```
4. Dans le fichier de version exécutez la commande suivante : 
```bash
docker-compose build
docker-compose up
```
5. Une fois fait, allez sur cette page : `http://localhost:8080/` et vous allez trouver l'application