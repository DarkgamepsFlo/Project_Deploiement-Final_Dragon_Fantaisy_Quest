import getPointsDeVieService from "./api/getPointsDeVieService";

// Cette classe permet de s'occuper de l'ensemble des services lorsqu'on ajoute une boite
class fetchPointsDeVieService{
  // Cette méthode permet d'ajouter une boite dans la liste de suggestion
  async fetchPointsDeVieAPI(perso, name) {
    const response = await getPointsDeVieService.getPointsDeVieAPI(perso, name);
    const name_var = "pv_" + perso.toLowerCase();
    const pointsDeVie = response[name_var];
    return pointsDeVie;
  }
}

export default new fetchPointsDeVieService();