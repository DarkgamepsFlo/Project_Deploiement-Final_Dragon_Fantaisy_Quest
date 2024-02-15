const { decrementerPointsDeVie } = require("../BarreAction");

const returnDecrementerPointDeVie = require("./returnDecrementerPointsDeVie.json");

describe("BarraAction.js", () => {
    // Test pour la fonction decrementerPointsDeVie()
    describe("decrementerPointsDeVie", () => {
        it("Doit retourner les bonnes informations", () => {
            const res = decrementerPointsDeVie('Punch', 10, 100, false);
            expect(res).toStrictEqual(returnDecrementerPointDeVie);
        });
    })
});
  