import calcTaxAndSum, { calculateTax } from './tax';

class Product {
  constructor(name, price){
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

let product = new Product('czapka', 100);
let taxedPrice = calculateTax(product.price);
console.log(`nazwa: ${product.name}, cena wraz z podatkiem: ${taxedPrice}`);

let products = [new Product("rękawiczki", 23), new Product("buty", 100)];
let totalPrice = calcTaxAndSum(...products.map(p => p.price));
console.log(`cena całkowita: ${totalPrice.toFixed(2)}`);
