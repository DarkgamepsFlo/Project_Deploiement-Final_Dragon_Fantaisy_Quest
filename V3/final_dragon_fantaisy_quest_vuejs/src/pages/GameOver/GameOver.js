export default {
  data() {
    return {
      showYouDied: false,
    };
  },
  methods: {
    restartApplication() {
      location.reload();
    }
  },
  mounted() {
    setTimeout(() => {
      this.showYouDied = true; // Affichez les éléments après une certaine période
    }, 1000); // Réglez le délai en millisecondes pour afficher les éléments après 1 seconde
  }
};