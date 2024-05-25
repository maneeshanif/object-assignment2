let inventory = [];
let product1 = {
    name: "BMW",
    model: 2019,
    cost: 10000000,
    quantity: 70,
};
let product2 = {
    name: "Iphone15",
    model: 2024,
    cost: 1200,
    quantity: 100,
};
let product3 = {
    name: "Nikon",
    model: 2016,
    cost: 1000,
    quantity: 30,
};
inventory = [product1, product2, product3];
console.log(`Quantity of ${inventory[2].name}: ${inventory[2].quantity}`);
let product4 = {
    name: "Canon",
    model: 2019,
    cost: 700,
    quantity: 40,
};
console.log(`price of ${inventory[3].name}: ${inventory[3].cost}`);
export {};
