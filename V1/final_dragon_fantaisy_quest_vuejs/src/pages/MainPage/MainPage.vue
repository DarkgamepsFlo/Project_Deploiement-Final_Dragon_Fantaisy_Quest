<template>
  <div>
    <MessageComponent></MessageComponent>
    <PointDeVie :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"/>
    <PointDeVie :type="'Ennemi'" @decrement="handleDecrement" :degat="DegatEnnemi"/>
  </div>
</template>

<script>
import MessageComponent from '../../components/MessageComponent/MessageComponent.vue';
import PointDeVie from '../../components/PointsDeVieUpdate.vue';

export default {
  data() {
    return {
      DegatEnnemi: 0,
      DegatJoueur: 0
    }
  },
  components: {
    PointDeVie,
    MessageComponent,
  },
  methods: {
    handleDecrement(type) {
      // Logique pour décrémenter les points de vie de l'autre composant
      if (type === 'Joueur') {
        console.log("Envoyer -8 au composant enfant de type Ennemi");
        this.DegatEnnemi = 8;
        this.DegatJoueur = 0;
      } else if (type === 'Ennemi') {
        console.log("Envoyer -10 au composant enfant de type Joueur");
        this.DegatEnnemi = 0;
        this.DegatJoueur = 10;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>  