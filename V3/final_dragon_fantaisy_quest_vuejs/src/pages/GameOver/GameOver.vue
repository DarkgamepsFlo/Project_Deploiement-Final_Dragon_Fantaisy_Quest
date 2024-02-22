<template>
  <img v-if="showYouDied" class="you-died" :src="require('@/assets/YouDied.png')">
  <img v-if="showYouDied" class="perso-you-died" :src="require('@/assets/Cloud.gif')">
  <button v-if="showYouDied" class="buttonRetry" @click="restartApplication">Redémarrer</button>
</template>
 
  <script src="./GameOver.js"></script>
  <style src="./GameOver.css"></style>