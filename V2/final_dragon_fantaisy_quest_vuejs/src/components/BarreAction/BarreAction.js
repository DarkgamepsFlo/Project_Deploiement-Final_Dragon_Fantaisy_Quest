import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";
import decrementerPointsDeVieService from "@/services/decrementerPointsDeVieService";
import handleDegatChangeService from "@/services/handleDegatChangeService";

export default {
  name: 'BarreAction',
  data() {
    return {
      pointsDeVieBase: null,
      pointsDeVie: null,
      localType: this.type,
      isButtonDisabled: false,
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
  },
  async mounted() {
    // Méthode appelée automatiquement après que le composant est monté dans le DOM
    // Elle effectue une requête à l'API pour récupérer les points de vie initiaux
    this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType);
    this.pointsDeVieBase = this.pointsDeVie;
  },
  watch: {
    degat: 'handleDegatChange', // Utilise la méthode handleDegatChange pour réagir aux changements
  },
  methods: {
    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie(name) {
      if (!this.isButtonDisabled) {
        this.isButtonDisabled = true; // Désactive le bouton

        const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, name);
        
        if (int_result === -1){
          if (this.pointsDeVie > this.pointsDeVieBase - 5)
            this.pointsDeVie = this.pointsDeVieBase;
          else
            this.pointsDeVie += 5
        }

        this.$emit('decrement', this.localType, int_result);

        setTimeout(() => {
          this.isButtonDisabled = false; // Réactive le bouton après 3 secondes
        }, 3000);
      }
    },

    async handleDegatChange(newValue) {
      
      var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue)
      
      this.pointsDeVie = pv_result;

      if (second_result > 0){
        setTimeout(() => {
          this.decrementerPointsDeVie(this.localType, 'Attack');
        }, 5000);
      }
    },
  },
};