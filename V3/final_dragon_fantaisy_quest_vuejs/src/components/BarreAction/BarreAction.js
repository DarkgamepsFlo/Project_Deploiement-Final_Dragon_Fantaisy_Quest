// import
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

      canvas: null, // Permet de gérer la barre de pv
      ctx: null, // Permet de gérer la barre de pv
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
  },
  async mounted() {

    // Requête API pour récupérer les PV du joueur dans la base de données
    this.pointsDeVie = await fetchPointsDeVieService.fetchPointsDeVieAPI(this.localType, "Cloud");
    this.pointsDeVieBase = this.pointsDeVie;

    // Récupérer le canvas et le contexte, permet de gérer la barre de pv
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Dessiner la barre de vie initiale
    this.drawLifeBar();
  },
  watch: {
    degat: 'handleDegatChange', // Exécutrer handleDegatChange lorsqu'on reçoit des dégâts
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

    // Méthode appelée lorsqu'on clique sur le bouton de décrémentation des points de vie de l'adversaire
    async decrementerPointsDeVie(name) {
      if (!this.isButtonDisabled) {
        this.isButtonDisabled = true; // Désactive le bouton

        const int_result = await decrementerPointsDeVieService.decrementerPointsDeVie(this.localType, name); // Méthode permettant de décrémenter les pv

        if (int_result === -1){ // Si le résultat vaut -1, le joueur peut se soigner
          var result = Math.floor(Math.random() * 18) + 9;
          if (this.pointsDeVie > this.pointsDeVieBase - result)
            this.pointsDeVie = this.pointsDeVieBase;
          else
            this.pointsDeVie += result
        }

        this.$emit('decrement', this.localType, int_result);

        // Cette méthode permet de faire en sorte que le bouton ne soit pas cliquable par le joueur pendant 12 secondes
        setTimeout(() => {
          this.isButtonDisabled = false;
        }, 12000);
      }
    },

    // Cette méthode permet de décrémenter les points de vie du joueur
    async handleDegatChange(newValue) {

      this.drawLifeBar();
      
      var [pv_result, second_result] = await handleDegatChangeService.handleDegatChange(this.localType, this.pointsDeVie, newValue)
      
      this.pointsDeVie = pv_result;
      
      // Si le joueur possède encore des points de vie, il va décrémenter les pv de l'adversaire
      if(this.pointsDeVie > 0){
        if (second_result > 0){
          setTimeout(() => {
            this.decrementerPointsDeVie(this.localType, 'Attack');
          }, second_result);
        }
      } else { // Sinon on affiche la fenêtre de game over
        this.$emit('endGame', this.localType, true);
      }
    },
  },
};