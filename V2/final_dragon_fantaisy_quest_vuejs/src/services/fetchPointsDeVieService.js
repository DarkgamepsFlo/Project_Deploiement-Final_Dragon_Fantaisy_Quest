import getPointsDeVieService from "./api/getPointsDeVieService";

class fetchPointsDeVieService{
  async fetchPointsDeVieAPI(perso, name) {
    const response = await getPointsDeVieService.getPointsDeVieAPI(perso, name);
    const name_var = "pv_" + perso.toLowerCase();
    const pointsDeVie = response[name_var];
    return pointsDeVie;
  }
}

export default new fetchPointsDeVieService();