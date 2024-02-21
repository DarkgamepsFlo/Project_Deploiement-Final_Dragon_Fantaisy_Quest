// Cette classe permet de s'occuper de l'ensemble des services lorsqu'on ajoute une boite
class decrementerPointsDeVieService{
  // Cette méthode permet d'ajouter une boite dans la liste de suggestion
  async decrementerPointsDeVie(perso, name) {
    if (perso === "Ennemi" ){
        return Math.floor(Math.random() * 12) + 5;
    } else if (perso === "Joueur"){
        if (name === 'Punch')
            return Math.floor(Math.random() * 10) + 5;
        if (name === 'Magic_Attack')
            return Math.floor(Math.random() * 18) + 6;
        if (name === 'Heal')
            return -1
        else 
            return 0
    }
  }
}

export default new decrementerPointsDeVieService();