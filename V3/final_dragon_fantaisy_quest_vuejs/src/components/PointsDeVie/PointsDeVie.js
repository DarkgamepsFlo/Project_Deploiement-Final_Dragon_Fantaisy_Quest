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
    type: {
      type: String,
      required: true,
    },
    degat: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: null,
    },
    isAttack: {
      type: Boolean,
      default: false,
    },
  },
  async mounted() {
    console.log("Je suis le mounted PointsDeVie")
    if (this.localType === "Ennemi")
      this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType, "Sephiroth");
  },
  watch: {
    degat: 'handleDegatChange',
    isAttack: function(newVal) {
      if (newVal) {
        this.letsAnimationAttack();
      }
    }
  },
  methods: {
    async decrementerPointsDeVie() {
      if (this.localType === "Ennemi"){
        console.log("Le bouton est activé, l'Ennemi' attaque le joueur")

        const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, null);
        this.$emit('decrement', this.localType, int_result);
      }
      
    },

    async handleDegatChange(newValue) {
      if (this.localType === "Ennemi"){
        var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue);

        this.pointsDeVie = pv_result;

        console.log("PV restant de l'ennemi : " + this.pointsDeVie);

        if(this.pointsDeVie > 0){
          if (second_result > 0){
            setTimeout(() => {
              this.decrementerPointsDeVie('Attack');
            }, second_result);
          }
        } else {
          console.log("Ennemi KO par le joueur");
          this.$emit('endGame', this.localType, true);
        }
      }
    },

    letsAnimationAttack() {
      if (this.isAttack && this.localType === "Joueur") {
        const image = document.getElementById('imageJoueur');
        image.style.setProperty('transform', 'translateX(500px) scaleX(-1)');
        image.style.setProperty('transition', 'transform 1s ease');
        image.style.setProperty('flex', '1');

        this.$emit('change-img', '2', "Joueur");
        
        setTimeout(() => {
          image.style.removeProperty('transform');
          image.style.setProperty('transition', 'transform 1s ease');
          image.style.removeProperty('flex');
          this.$emit('change-img', '1', "Joueur");
        }, 3000);
      } if (this.isAttack && this.localType === "Ennemi") {
        const image = document.getElementById('imageEnnemi');
        image.style.setProperty('transform', 'translateX(-650px) scaleX(-1)');
        image.style.setProperty('transition', 'transform 1s ease');
        image.style.setProperty('flex', '1');

        this.$emit('change-img', '2', "Ennemi");
        
        setTimeout(() => {
          image.style.removeProperty('transform');
          image.style.setProperty('transition', 'transform 1s ease');
          image.style.removeProperty('flex');
          this.$emit('change-img', '1', "Ennemi");
        }, 3000);
      }
    },
  },
};
