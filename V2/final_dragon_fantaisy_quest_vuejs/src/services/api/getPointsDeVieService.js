import axios from 'axios';

class getPointsDeVieService {
  async getPointsDeVieAPI(perso, name) {
    let response;
    if (perso === "Joueur") {
      response = await axios.get(`http://localhost:3000/characters/getPVJoueur?name=${name}`);
    } else if (perso === "Ennemi") {
      response = await axios.get(`http://localhost:3000/characters/getPVEnnemi?name=${name}`);
    }
    return response.data;
  }
}

export default new getPointsDeVieService();
