<template>
  <div class="back-barre-action">
    <div class="barre-action barre-life">
      <p class="pv-class">PV : {{ pointsDeVie }} / {{ pointsDeVieBase }}</p>
      <canvas id="canvas">oui</canvas>
    </div>
    <div class="barre-action barre-attack">
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Punch')">Coup de base</button>
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Magic_Attack')">Attaque Magique</button>
      <button :class="{ 'button': !isButtonDisabled, 'button-disabled': isButtonDisabled }" :disabled="isButtonDisabled" @click="decrementerPointsDeVie('Heal')">Soin</button>
    </div>
  </div>
</template>
  
<script src="./BarreAction.js"></script>
<style src="./BarreAction.css"></style>