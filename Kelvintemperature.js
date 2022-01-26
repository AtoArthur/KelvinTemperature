const kelvin = 293;
//This is to help in conversion process. 273K = 0C =32F//
var temp = 293;
const celsius = temp - 273;
//celsius = var - 273;
celsius = 293 - 273;
console.log(kelvin - 273);
celsius = 20;
//const values cannot be changed so using var and let will help with the other values since they can be replaced.//
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = 20*(9/5)+32;
console.log(fahrenheit);
//declaring more than one var or let in the code brings up syntax errors. using this comments helps understand if you follow the code line by line//
fahrenheit = Math.floor(fahrenheit);
//since the number was already a whole number, .floor which converts decimals to whole number wasnt brought into action// 
fahrenheit = 68;
console.log(`The temperature is ${68} degrees Fahrenheit`); 