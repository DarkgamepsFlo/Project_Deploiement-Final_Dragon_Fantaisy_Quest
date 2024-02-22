<template>
  <div class="points-section">
    <img v-if="localType == 'Joueur'" id="imageJoueur" :src="require('@/assets/' + img)" alt="Description de l'image">
    <img v-if="localType == 'Ennemi'" id="imageEnnemi" :src="require('@/assets/' + img)" alt="Description de l'image">
  </div>
</template>

<script src="./PointsDeVie.js"></script>
<style src="./PointsDeVie.css"></style>