export default {
  name: 'BarreAction',
  data() {
    return {
      barreAction: null,
    };
  },
  methods: {
    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie() {

      
      // Émission d'un événement personnalisé vers le composant parent avec le type du composant actuel
      this.$emit('decrement', 'Joueur');
    },
  },
};