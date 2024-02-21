<template>
    <img class="victory-img" :src="require('@/assets/victory.png')">
    <img class="you-win-img" :src="require('@/assets/Cloud_fin.gif')">
    <button class="retryButton" @click="restartApplication">Nouveau Combat !</button>
  </template>
  
  <script src="./VictoryPage.js"></script>
  <style src="./VictoryPage.css"></style>