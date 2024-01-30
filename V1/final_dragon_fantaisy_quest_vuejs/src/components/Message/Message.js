import axios from 'axios';

export default {
  name: 'MessageComponent',
  data() {
    return {
      apiMessage: null,
    };
  },
  mounted() {
    // Faites une requête GET vers votre API
    axios.get('http://localhost:3000/api/message')
      .then(response => {
        // Assurez-vous que la réponse est au format JSON et contient la propriété 'data'
        if (response && response.data) {
          this.apiMessage = response.data.message;
        } else {
          console.error('Réponse de l\'API invalide', response);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du message de l\'API', error);
      });
  },
};