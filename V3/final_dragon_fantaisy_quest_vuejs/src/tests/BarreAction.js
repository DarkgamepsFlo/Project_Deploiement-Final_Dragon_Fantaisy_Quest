const listInfoPerso = require("./requeteGETBarreAction.json")

/** 
 * @function decrementerPointsDeVie : Cette fonction permet d'envoyer au composant parent qui va décrémenter le nombre de pv nécessaire au personnage qu'il faut et qui va désaxctiver le bouton pour le joueur. 
 * @param {string} name Nom du l'attaque
 * @param {number} pointsDeVie PV actuel du joueur
 * @param {number} pointsDeVieBase PV actuel du joueur
 * @param {string} isButtonDisabled Permet de désactiver le bouton d'action
 * @returns {list} Elément envoyé au composant parent (Le emit())
 */
function decrementerPointsDeVie(name, pointsDeVie, pointsDeVieBase, isButtonDisabled) {
    if (!isButtonDisabled) {
      isButtonDisabled = true; // Désactive le bouton
      if(name == 'Punch'){
        return { decrement: "decrement", Joueur: "Joueur", damage: 8, isButtonDisabled: isButtonDisabled}
      } else if(name == 'Magic_Attack'){
        return { decrement: "decrement", Joueur: "Joueur", damage: 12, isButtonDisabled: isButtonDisabled}
      } else if(name == 'Heal') {
        if (pointsDeVie > pointsDeVieBase - 5){
          pointsDeVie = pointsDeVieBase;
        } else {
          pointsDeVie += 5
        }
        return { decrement: "decrement", Joueur: "Joueur", damage: -1, isButtonDisabled: isButtonDisabled}
      }else {
        return { decrement: "decrement", Joueur: "Joueur", damage: 0, isButtonDisabled: isButtonDisabled}
      }
    }
  }

/** 
 * @function fetchPointsDeVie : Cette méthode permet de récupérer les points de vie du personnage
 * @param {string} localType Nom du personnage
 * @returns {list} Liste contenant les pv de base et les pv actuelle
 */
function fetchPointsDeVie(localType) {
    const response = listInfoPerso; // On récupère la simulation de l'API
    const data = response.data;
    var pointsDeVie = data[localType.toLowerCase()];
    var pointsDeVieBase = data[localType.toLowerCase()];

    return { pv: pointsDeVie.pointsDeVie, pvbase: pointsDeVieBase.pointsDeVie};
}

/** 
 * @function handleDegatChange : Cette fonction permet de décrémenter la vie d'un personnage par rapport au type de celui-ci
 * @param {string} type Type du personnage
 * @param {number} pointsDeVie PV actuel du joueur
 * @param {number} newValue Dégâts subit
 * @returns {list} Elément envoyé au composant parent (Le emit())
 */
function handleDegatChange(type, pointsDeVie, newValue) {
    if (type === "Joueur"){
      pointsDeVie -= newValue;
      return { pv: pointsDeVie, decrementer: {}};
    } else {
      pointsDeVie -= newValue;
      const json = decrementerPointsDeVie('Punch', 10, 100, false);
      return { pv: pointsDeVie, decrementer: json };
    }
}

/** 
 * @function decrementerPointsDeVie_v2 : Cette fonction permet d'envoyer au composant parent qui va décrémenter le nombre de pv nécessaire au personnage qu'il faut et qui va désaxctiver le bouton pour le joueur. Elle est amélioré pour qu'elle soit plus simple à comprendre et pour éviter de la duplication de code.
 * @param {string} perso Type du personnage
 * @param {string} name Nom du l'attaque
 * @returns {list} Entier représentant le nombre de dégâts
 */
function decrementerPointsDeVie_v2(perso, name) {
  if (perso === "Ennemi" ){
      return 10
  } else if (perso === "Joueur"){
      if (name === 'Punch')
          return 8
      if (name === 'Magic_Attack')
          return 12
      if (name === 'Heal')
          return -1 // Ici je return -1 pour pouvoir comprendre que le personnage va se soigner
      else 
          return 0
  }
}

/** 
 * @function handleDegatChange_v2 : Cette fonction permet de décrémenter la vie d'un personnage par rapport au type de celui-ci. Elle a été modifié pour éviter les duplications et mettre en place un timing pour les animations.
 * @param {string} perso Type du personnage
 * @param {number} pv PV actuel du joueur
 * @param {number} degat Dégâts subit
 * @returns {list} Elément envoyé au composant parent (Le emit())
 */
function handleDegatChange_v2(perso, pv, degat) {
  if (perso === 'Joueur'){
      pv -= degat
      return [pv, 0]
  } else if (perso === 'Ennemi'){
      if(degat > 0)
          pv -= degat
      return [pv, 3000]
  }
}

module.exports = {
  decrementerPointsDeVie,
  fetchPointsDeVie,
  handleDegatChange,
  decrementerPointsDeVie_v2,
  handleDegatChange_v2
};


