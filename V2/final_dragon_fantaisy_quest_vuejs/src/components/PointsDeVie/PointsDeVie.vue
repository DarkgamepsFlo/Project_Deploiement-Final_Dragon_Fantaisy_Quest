<template>
  <div class="points-section">

    <img :src="require('@/assets/' + img)" alt="Description de l'image">

    <!-- Affichage des points de vie actuels -->
    <p v-if="localType == 'Ennemi'">PV : {{ pointsDeVie }}</p>

    <p v-if="localType == 'Ennemi'">Dégâts reçus : {{ degat }}</p>

  </div>
</template>

<script src="./PointsDeVie.js"></script>
<style src="./PointsDeVie.css"></style>