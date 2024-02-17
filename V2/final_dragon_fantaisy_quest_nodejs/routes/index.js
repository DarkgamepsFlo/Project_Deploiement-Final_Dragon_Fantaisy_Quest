const express = require('express');
const app = express();

// Utilisez le middleware cors avec l'origine autorisée
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8080',
};

// require des routes
const characters = require('./characters');

app.use(cors(corsOptions));
app.use(express.json());

// Mise en place de l'ensemble des routes
app.use('/characters', characters);

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur de gestion de RPG !');
});

// Route principale
app.get('/characters', (req, res) => {
  res.send('Bienvenue sur le serveur de gestion des personnages !');
});


module.exports = app;



