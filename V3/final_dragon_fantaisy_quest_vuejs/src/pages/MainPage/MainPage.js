import PointDeVie from '../../components/PointsDeVie/PointsDeVie.vue';
import BarreAction from '../../components/BarreAction/BarreAction.vue';
import getImgService from '@/services/api/getImgService';

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
    }
  },
  components: {
    PointDeVie,
    BarreAction,
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
      } else if (type === 'Ennemi') {
        this.DegatEnnemi = 0;
        this.DegatJoueur = power;
        this.isAttackEnnemi = true;
        this.isAttackJoueur = false;
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
