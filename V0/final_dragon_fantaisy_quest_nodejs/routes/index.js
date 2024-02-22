const cors = require('cors');
const express = require('express');
const app = express();
const conf = require('../conf.json');

// Utilisez le middleware cors avec l'origine autorisée
const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur !');
});

app.get('/api/pointsDeVie', (req, res) => {
    try {
      console.log(conf.joueur.pointsDeVie);
      console.log(conf.ennemi.pointsDeVie);
      return res.send({
        joueur: conf.joueur.pointsDeVie,
        ennemi: conf.ennemi.pointsDeVie
      });
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier de configuration', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });

// Route pour une API simple
app.get('/api/message', (req, res) => {
  res.json({ message: 'Ceci est un message de l\'API' });
});

module.exports = app;



