<template>
    <div>      
      <img v-if="type === 'Joueur'" id="DamageJoueur" :src="require('@/assets/DamageJoueur.gif')" alt="Description de l'image">
      <img v-if="type === 'Ennemi'" id="DamageEnnemi" :src="require('@/assets/DamageEnnemi.gif')" alt="Description de l'image">
    </div>
  </template>
  
  <script src="./DamageEffect.js"></script>
  <style src="./DamageEffect.css"></style>