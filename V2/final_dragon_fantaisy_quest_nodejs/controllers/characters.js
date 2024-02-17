// require
const { getPVJoueur, getPVEnnemi } = require("../services/charactersService");

// Cette fonction va permettre de récupérer l'ensemble des pokémons présent dans l'API
async function getPVJoueurs(req, res, next) {
    try{
        const result = await getPVJoueur();
        return res.send(result);
    } catch (e){
        console.error(`Il y a une erreur dans la méthode getPVJoueurs : ${e}`)
    }
}

// Cette fonction va permettre de récupérer l'ensemble des pokémons présent dans l'API
async function getPVEnnemis(req, res, next) {
    try{
        const result = await getPVEnnemi();
        return res.send(result);
    } catch (e){
        console.error(`Il y a une erreur dans la méthode getPVEnnemis : ${e}`)
    }
}

module.exports = {
    getPVJoueurs,
    getPVEnnemis    
}