// Cette classe permet de s'occuper de l'ensemble des fonctionnalités permettant de décrémenter les pv d'un personnage
class handleDegatChangeService{
  // Cette méthode permet de décrémenter les pv en renvoyer la nouvelle valeur et d'envoyer le nombre de seconde à attendre
  async handleDegatChange(perso, pv, degat) {
    if (perso === 'Joueur'){ // Si le joueur arrive à zéro, on force la valeur à être 0
      if (pv - degat <= 0)
        return [0, 0]
      else {
        pv -= degat
        return [pv, 0]
      }
    } else if (perso === 'Ennemi'){
        if(degat > 0)
            pv -= degat
        return [pv, 5000]
    }
  }
}

export default new handleDegatChangeService();