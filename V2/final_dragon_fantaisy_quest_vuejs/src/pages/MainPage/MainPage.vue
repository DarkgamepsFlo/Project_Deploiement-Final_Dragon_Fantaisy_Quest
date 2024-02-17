<template>
  <div class="app-container">
    <div class="points-de-vie-container">
      <PointDeVie :type="'Joueur'" :img="'Cloud_1.gif'"/>
      <PointDeVie :type="'Ennemi'" @decrement="handleDecrement" :degat="DegatEnnemi" :img="'Sephiroth.gif'"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script src="./MainPage.js"></script>
<style src="./MainPage.css"></style>