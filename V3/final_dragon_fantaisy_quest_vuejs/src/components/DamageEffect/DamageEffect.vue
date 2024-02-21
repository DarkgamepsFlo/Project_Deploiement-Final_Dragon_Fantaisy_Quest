<template>
    <div>      
      <div v-if="type === 'Joueur'" id="DamageJoueur">
        <img :src="require('@/assets/DamageJoueur.gif')" alt="Description de l'image">
      </div>
      <div v-if="type === 'Ennemi'" id="DamageEnnemi">
        <img :src="require('@/assets/DamageEnnemi.gif')" alt="Description de l'image">
      </div>
    </div>
  </template>
  
  <script src="./DamageEffect.js"></script>
  <style src="./DamageEffect.css"></style>