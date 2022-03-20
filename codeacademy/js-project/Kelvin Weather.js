// Kelvin Weather

const kelvin = 0;

// Celcius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit); /*In order to round this value DOWN we use math.floor:*/

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// extra practice
let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);