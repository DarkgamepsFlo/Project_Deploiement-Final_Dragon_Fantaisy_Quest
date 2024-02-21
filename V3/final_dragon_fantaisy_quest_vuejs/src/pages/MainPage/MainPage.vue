<template>
  <div v-if="isVictory === true" class="victory">
    <VictoryPage></VictoryPage>
  </div>
  <div v-if="isGameOver === true" class="gameover">
    <GameOver></GameOver>
  </div>
  <div v-if="isVictoryBase !== true && isGameOverBase !== true" class="app-container">
    <div class="points-de-vie-container">
      <DamageEffect v-if="isDamageJoueur === true" :type="'Joueur'"/>
      <PointDeVie class="pointDeVieCompJoueur" :type="'Joueur'" :isAttack="isAttackJoueur" @change-img="updateImg" :img="ImgBaseJoueur" v-if="ImgBaseJoueur !== ''"/>
      <DamageEffect v-if="isDamageEnnemi === true" :type="'Ennemi'"/>
      <PointDeVie class="pointDeVieCompEnnemi" :type="'Ennemi'" :isAttack="isAttackEnnemi" @change-img="updateImg" @decrement="handleDecrement" @endGame="endGamePage" :degat="DegatEnnemi" :img="ImgBaseEnnemi" v-if="ImgBaseEnnemi !== ''"/>
    </div>
    <BarreAction :type="'Joueur'" @decrement="handleDecrement" @endGame="endGamePage" :degat="DegatJoueur"></BarreAction>
  </div>
</template>

<script src="./MainPage.js"></script>
<style src="./MainPage.css"></style>