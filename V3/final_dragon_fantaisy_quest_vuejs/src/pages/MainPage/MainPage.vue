<template>
  <div class="app-container">
    <div class="points-de-vie-container">
      <DamageEffect v-if="isDamageJoueur === true" :type="'Joueur'"/>
      <PointDeVie class="pointDeVieCompJoueur" :type="'Joueur'" :isAttack="isAttackJoueur" @change-img="updateImg" :img="ImgBaseJoueur" v-if="ImgBaseJoueur !== ''"/>
      <DamageEffect v-if="isDamageEnnemi === true" :type="'Ennemi'"/>
      <PointDeVie class="pointDeVieCompEnnemi" :type="'Ennemi'" :isAttack="isAttackEnnemi" @change-img="updateImg" @decrement="handleDecrement" :degat="DegatEnnemi" :img="ImgBaseEnnemi" v-if="ImgBaseEnnemi !== ''"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script src="./MainPage.js"></script>
<style src="./MainPage.css"></style>