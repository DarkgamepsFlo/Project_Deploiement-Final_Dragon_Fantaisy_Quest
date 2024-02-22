// Import de l'ensemble des tables de base de données
const joueur = require('./db/database_joueur.json');
const ennemi = require('./db/database_ennemi.json');

// Cette méthode permet de récupérer les points de vie par rapport au nom du personnage du joueur
async function getPVJoueur(name) {
  try {
    if(name === "Cloud"){
      return {
        pv_joueur: joueur.Cloud.pointsDeVie
      };
    } else if(name === "Tifa") {
      return {
        pv_joueur: joueur.Tifa.pointsDeVie
      };
    } else {
      return {
        pv_joueur: "0"
      };
    }
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVJoueur : ${e}`);
    throw e;
  }
}

// Cette méthode permet de récupérer les points de vie par rapport au nom du personnage ennemi
async function getPVEnnemi(name) {
  try {
    if(name === "Sephiroth"){
      return {
        pv_ennemi: ennemi.Sephiroth.pointsDeVie
      };
    } else {
      return {
        pv_ennemi: "0"
      };
    }
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVEnnemi : ${e}`);
    throw e;
  }
}

// Cette méthode permet de récupérer les images par rapport au nom du personnage du joueur
async function getImgJoueur(name) {
  try {
    if(name === "Cloud"){
      return {
        img_joueur: joueur.Cloud.img
      };
    } else if(name === "Tifa") {
      return {
        img_joueur: joueur.Tifa.img
      };
    } else {
      return {
        img_joueur: {}
      };
    }
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVJoueur : ${e}`);
    throw e;
  }
}

// Cette méthode permet de récupérer les images par rapport au nom du personnage ennemi
async function getImgEnnemi(name) {
  try {
    if(name === "Sephiroth"){
      return {
        img_ennemi: ennemi.Sephiroth.img
      };
    } else {
      return {
        img_ennemi: {}
      };
    }
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction getPVEnnemi : ${e}`);
    throw e;
  }
}

module.exports = {
    getPVJoueur,
    getPVEnnemi,
    getImgJoueur,
    getImgEnnemi
}
