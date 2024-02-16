// Cette classe permet de s'occuper de l'ensemble des services lorsqu'on ajoute une boite
class decrementerPointsDeVieService{
  // Cette méthode permet d'ajouter une boite dans la liste de suggestion
  async decrementerPointsDeVie(perso, name) {
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
}

export default new decrementerPointsDeVieService();