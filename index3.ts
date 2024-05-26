/*  Assignment 3: Company Product Catalog
-----------------------------------------------------------------------------------------------------------------------------
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data
-----------------------------------------------------------------------------------------------------------------------------
*/
import chalk from "chalk"
type Product = {
  name: string;
  model: number;
  cost: number;
  quantity: number;
};
let inventory = [] as Product[];

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
console.log(chalk.redBright.bgHex('#faf0be').bold("\t\t\t\t\tRequired element of product to print\n"));
console.log(chalk.cyanBright(`Quantity of ${inventory[2].name}: ${inventory[2].quantity}`));
console.log(chalk.red("---------------------------------------------------------------------------------------------------------------------\n"));

let product4 = {
  name: "Canon",
  model: 2019,
  cost: 700,
  quantity: 40,
};
inventory.push(product4);
// console.log(`price of ${inventory[3].name}: $${inventory[3].cost}`);
console.log(chalk.blueBright.bgHex('#faf0be').bold("\t\t\t\t\t\t Explore new product \n"));
inventory.forEach((e) => {
  console.log(chalk.yellowBright("------------------------------------------------------------------------------------------------------------"));
  console.log(chalk.redBright(`name of products is :${e.name}`));
  console.log(chalk.hex("FFA533")(`model of ${e.name} :${e.model}`));
  console.log(chalk.hex("93FF33")(`cost of ${e.name} :  $${e.cost}`));
  console.log(chalk.hex("33FFE6")(`quantity of ${e.name} :${e.quantity}`));
  console.log(chalk.hex("FFA533")("-----------------------------------------------------------------------------------------------------------"));
});
