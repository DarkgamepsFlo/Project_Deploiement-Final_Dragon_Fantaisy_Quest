export default {
  data() {
    return {
      showYouDied: false,
    };
  },
  methods: {
    // Cette méthode permet de redémarrer l'application (Lorsqu'on clique sur le bouton de cette page)
    restartApplication() {
      location.reload();
    },
    // Cette méthode permet de démarrer automatiquement un audio lors de l'apparition de cette page
    playGameOverMusic() {
      const audio = new Audio(require('@/assets/GameOver.mp3'));
      audio.play();
    }
  },
  mounted() {
    this.playGameOverMusic(); // On active la musique
    // On attend une seconde avant d'afficher les éléments de la page
    setTimeout(() => {
      this.showYouDied = true; // Affichez les éléments après une certaine période
    }, 1000); // Réglez le délai en millisecondes pour afficher les éléments après 1 seconde
  }
};