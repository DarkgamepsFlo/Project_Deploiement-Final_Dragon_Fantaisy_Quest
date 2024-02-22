export default {
  mounted() {
    this.playVictoryMusic();
  },
  methods: {
    // Cette méthode permet de redémarrer l'application (Lorsqu'on clique sur le bouton de cette page)
    restartApplication() {
      location.reload();
    },
    // Cette méthode permet de démarrer automatiquement un audio lors de l'apparition de cette page
    playVictoryMusic() {
      const audio = new Audio(require('@/assets/Fanfare.mp3'));
      audio.play();
    }
  }
}