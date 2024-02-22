import getPointsDeVieService from "./api/getPointsDeVieService";

// Cette classe permet de gérer l'ensemble des fonctionnalités concernant la récupération de pv
class fetchPointsDeVieService{
  // Cette méthode va récupérer le nombre de pv de base de chaque personnage
  async fetchPointsDeVieAPI(perso, name) {
    const response = await getPointsDeVieService.getPointsDeVieAPI(perso, name); // On va récuper le nombre de pv par rapport au personnage
    const name_var = "pv_" + perso.toLowerCase();
    const pointsDeVie = response[name_var];
    return pointsDeVie;
  }
}

export default new fetchPointsDeVieService();