import PointDeVie from '../../components/PointsDeVie/PointsDeVie.vue';
import BarreAction from '../../components/BarreAction/BarreAction.vue'

export default {
  data() {
    return {
      DegatEnnemi: 0,
      DegatJoueur: 0
    }
  },
  components: {
    PointDeVie,
    BarreAction,
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