import axios from 'axios';

export default {
  name: 'BarreAction',
  data() {
    return {
      pointsDeVieBase: null,
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
  },
  mounted() {
    // Méthode appelée automatiquement après que le composant est monté dans le DOM
    // Elle effectue une requête à l'API pour récupérer les points de vie initiaux
    this.fetchPointsDeVie();
  },
  watch: {
    degat: 'handleDegatChange', // Utilise la méthode handleDegatChange pour réagir aux changements
  },
  methods: {
    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie() {
      // Émission d'un événement personnalisé vers le composant parent avec le type du composant actuel
      this.$emit('decrement', 'Joueur');
    },
    async fetchPointsDeVie() {
      try {
        // Utilisation d'Axios pour effectuer une requête GET à l'API
        const response = await axios.get('http://localhost:3000/api/pointsDeVie');
        // Accès aux données de la réponse et mise à jour des points de vie du composant
        const data = response.data;
        this.pointsDeVie = data[this.localType.toLowerCase()];
        this.pointsDeVieBase = data[this.localType.toLowerCase()];
      } catch (error) {
        // Gestion des erreurs lors de la récupération des points de vie
        console.error('Erreur lors de la récupération des points de vie', error);
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