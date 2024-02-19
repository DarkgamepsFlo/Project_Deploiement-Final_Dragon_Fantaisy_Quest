// import Component
import PointDeVie from '../../components/PointsDeVie/PointsDeVie.vue';
import BarreAction from '../../components/BarreAction/BarreAction.vue';

// import functions
import getImgService from '@/services/api/getImgService';

export default {
  data() {
    return {
      DegatEnnemi: 0,
      DegatJoueur: 0,
      ImgEnnemi: "",
      ImgJoueur: "",
      ImgBaseEnnemi: "",
      ImgBaseJoueur: ""
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

    console.log(this.ImgBaseEnnemi);
    console.log(this.ImgBaseJoueur);
  },
  methods: {
    handleDecrement(type, power) {
      // Logique pour décrémenter les points de vie de l'autre composant
      if (type === 'Joueur') {
        this.DegatEnnemi = power;
        this.DegatJoueur = 0;
      } else if (type === 'Ennemi') {
        this.DegatEnnemi = 0;
        this.DegatJoueur = power;
      }
    },
  },
};