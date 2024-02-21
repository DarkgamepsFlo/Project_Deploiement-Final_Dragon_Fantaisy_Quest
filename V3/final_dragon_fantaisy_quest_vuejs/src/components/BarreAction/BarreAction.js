import fetchPointsDeVieService from "@/services/fetchPointsDeVieService";
import decrementerPointsDeVieService from "@/services/decrementerPointsDeVieService";
import handleDegatChangeService from "@/services/handleDegatChangeService";

export default {
  name: 'BarreAction',
  data() {
    return {
      pointsDeVieBase: null,
      pointsDeVie: null,
      localType: this.type,
      isButtonDisabled: false,

      canvas: null,
      ctx: null,
    };
  },
  props: {
    // Propriété reçue du composant parent, indiquant le type (Joueur ou Ennemi)
    type: {
      type: String,
      required: true,
    },
    degat: {
      type: Number,
      default: 0,
    },
  },
  async mounted() {

    console.log("Je suis le mounted deuxième BarreAction");
    // Méthode appelée automatiquement après que le composant est monté dans le DOM
    // Elle effectue une requête à l'API pour récupérer les points de vie initiaux
    this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType, "Cloud");
    this.pointsDeVieBase = this.pointsDeVie;

    // Récupérer le canvas et le contexte
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Dessiner la barre de vie initiale
    this.drawLifeBar();
  },
  watch: {
    degat: 'handleDegatChange', // Utilise la méthode handleDegatChange pour réagir aux changements
  },
  methods: {
    // Dessiner la barre de vie dans le canvas
    drawLifeBar() {
      const startWidth = (this.pointsDeVie / this.pointsDeVieBase) * this.canvas.width;
      const endWidth = ((this.pointsDeVie - this.degat) / this.pointsDeVieBase) * this.canvas.width;
      const animationDuration = 1000; // Durée de l'animation en millisecondes
      const startTime = Date.now();
    
      const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Limiter la progression à 1
    
        // Interpoler la largeur de la barre en fonction de la progression de l'animation
        const currentWidth = startWidth - (startWidth - endWidth) * progress;
    
        // Effacer le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
        // Dessiner la barre de vie
        this.ctx.fillStyle = '#ffb027';

        // Créer un dégradé de couleur
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient.addColorStop(0, 'red');    // Rouge à gauche
        gradient.addColorStop(1, 'orange'); // Orange à droite

        // Dessiner la barre de vie avec le dégradé de couleur
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, currentWidth, this.canvas.height);
    
        if (progress < 1) {
          // Si l'animation n'est pas encore terminée, continuer à animer
          requestAnimationFrame(animate);
        }
      };
    
      // Déclencher l'animation
      animate();
    },    

    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie
    async decrementerPointsDeVie(name) {
      if (!this.isButtonDisabled) {

        console.log("Le bouton est activé, le Joueur attaque l'ennemi")
        this.isButtonDisabled = true; // Désactive le bouton

        const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, name);
        console.log(int_result);

        if (int_result === -1){
          var result = Math.floor(Math.random() * 18) + 9;
          if (this.pointsDeVie > this.pointsDeVieBase - result)
            this.pointsDeVie = this.pointsDeVieBase;
          else
            this.pointsDeVie += result
        }

        this.$emit('decrement', this.localType, int_result);

        // Cette méthode permet de faire en sorte que le bouton ne soit pas cliquable par le joueur pendant 5 secondes
        setTimeout(() => {
          this.isButtonDisabled = false;
        }, 12000);
      }
    },

    async handleDegatChange(newValue) {

      this.drawLifeBar();
      
      var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue)
      
      this.pointsDeVie = pv_result;

      console.log("PV restant du joueur : " + this.pointsDeVie);

      if(this.pointsDeVie > 0){
        if (second_result > 0){
          setTimeout(() => {
            this.decrementerPointsDeVie(this.localType, 'Attack');
          }, second_result);
        }
      } else {
        console.log("Joueur KO par l'ennemi");
      }
    },
  },
};