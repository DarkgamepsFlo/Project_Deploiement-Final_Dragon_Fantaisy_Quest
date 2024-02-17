<!-- BarreAction.vue -->
<template>
  <div class="back-barre-action">
    <div class="barre-action barre-life">
      <!-- <h1 class="h1-barre-action">Je suis la barre d'affichage de la vie</h1> -->
      <p class="pv-class">PV : {{ pointsDeVie }} / {{ pointsDeVieBase }}</p>
      <canvas id="canvas">oui</canvas>
    </div>
    <div class="barre-action barre-attack">
      <!-- <h1 class="h1-barre-action">Je suis la barre d'action</h1> -->
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Punch')">Coup de base</button>
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Magic_Attack')">Attaque Magique</button>
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Heal')">Soin</button>
    </div>
  </div>
</template>
  
<script src="./BarreAction.js"></script>
<style src="./BarreAction.css"></style>