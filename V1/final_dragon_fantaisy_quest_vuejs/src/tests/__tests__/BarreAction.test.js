const { decrementerPointsDeVie, fetchPointsDeVie, handleDegatChange } = require("../BarreAction");

const returnDecrementerPointDeVie_Punch = require("./returnDecrementerPointsDeVie_Punch.json");
const returnDecrementerPointDeVie_MagicAttack = require("./returnDecrementerPointsDeVie_MagicAttack.json");
const returnDecrementerPointDeVie_Heal = require("./returnDecrementerPointsDeVie_Heal.json");
const returnDecrementerPointDeVie_Other = require("./returnDecrementerPointsDeVie_Other.json");

const returnFetchPointDeVie_Joueur = require("./returnFetchPointDeVie_Joueur.json");
const returnFetchPointDeVie_Ennemi = require("./returnFetchPointDeVie_Ennemi.json");

const returnHandleDegatChange_Joueur = require("./returnHandleDegatChange_Joueur.json");
const returnHandleDegatChange_Ennemi = require("./returnHandleDegatChange_Ennemi.json");

describe("BarraAction.js", () => {
    // Test pour la fonction decrementerPointsDeVie()
    describe("decrementerPointsDeVie", () => {
        it("Doit retourner les bonnes informations pour Punch", () => {
            const res = decrementerPointsDeVie('Punch', 10, 100, false);
            expect(res).toStrictEqual(returnDecrementerPointDeVie_Punch);
        }),
        it("Doit retourner les bonnes informations pour Magick_Attack", () => {
            const res = decrementerPointsDeVie('Magic_Attack', 12, 100, false);
            expect(res).toStrictEqual(returnDecrementerPointDeVie_MagicAttack);
        }),
        it("Doit retourner les bonnes informations pour Heal", () => {
            const res = decrementerPointsDeVie('Heal', -1, 100, false);
            expect(res).toStrictEqual(returnDecrementerPointDeVie_Heal);
        }),
        it("Doit retourner les bonnes informations pour Other", () => {
            const res = decrementerPointsDeVie('Other', 0, 100, false);
            expect(res).toStrictEqual(returnDecrementerPointDeVie_Other);
        });
    }),
    describe("fetchPointsDeVie", () => {
        it("Doit mettre les bons PV par rapport au Joueur", () => {
            const res = fetchPointsDeVie('Joueur');
            expect(res).toStrictEqual(returnFetchPointDeVie_Joueur);
        }),
        it("Doit mettre les bons PV par rapport à l'Ennemi", () => {
            const res = fetchPointsDeVie('Ennemi');
            expect(res).toStrictEqual(returnFetchPointDeVie_Ennemi);
        });
    }),
    describe("handleDegatChange", () => {
        it("Doit avoir les bons PV et décrémenter la bonne chose pour le joueur", () => {
            const res = handleDegatChange('Joueur', 100, 10);
            expect(res).toStrictEqual(returnHandleDegatChange_Joueur);
        }),
        it("Doit avoir les bons PV et décrémenter la bonne chose pour l'ennemi", () => {
            const res = handleDegatChange('Ennemi', 50, 8);
            expect(res).toStrictEqual(returnHandleDegatChange_Ennemi);
        });
    })
});
  