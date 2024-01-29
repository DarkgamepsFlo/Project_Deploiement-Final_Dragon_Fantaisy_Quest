<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App !!!!!!!!!!!!!!!!!"/> -->
  <Message></Message>
  <PointsDeVie></PointsDeVie>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Message from './components/Message.vue';
import PointsDeVie from './components/PointsDeVie.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Message,
    PointsDeVie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
