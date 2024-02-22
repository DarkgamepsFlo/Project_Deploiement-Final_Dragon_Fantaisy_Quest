import PointDeVie from '../../components/PointsDeVie/PointsDeVie.vue';
import BarreAction from '../../components/BarreAction/BarreAction.vue';
import getImgService from '../../services/api/getImgService';
import DamageEffect from '../../components/DamageEffect/DamageEffect.vue';
import VictoryPage from '../VictoryPage/VictoryPage.vue';
import GameOver from '../GameOver/GameOver.vue';

export default {
  data() {
    return {
      DegatEnnemi: 0, // Dégâts de l'ennemi
      DegatJoueur: 0, // Dégâts du joueur
      ImgEnnemi: "", // Image de l'ennemi
      ImgJoueur: "", // Image du joueur
      ImgBaseEnnemi: "", // Image de base de l'ennemi
      ImgBaseJoueur: "", // Image de base du joueur
      isAttackJoueur: null, // Si le joueur est en train d'attaquer
      isAttackEnnemi: null, // Si l' ennemi est en train d'attaquer
      isDamageJoueur: null, // Si le joueur subit des dégâts
      isDamageEnnemi: null, // Si l'ennemi subit des dégâts
      isGameOver: null, // Si c'est un game over pour le joueur
      isVictory: null, // Si c'est une victoire pour le joueur
      isGameOverBase: null, // variable permettant de faire disparaitre les éléments de la page de base lorsque la page game over s'affiche
      isVictoryBase: null // variable permettant de faire disparaitre les éléments de la page de base lorsque la page victory s'affiche
    }
  },
  components: {
    PointDeVie,
    BarreAction,
    DamageEffect,
    VictoryPage,
    GameOver
  },
  async mounted() {
    // On va chercher l'ensemble des images disponibles pour chaque personnage grâce à l'API
    this.ImgEnnemi = await getImgService.getImgAPI("Ennemi", "Sephiroth");
    this.ImgJoueur = await getImgService.getImgAPI("Joueur", "Cloud");

    // On défini la première image lorsqu'on démarre l'application
    this.ImgBaseEnnemi = this.ImgEnnemi.img_ennemi.img1 + ".gif";
    this.ImgBaseJoueur = this.ImgJoueur.img_joueur.img1 + ".gif";
  },
  methods: {
    // Cette méthode permet d'envoyer un signal à un personnage pour attaquer l'autre
    handleDecrement(type, power) {
      if (type === 'Joueur') { // Variables adaptés pour le joueur
        this.DegatEnnemi = power;
        this.DegatJoueur = 0;
        this.isAttackJoueur = true;
        this.isAttackEnnemi = false;
        this.isDamageJoueur = true;
        this.isDamageEnnemi = false;
        setTimeout(() => {
          this.isDamageJoueur = false; // Réinitialiser après 2 secondes
        }, 2000);
      } else if (type === 'Ennemi') { // Variable adaptés pour l'ennemi
        this.DegatEnnemi = 0;
        this.DegatJoueur = power;
        this.isAttackEnnemi = true;
        this.isAttackJoueur = false;
        this.isDamageEnnemi = true;
        setTimeout(() => {
          this.isDamageEnnemi = false; // Réinitialiser après 2 secondes
        }, 2000);
      }
    },
    // Cette méthode permet de recharger l'image d'un personnage par rapport à son comportement (s'il attaque ou non)
    updateImg(newImg, player) {
      if(player == "Joueur"){
        if (newImg == 1){
          this.ImgBaseJoueur = this.ImgJoueur.img_joueur.img1 + ".gif";
        }
        if (newImg == 2){
          this.ImgBaseJoueur = this.ImgJoueur.img_joueur.img2 + ".gif";
        }
      } else if(player == "Ennemi"){
        if (newImg == 1){
          this.ImgBaseEnnemi = this.ImgEnnemi.img_ennemi.img1 + ".gif";
        }
        if (newImg == 2){
          this.ImgBaseEnnemi = this.ImgEnnemi.img_ennemi.img2 + ".gif";
        }
      }
    },
    // Cette fonction permet de vérifier et d'afficher la page si le joueur gagne ou perd le combat
    endGamePage(type, victory = false){
      console.info(victory);
      if(type === "Joueur"){
        setTimeout(() => {
          this.isGameOver = true;
        }, 3000);
        setTimeout(() => {
          this.isGameOverBase = true;
        }, 5000);
      } else if (type === "Ennemi"){
        setTimeout(() => {
          this.isVictory = true;
        }, 4000);
        setTimeout(() => {
          this.isVictoryBase = true;
        }, 7000);
      }
    }
  },
};
