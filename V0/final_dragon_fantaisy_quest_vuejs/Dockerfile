# Utilisez une image de Node.js comme base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez le package.json et le package-lock.json (si existant)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez les fichiers de l'application
COPY . .

# Exposez le port sur lequel l'application tourne
EXPOSE 8080

# Commande pour lancer l'application
CMD ["npm", "run", "serve"]
