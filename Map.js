let lunchInUSD = [
    {dish: "Mi Xao", price: 2},
    {dish: "Com Tam", price: 1},
    {dish: "Tom Hum", price: 50},
];
// let affordableLunch = lunch.filter(el => el.price < 20);
// console.log(affordableLunch);

// let sortedLunch = lunch.sort((a,b) => {return a.price - b.price});
// console.log(sortedLunch);

let lunchInVND = lunchInUSD.map(({dish, price}) => ({dish: dish, priceVND : price * 23000}));
console.log(lunchInVND);

let usdPrices = [1.50, 3.25, 8.68, 10];
let vndPrices = usdPrices.map(el => el * 23000);
console.log(vndPrices);

let names = [
    "Charles Lee",
    "Vinh Duong",
    "Elon Musk"
];
let lengthOfNames = names.map(name => name.length);
console.log(lengthOfNames);