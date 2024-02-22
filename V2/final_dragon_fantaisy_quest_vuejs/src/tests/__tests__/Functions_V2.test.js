const { decrementerPointsDeVie, handleDegatChange } = require("../Functions_V2");

describe("BarraAction.js", () => {
    // Test pour la fonction decrementerPointsDeVie()
    describe("decrementerPointsDeVie", () => {
        it("Doit retourner les bonnes informations pour Ennemi et Punch", () => {
            const res = decrementerPointsDeVie("Ennemi", "Punch");
            expect(res).toStrictEqual(10);
        });
        
        it("Doit retourner les bonnes informations pour Ennemi et autre", () => {
            const res = decrementerPointsDeVie("Ennemi", "JeMetsNimporteQuoi");
            expect(res).toStrictEqual(10);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Punch", () => {
            const res = decrementerPointsDeVie("Joueur", "Punch");
            expect(res).toStrictEqual(8);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Magic_Attack", () => {
            const res = decrementerPointsDeVie("Joueur", "Magic_Attack");
            expect(res).toStrictEqual(12);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et Heal", () => {
            const res = decrementerPointsDeVie("Joueur", "Heal");
            expect(res).toStrictEqual(-1);
        });
        
        it("Doit retourner les bonnes informations pour Joueur et autre", () => {
            const res = decrementerPointsDeVie("Joueur", "Blablabla");
            expect(res).toStrictEqual(0);
        });
    });

    describe("handleDegatChange", () => {
        it("Doit avoir les bons PV et décrémenter la bonne chose pour le joueur", () => {
            const res = handleDegatChange('Joueur', 100, 10);
            expect(res).toStrictEqual([90, 0]);
        });
        
        it("Doit avoir les bons PV et décrémenter la bonne chose pour l'ennemi", () => {
            const res = handleDegatChange('Ennemi', 50, 8);
            expect(res).toStrictEqual([42, 3000]);
        });
    });
});
