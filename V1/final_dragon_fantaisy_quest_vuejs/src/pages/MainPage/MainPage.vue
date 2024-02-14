<template>
  <div class="app-container">
    <div class="points-de-vie-container">
      <PointDeVie :type="'Joueur'" :img="'Tifa.png'"/>
      <PointDeVie :type="'Ennemi'" @decrement="handleDecrement" :degat="DegatEnnemi" :img="'Sephiroth.png'"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script>
import PointDeVie from '../../components/PointsDeVieUpdate.vue';
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
        console.log("Envoyer -8 au composant enfant de type Ennemi");
        this.DegatEnnemi = power;
        this.DegatJoueur = 0;
      } else if (type === 'Ennemi') {
        console.log("Envoyer -10 au composant enfant de type Joueur");
        this.DegatEnnemi = 0;
        this.DegatJoueur = power;
      }
    },
  },
};
</script>

<style>
.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  background-image: url('../../assets/background.jpg');
  background-size: cover;
  background-position: bottom; /* Ajout de la propriété background-position */
  height: 100vh; /* 100% de la hauteur de la fenêtre */
  margin: 0;
}

.points-de-vie-container {
  display: flex;
  /* Ajoutez d'autres styles selon vos besoins */
}
</style>  