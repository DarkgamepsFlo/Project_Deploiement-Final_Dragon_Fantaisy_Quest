const { decrementerPointsDeVie_v2, handleDegatChange_v2 } = require("../BarreAction");

describe("BarraAction.js", () => {
    // Test pour la fonction decrementerPointsDeVie()
    describe("decrementerPointsDeVie", () => {
        it("Doit retourner les bonnes informations pour Ennemi et Punch", () => {
            const res = decrementerPointsDeVie_v2("Ennemi", "Punch");
            expect(res).toStrictEqual(10);
        });
        
        it("Doit retourner les bonnes informations pour Ennemi et autre", () => {
            const res = decrementerPointsDeVie_v2("Ennemi", "JeMetsNimporteQuoi");
            expect(res).toStrictEqual(10);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Punch", () => {
            const res = decrementerPointsDeVie_v2("Joueur", "Punch");
            expect(res).toStrictEqual(8);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Magic_Attack", () => {
            const res = decrementerPointsDeVie_v2("Joueur", "Magic_Attack");
            expect(res).toStrictEqual(12);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Heal", () => {
            const res = decrementerPointsDeVie_v2("Joueur", "Heal");
            expect(res).toStrictEqual(-1);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et autre", () => {
            const res = decrementerPointsDeVie_v2("Joueur", "Blablabla");
            expect(res).toStrictEqual(0);
        });
    });

    describe("handleDegatChange", () => {
        it("Doit avoir les bons PV et décrémenter la bonne chose pour le joueur", () => {
            const res = handleDegatChange_v2('Joueur', 100, 10);
            expect(res).toStrictEqual([90, 0]);
        });
        
        it("Doit avoir les bons PV et décrémenter la bonne chose pour l'ennemi", () => {
            const res = handleDegatChange_v2('Ennemi', 50, 8);
            expect(res).toStrictEqual([42, 3000]);
        });
    });
});
