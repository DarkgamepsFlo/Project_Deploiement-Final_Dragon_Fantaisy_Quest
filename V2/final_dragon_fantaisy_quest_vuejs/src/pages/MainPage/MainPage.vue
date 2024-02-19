<template>
  <div class="app-container">
    <div class="points-de-vie-container">
      <PointDeVie :type="'Joueur'" :img="ImgBaseJoueur" v-if="ImgBaseJoueur !== ''"/>
      <PointDeVie :type="'Ennemi'" @decrement="handleDecrement" :degat="DegatEnnemi" :img="ImgBaseEnnemi" v-if="ImgBaseEnnemi !== ''"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script src="./MainPage.js"></script>
<style src="./MainPage.css"></style>