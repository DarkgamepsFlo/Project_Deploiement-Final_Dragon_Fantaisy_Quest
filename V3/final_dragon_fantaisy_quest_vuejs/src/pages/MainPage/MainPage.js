import PointDeVie from '../../components/PointsDeVie/PointsDeVie.vue';
import BarreAction from '../../components/BarreAction/BarreAction.vue';
import getImgService from '../../services/api/getImgService';
import DamageEffect from '../../components/DamageEffect/DamageEffect.vue';

export default {
  data() {
    return {
      DegatEnnemi: 0,
      DegatJoueur: 0,
      ImgEnnemi: "",
      ImgJoueur: "",
      ImgBaseEnnemi: "",
      ImgBaseJoueur: "",
      isAttackJoueur: null,
      isAttackEnnemi: null,
      isDamageJoueur: null,
      isDamageEnnemi: null
    }
  },
  components: {
    PointDeVie,
    BarreAction,
    DamageEffect
  },
  async mounted() {
    this.ImgEnnemi = await getImgService.getImgAPI("Ennemi", "Sephiroth");
    this.ImgJoueur = await getImgService.getImgAPI("Joueur", "Cloud");

    this.ImgBaseEnnemi = this.ImgEnnemi.img_ennemi.img1 + ".gif";
    this.ImgBaseJoueur = this.ImgJoueur.img_joueur.img1 + ".gif";
  },
  methods: {
    handleDecrement(type, power) {
      if (type === 'Joueur') {
        this.DegatEnnemi = power;
        this.DegatJoueur = 0;
        this.isAttackJoueur = true;
        this.isAttackEnnemi = false;
        this.isDamageJoueur = true;
        this.isDamageEnnemi = false;
        setTimeout(() => {
          this.isDamageJoueur = false; // Réinitialiser après 2 secondes
        }, 2000);
      } else if (type === 'Ennemi') {
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
  },
};
