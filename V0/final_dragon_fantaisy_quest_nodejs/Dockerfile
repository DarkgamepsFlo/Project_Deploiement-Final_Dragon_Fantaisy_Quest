# Utilisez une image de Node.js comme base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /usr/src/api

# Copiez le package.json et le package-lock.json (si existant)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez les fichiers de l'API
COPY . .

# Exposez le port sur lequel l'API tourne
EXPOSE 3000

# Commande pour lancer l'API
CMD ["npm", "start"]
