<!-- BarreAction.vue -->
<template>
  <div class="back-barre-action">
    <div class="barre-action barre-life">
      <!-- <h1 class="h1-barre-action">Je suis la barre d'affichage de la vie</h1> -->
      <p>PV : {{ pointsDeVie }} / {{ pointsDeVieBase }}</p>
      <p>Dégâts reçus : {{ degat }}</p>
    </div>
    <div class="barre-action barre-attack">
      <!-- <h1 class="h1-barre-action">Je suis la barre d'action</h1> -->
      <button :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Punch')">Coup de base</button>
      <button :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Magic_Attack')">Attaque Magique</button>
      <button :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Heal')">Soin</button>
    </div>
  </div>
  
</template>
  
<script src="./BarreAction.js"></script>
<style src="./BarreAction.css"></style>