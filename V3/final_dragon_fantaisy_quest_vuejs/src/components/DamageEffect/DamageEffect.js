export default {
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  async mounted() {
    console.log("Je suis le mounted DamageEffect")
    if (this.localType === "Ennemi")
      console.log("Ennemi")
    if (this.localType === "Joueur")
      console.log("Joueur")
  },
};
