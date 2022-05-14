const path = require("path");

console.log(path.sep);
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);
// to get base module only we use basename() eg: test.txt file
const base = path.basename(filePath);
console.log(base);
//to find director path we use resole()
/* 
const absolute = path.resolve(_dirname, "/content", "subfolder", "test.txt");
console.log(absolute);
 */
