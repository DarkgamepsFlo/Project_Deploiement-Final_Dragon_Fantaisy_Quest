<!-- Message.vue -->
<template>
  <div>
    <h1>Message de l'API</h1>
    <p v-if="apiMessage">{{ apiMessage }}</p>
    <p v-else>Chargement en cours...</p>
  </div>
</template>

<script src="../Message.js"></script>
<style src="./Message.css"></style>