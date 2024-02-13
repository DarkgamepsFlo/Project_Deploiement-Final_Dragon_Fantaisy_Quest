<template>
  <div class="points-section">
    <!-- Titre indiquant le type de points de vie (Joueur ou Ennemi) -->
    <h2>Points de vie {{ type }}</h2>

    <img :src="require('@/assets/' + img)" alt="Description de l'image">

    <!-- Affichage des points de vie actuels -->
    <p>PV : {{ pointsDeVie }}</p>

    <p>Dégâts reçus : {{ degat }}</p>

  </div>
</template>


<script>
import axios from 'axios';

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
  mounted() {
    // Méthode appelée automatiquement après que le composant est monté dans le DOM
    // Elle effectue une requête à l'API pour récupérer les points de vie initiaux
    this.fetchPointsDeVie();
  },
  watch: {
    degat: 'handleDegatChange', // Utilise la méthode handleDegatChange pour réagir aux changements
  },
  methods: {
    // Méthode asynchrone pour récupérer les points de vie depuis l'API
    async fetchPointsDeVie() {
      try {
        // Utilisation d'Axios pour effectuer une requête GET à l'API
        const response = await axios.get('http://localhost:3000/api/pointsDeVie');
        // Accès aux données de la réponse et mise à jour des points de vie du composant
        const data = response.data;
        this.pointsDeVie = data[this.localType.toLowerCase()];
      } catch (error) {
        // Gestion des erreurs lors de la récupération des points de vie
        console.error('Erreur lors de la récupération des points de vie', error);
      }
    },
    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie() {
      // Émission d'un événement personnalisé vers le composant parent avec le type du composant actuel
      this.$emit('decrement', this.localType);

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
</script>


<style scoped>
.points-section {
  flex: 1;
  margin: 10px;
  padding: 10px;
}
</style>