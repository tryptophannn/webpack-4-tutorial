import additionCalculator from './modules/additionCalculator';
import taxCalculator from './modules/taxCalculator';

let item1Price = 400;
let item2Price = 600;
let totalPrice = additionCalculator(item1Price, item2Price);
let tax = 1.08;
let priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncludeTax);
