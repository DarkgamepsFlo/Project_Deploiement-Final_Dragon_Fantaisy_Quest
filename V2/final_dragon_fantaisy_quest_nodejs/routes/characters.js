// require
const express = require("express");
const router = express.Router();
const { getPVJoueurs, getPVEnnemis } = require("../controllers/characters");

// Ensemble des routes permettants d'exécuter les fonctions concernant les pokémons
router.get("/getPVJoueur", getPVJoueurs);
router.get("/getPVEnnemi", getPVEnnemis);

module.exports = router;