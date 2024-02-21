export default {
  data() {
    return {
      showYouDied: false,
    };
  },
  methods: {
    restartApplication() {
      location.reload();
    },
    playGameOverMusic() {
      const audio = new Audio(require('@/assets/GameOver.mp3'));
      audio.play();
    }
  },
  mounted() {
    this.playGameOverMusic();
    setTimeout(() => {
      this.showYouDied = true; // Affichez les éléments après une certaine période
    }, 1000); // Réglez le délai en millisecondes pour afficher les éléments après 1 seconde
  }
};