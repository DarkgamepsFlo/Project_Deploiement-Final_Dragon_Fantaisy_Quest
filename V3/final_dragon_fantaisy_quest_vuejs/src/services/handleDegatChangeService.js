// Cette classe permet de s'occuper de l'ensemble des services lorsqu'on ajoute une boite
class handleDegatChangeService{
  // Cette méthode permet d'ajouter une boite dans la liste de suggestion
  async handleDegatChange(perso, pv, degat) {
    if (perso === 'Joueur'){
        pv -= degat
        return [pv, 0]
    } else if (perso === 'Ennemi'){
        if(degat > 0)
            pv -= degat
        return [pv, 3000]
    }
  }
}

export default new handleDegatChangeService();