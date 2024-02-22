import axios from 'axios';

class getImgService {
  async getImgAPI(perso, name) {
    let response;
    console.log(name);
    if (perso === "Joueur") {
      response = await axios.get(`http://localhost:3000/characters/getImgJoueur?name=${name}`);
    } else if (perso === "Ennemi") {
      response = await axios.get(`http://localhost:3000/characters/getImgEnnemi?name=${name}`);
    }
    return response.data;
  }
}

export default new getImgService();
