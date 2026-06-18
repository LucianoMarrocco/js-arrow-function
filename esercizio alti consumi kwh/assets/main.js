console.log("js caricato");

const consumi = [23, 177, 45, 76, 125, 177, 256, 87, 24, 65,];

/*
const bolletta = consumi.filter(prices => prices >= 70 && prices <= 400);
console.warn(bolletta)
*/

consumi.forEach(consumo => {
    if (consumo > 100) {
        console.warn(consumo);
    } else {
        console.log(consumo);
    }
});