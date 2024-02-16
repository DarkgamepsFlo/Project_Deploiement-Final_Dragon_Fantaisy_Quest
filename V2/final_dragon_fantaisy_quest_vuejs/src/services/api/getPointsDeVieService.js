// import
import axios from 'axios';

// Cette classe permet de s'occuper de l'ensemble des services lorsqu'on ajoute une boite
class getPointsDeVieService{
  // Cette méthode permet d'ajouter une boite dans la liste de suggestion
  async getPointsDeVieAPI(perso) {
    var response = "";
    if (perso === "Joueur"){
      response = await axios.get('http://localhost:3000/api/pointsDeVieJoueur');
    } else if (perso === "Ennemi") {
      response = await axios.get('http://localhost:3000/api/pointsDeVieEnnemi');
    }
    return response.data;
  }
}

export default new getPointsDeVieService();