const { add, sub, divide } = require("./utils");
const fs=require("fs");

console.log("Addition=", add(30, 20));
console.log("Substraction=", sub(30, 20));
console.log("Division=", divide(30, 20));

fs.writeFileSync("fstext","this file created using fs"); //create and wite a file
const readFile=fs.readFileSync("fstext",'utf-8'); //read file
fs.appendFileSync("fstext","---more content appended using appendfilesync")

console.log("File content is---",readFile);
console.log("Completed");

