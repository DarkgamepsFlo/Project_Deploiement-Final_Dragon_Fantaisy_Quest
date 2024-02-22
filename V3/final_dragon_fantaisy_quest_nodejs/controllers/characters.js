// require
const { getPVJoueur, getPVEnnemi, getImgJoueur, getImgEnnemi } = require("../services/charactersService");

// Cette fonction va permettre de récupérer les points de vie des joueurs
async function getPVJoueurs(req, res, next) {
    try {
        // Récupérer le paramètre de requête 'name' de la requête HTTP
        const name = req.query.name;
        // Utiliser 'name' comme nécessaire dans votre logique de service
        const result = await getPVJoueur(name);
        return res.send(result);
    } catch (e) {
        console.error(`Il y a une erreur dans la méthode getPVJoueurs : ${e}`);
        return res.status(500).send("Erreur serveur");
    }
}

// Cette fonction va permettre de récupérer les points de vie des ennemis
async function getPVEnnemis(req, res, next) {
    try {
        // Récupérer le paramètre de requête 'name' de la requête HTTP
        const name = req.query.name;
        // Utiliser 'name' comme nécessaire dans votre logique de service
        const result = await getPVEnnemi(name);
        return res.send(result);
    } catch (e) {
        console.error(`Il y a une erreur dans la méthode getPVEnnemis : ${e}`);
        return res.status(500).send("Erreur serveur");
    }
}

// Cette fonction va permettre de récupérer les images des joueurs
async function getImgJoueurs(req, res, next) {
    try {
        // Récupérer le paramètre de requête 'name' de la requête HTTP
        const name = req.query.name;
        // Utiliser 'name' comme nécessaire dans votre logique de service
        const result = await getImgJoueur(name);
        return res.send(result);
    } catch (e) {
        console.error(`Il y a une erreur dans la méthode getPVJoueurs : ${e}`);
        return res.status(500).send("Erreur serveur");
    }
}

// Cette fonction va permettre de récupérer les images des ennemis
async function getImgEnnemis(req, res, next) {
    try {
        // Récupérer le paramètre de requête 'name' de la requête HTTP
        const name = req.query.name;
        // Utiliser 'name' comme nécessaire dans votre logique de service
        const result = await getImgEnnemi(name);
        return res.send(result);
    } catch (e) {
        console.error(`Il y a une erreur dans la méthode getPVEnnemis : ${e}`);
        return res.status(500).send("Erreur serveur");
    }
}

module.exports = {
    getPVJoueurs,
    getPVEnnemis,
    getImgJoueurs,
    getImgEnnemis 
}