<!-- BarreAction.vue -->
<template>
  <div class="back-barre-action">
    <div class="barre-action">
      <h1 class="h1-barre-action">Je suis la barre d'action</h1>
      <button @click="decrementerPointsDeVie">Coup de base{{ localType }}</button>
    </div>
  </div>
  
</template>
  
<script src="./BarreAction.js"></script>
<style src="./BarreAction.css"></style>