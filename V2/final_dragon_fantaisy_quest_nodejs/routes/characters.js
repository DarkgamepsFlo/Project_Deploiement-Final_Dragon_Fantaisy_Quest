// require
const express = require("express");
const router = express.Router();
const { getPVJoueurs, getPVEnnemis, getImgJoueurs, getImgEnnemis } = require("../controllers/characters");

// Ensemble des routes permettants d'exécuter les fonctions concernant les pokémons
router.get("/getPVJoueur", getPVJoueurs);
router.get("/getPVEnnemi", getPVEnnemis);
router.get("/getImgJoueur", getImgJoueurs);
router.get("/getImgEnnemi", getImgEnnemis);

module.exports = router;