function decrementerPointsDeVie(perso, name) {
    if (perso === "Ennemi" ){
        return 10
    } else if (perso === "Joueur"){
        if (name === 'Punch')
            return 8
        if (name === 'Magic_Attack')
            return 12
        if (name === 'Heal')
            return -1
        else 
            return 0
    }
}

function handleDegatChange(perso, pv, degat) {
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
    handleDegatChange
  };
  