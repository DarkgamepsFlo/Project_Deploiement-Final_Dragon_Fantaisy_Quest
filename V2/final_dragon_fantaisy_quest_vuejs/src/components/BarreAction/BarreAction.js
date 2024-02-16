import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";

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
        
        if(name == 'Punch'){
          // Émission d'un événement personnalisé vers le composant parent avec le type du composant actuel
          this.$emit('decrement', 'Joueur', 8);
        } else if(name == 'Magic_Attack'){
          this.$emit('decrement', 'Joueur', 12);
        } else if(name == 'Heal') {
          if (this.pointsDeVie > this.pointsDeVieBase - 5){
            this.pointsDeVie = this.pointsDeVieBase;
          } else {
            this.pointsDeVie += 5
          }
          this.$emit('decrement', 'Joueur', -1);
        }else {
          this.$emit('decrement', 'Joueur', 0);
        }
        
        setTimeout(() => {
          this.isButtonDisabled = false; // Réactive le bouton après 3 secondes
        }, 3000);
      }
    },
    handleDegatChange(newValue) {
      // Réagit lorsque la propriété degat est modifiée
      console.log(`Nouveaux dégâts : ${newValue}`);
      
      if (this.type === "Joueur"){
        this.pointsDeVie -= newValue;
      } else {
        this.pointsDeVie -= newValue;
        setTimeout(() => {
          console.log("je décrémente les PV du joueur");
          this.decrementerPointsDeVie();
        }, 5000);
      }
    },
  },
};