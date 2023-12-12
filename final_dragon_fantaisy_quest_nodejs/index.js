const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

// Utilisez le middleware cors avec l'origine autorisée
const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur !');
});

// Route pour une API simple
app.get('/api/message', (req, res) => {
  res.json({ message: 'Ceci est un message de l\'API' });
});

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});