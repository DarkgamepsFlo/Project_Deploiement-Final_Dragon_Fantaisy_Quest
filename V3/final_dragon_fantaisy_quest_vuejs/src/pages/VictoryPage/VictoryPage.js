export default {
  mounted() {
    this.playVictoryMusic();
  },
  methods: {
    restartApplication() {
      location.reload();
    },
    playVictoryMusic() {
      const audio = new Audio(require('@/assets/Fanfare.mp3'));
      audio.play();
    }
  }
}