<template>
  <div class="app-container">
    <div class="points-de-vie-container">
      <DamageEffect :showEffect="showDamageEffectEffect" />
      <PointDeVie class="pointDeVieCompJoueur" :type="'Joueur'" :isAttack="isAttackJoueur" @change-img="updateImg" :img="ImgBaseJoueur" v-if="ImgBaseJoueur !== ''"/>
      <PointDeVie class="pointDeVieCompEnnemi" :type="'Ennemi'" :isAttack="isAttackEnnemi" @change-img="updateImg" @decrement="handleDecrement" :degat="DegatEnnemi" :img="ImgBaseEnnemi" v-if="ImgBaseEnnemi !== ''"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script src="./MainPage.js"></script>
<style src="./MainPage.css"></style>