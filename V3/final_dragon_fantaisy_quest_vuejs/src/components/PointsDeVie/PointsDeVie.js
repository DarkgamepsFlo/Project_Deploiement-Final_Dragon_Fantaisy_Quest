import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";
import decrementerPointsDeVieService from "@/services/decrementerPointsDeVieService";
import handleDegatChangeService from "@/services/handleDegatChangeService";

export default {
  data() {
    return {
      pointsDeVie: null,
      localType: this.type,
    };
  },
  props: {
    // Propriété reçue du composant parent qui indique le type du personnage
    type: {
      type: String,
      required: true,
    },
    // Propriété reçue du composant parent qui indique les dégâts
    degat: {
      type: Number,
      default: 0,
    },
    // Propriété reçue du composant parent qui indique l'image du personnage'
    img: {
      type: String,
      default: null,
    },
    // Propriété reçue du composant parent qui indique si le personnage est en train d'attaquer
    isAttack: {
      type: Boolean,
      default: false,
    },
  },
  async mounted() {
    // Si le type est Ennemi, on va récupérer les points de vie de celui-ci grâce à l'API
    if (this.localType === "Ennemi")
      this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType, "Sephiroth");
  },
  watch: {
    degat: 'handleDegatChange', // On observe la variable dégâts pour activer la méthode pour décrémenter les pv
    isAttack: function(newVal) { // On observe la variable isAttack pour activer l'animation d'attaque par rapport au type du personnage
      if (newVal) {
        this.letsAnimationAttack();
      }
    }
  },
  methods: {
    // Cette méthode permet à l'ennemi d'attaquer le joueur
    async decrementerPointsDeVie() {
      if (this.localType === "Ennemi"){

        const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, null);
        this.$emit('decrement', this.localType, int_result);
      }
      
    },

    // Cette méthode permet de décrémenter les points de vie de l'ennemi
    async handleDegatChange(newValue) {
      if (this.localType === "Ennemi"){
        var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue);

        this.pointsDeVie = pv_result;

        // S'il a encore des pv, alors l'ennemi va attaquer le joueur
        if(this.pointsDeVie > 0){
          if (second_result > 0){
            setTimeout(() => {
              this.decrementerPointsDeVie('Attack');
            }, second_result);
          }
        } else { // Sinon on affiche la page de victoire du joueur
          this.$emit('endGame', this.localType, true);
        }
      }
    },

    // Cette méthode permet de mettre en place l'animation d'attaque des personnages
    letsAnimationAttack() {
      if (this.isAttack && this.localType === "Joueur") { // Si c'est le joueur, il va se déplacer sur la droite
        const image = document.getElementById('imageJoueur');
        image.style.setProperty('transform', 'translateX(500px) scaleX(-1)');
        image.style.setProperty('transition', 'transform 1s ease');
        image.style.setProperty('flex', '1');

        this.$emit('change-img', '2', "Joueur"); // On envoie un emit pour pouvoir changer l'image du personnage par rapport à s'il attaque ou non
        
        setTimeout(() => {
          image.style.removeProperty('transform');
          image.style.setProperty('transition', 'transform 1s ease');
          image.style.removeProperty('flex');
          this.$emit('change-img', '1', "Joueur"); // On envoie un emit pour pouvoir changer l'image du personnage par rapport à s'il attaque ou non
        }, 3000);
      } if (this.isAttack && this.localType === "Ennemi") { // Si c'est le joueur, il va se déplacer sur la gauche
        const image = document.getElementById('imageEnnemi');
        image.style.setProperty('transform', 'translateX(-650px) scaleX(-1)');
        image.style.setProperty('transition', 'transform 1s ease');
        image.style.setProperty('flex', '1');

        this.$emit('change-img', '2', "Ennemi"); // On envoie un emit pour pouvoir changer l'image du personnage par rapport à s'il attaque ou non
        
        setTimeout(() => {
          image.style.removeProperty('transform');
          image.style.setProperty('transition', 'transform 1s ease');
          image.style.removeProperty('flex');
          this.$emit('change-img', '1', "Ennemi"); // On envoie un emit pour pouvoir changer l'image du personnage par rapport à s'il attaque ou non
        }, 3000);
      }
    },
  },
};
