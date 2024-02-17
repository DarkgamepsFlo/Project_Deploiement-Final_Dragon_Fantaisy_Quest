import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";
import decrementerPointsDeVieService from "@/services/decrementerPointsDeVieService";
import handleDegatChangeService from "@/services/handleDegatChangeService";

export default {
  data() {
    // Données locales du composant, contenant les points de vie actuels
    return {
      pointsDeVie: null,
      localType: this.type,
    };
  },
  props: {
    // Propriété reçue du composant parent, indiquant le type (Joueur ou Ennemi)
    type: {
      type: String,
      required: true,
    },
    degat: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: null,
    },
  },
  async mounted() {
    // Méthode appelée automatiquement après que le composant est monté dans le DOM
    // Elle effectue une requête à l'API pour récupérer les points de vie initiaux
    this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType);
  },
  watch: {
    degat: 'handleDegatChange', // Utilise la méthode handleDegatChange pour réagir aux changements
  },
  methods: {
    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie() {
      const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, null);
      this.$emit('decrement', this.localType, int_result);
    },

    async handleDegatChange(newValue) {
      // Réagit lorsque la propriété degat est modifiée
      var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue);

      this.pointsDeVie = pv_result;

      if (second_result > 0){
        setTimeout(() => {
          this.decrementerPointsDeVie('Attack');
        }, second_result);
      }
    },
  },
};