// Cette classe permet de s'occuper de la décrémentation de pv de personnage adverse
class decrementerPointsDeVieService{
  // Cette méthode permet de récupérer le nombre de dégâts par rapport à l'attaque
  async decrementerPointsDeVie(perso, name) {
    if (perso === "Ennemi" ){
        return Math.floor(Math.random() * 12) + 5;
    } else if (perso === "Joueur"){
        if (name === 'Punch')
            return Math.floor(Math.random() * 10) + 5;
        if (name === 'Magic_Attack')
            return Math.floor(Math.random() * 18) + 6;
        if (name === 'Heal')
            return -1 // -1 permettant de détecter que le joueur se soigne
        else 
            return 0
    }
  }
}

export default new decrementerPointsDeVieService();