const listInfoPerso = require("./requeteGETBarreAction.json")

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

function fetchPointsDeVie(localType) {
    const response = listInfoPerso;

    const data = response.data;
    var pointsDeVie = data[localType.toLowerCase()];
    var pointsDeVieBase = data[localType.toLowerCase()];

    return { pv: pointsDeVie.pointsDeVie, pvbase: pointsDeVieBase.pointsDeVie};
}

function handleDegatChange(type, pointsDeVie, newValue) {
    if (type === "Joueur"){
      pointsDeVie -= newValue;
      return { pv: pointsDeVie, decrementer: {}};
    } else {
      pointsDeVie -= newValue;
      // setTimeout(() => {
      const json = decrementerPointsDeVie('Punch', 10, 100, false);
      return { pv: pointsDeVie, decrementer: json };
    }
}

module.exports = {
  decrementerPointsDeVie,
  fetchPointsDeVie,
  handleDegatChange
};


