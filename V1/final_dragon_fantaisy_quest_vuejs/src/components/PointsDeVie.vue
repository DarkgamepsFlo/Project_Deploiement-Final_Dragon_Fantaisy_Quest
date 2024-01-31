<template>
  <div class="points-container">
    <div class="points-section joueur-section">
      <h2>Points de vie du Joueur</h2>
      <p>{{ pointsDeVieJoueur }}</p>
      <button @click="decrementerPointsDeVie('joueur')">Décrémenter Joueur</button>
    </div>
    <div class="points-section ennemi-section">
      <h2>Points de vie de l'Ennemi</h2>
      <p>{{ pointsDeVieEnnemi }}</p>
      <button @click="decrementerPointsDeVie('ennemi')">Décrémenter Ennemi</button>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        pointsDeVieJoueur: null,
        pointsDeVieEnnemi: null,
      };
    },
    mounted() {
      // Faites une requête GET vers votre API pour récupérer les points de vie
      this.fetchPointsDeVie();
    },
    methods: {
      async fetchPointsDeVie() {
        try {
          // Utilisez Axios pour effectuer la requête GET
          const response = await axios.get('http://localhost:3000/api/pointsDeVie');

          // Accédez aux données de la réponse
          const data = response.data;

          // Mettez à jour les données dans votre composant Vue.js
          this.pointsDeVieJoueur = data.joueur;
          this.pointsDeVieEnnemi = data.ennemi;
        } catch (error) {
          console.error('Erreur lors de la récupération des points de vie', error);
        }
      },
      decrementerPointsDeVie(character) {
        if (character == "joueur") {
          this.pointsDeVieEnnemi -= 10
        } else if (character == "ennemi") {
          this.pointsDeVieJoueur -= 8
        }
      }
    },
  };
  </script>

<style scoped>
.points-container {
  display: flex;
}

.points-section {
  flex: 1;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.joueur-section {
  background-color: lightgreen;
}
.ennemi-section {
  background-color: lightcoral;
}
</style>
  