//CommonJS ,every file module (by default)
//Modules -Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-uilt");
const data = require("./6-alternativeSyntax");
require("./7-mind-grenade");
/* 
console.log(names);
 */
sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);
