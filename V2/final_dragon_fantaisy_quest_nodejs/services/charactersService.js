// Import de l'ensemble des tables de base de données
const joueur = require('./db/database_joueur.json');
const ennemi = require('./db/database_ennemi.json');

// Cette fonction va permettre de récupérer l'ensemble des pokémons présent dans l'API
async function getPVJoueur() {
  try {
    return {
      pv_joueur: joueur.pointsDeVie
    };
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVJoueur : ${e}`);
    throw e;
  }
}

async function getPVEnnemi() {
  try {
    return {
      pv_ennemi: ennemi.pointsDeVie
    };
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVEnnemi : ${e}`);
    throw e;
  }
}

module.exports = {
    getPVJoueur,
    getPVEnnemi
}
