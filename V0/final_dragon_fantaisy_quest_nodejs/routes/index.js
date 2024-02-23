const cors = require('cors');
const express = require('express');
const app = express();
const conf = require('../conf.json');
const { Client } = require('pg');

// Setup de la base de données 
const client = new Client({
  user: 'postgres',
  password: 'MDP12345',
  host: 'bdd_RPG',
  port: '5432',
  database: 'bdd_rpg',
});

function connexion_bdd(){
  client.connect();
}

setTimeout(connexion_bdd, 5000);

// Connexion à la base de données 
/* connexion_bdd()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
    setTimeout(connexion_bdd(), 5000);
  }); */

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

  Promise.all([
    client.query('SELECT points_de_vie FROM joueur WHERE id_joueur=1'),
    client.query('SELECT points_de_vie FROM ennemi WHERE id_ennemi=1')
  ]).then(function([joueur_pv, ennemi_pv]) {
    return res.send({
      joueur: joueur_pv.rows[0].points_de_vie,
      ennemi: ennemi_pv.rows[0].points_de_vie
    });
  }, function(error) {
    throw error;
  });
});
    /* try {
      client.query("SELECT points_de_vie from joueur")
      return res.send({
        joueur: conf.joueur.pointsDeVie,
        ennemi: conf.ennemi.pointsDeVie
      });
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier de configuration', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });*/

// Route pour une API simple
app.get('/api/message', (req, res) => {
  res.json({ message: 'Ceci est un message de l\'API' });
});

app.get('/api/personnages', (req, res) => {
  client.query("SELECT * FROM joueur", (err, result) => {
    if (err) {
      console.error("Erreur lors de l'accès à la base de données", err); 
      res.status(500).json({ error: 'Erreur serveur' }); 
      return;
    }
    res.json(result.rows);
  });
});

module.exports = app;



