import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";

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
      // Émission d'un événement personnalisé vers le composant parent avec le type du composant actuel
      this.$emit('decrement', this.localType, 10);
    },
    handleDegatChange(newValue) {
      // Réagit lorsque la propriété degat est modifiée
      console.log(`Nouveaux dégâts : ${newValue}`);
      
      if (this.type === "Joueur"){
        this.pointsDeVie -= newValue;
      } else {
        if (newValue !== -1){
          this.pointsDeVie -= newValue;
        }
        setTimeout(() => {
          console.log("je décrémente les PV du joueur");
          this.decrementerPointsDeVie();
        }, 3000);
      }
    },
  },
};