const { add, sub, divide } = require("./utils");
const fs = require("fs");

console.log("Addition=", add(30, 20));
console.log("Substraction=", sub(30, 20));
console.log("Division=", divide(30, 20));

//Synchronous fs
fs.writeFileSync("fstext","this file created using Synchronus fs"); //create and wite a file
fs.appendFileSync("fstext","---more content appended using appendfilesync \n")
const readFile=fs.readFileSync("fstext",'utf-8'); //read file
const isexist=fs.existsSync("fstext");
console.log("File Exist",isexist);
console.log("File content is-",readFile);
console.log("Synchronus fs Completed");

//Asynchronus fs
fs.writeFile("textfile2", "File created using async write", (err) => {
  if (err) throw err;
  console.log("Writing Completed");
});

fs.readFile("textFile2",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log("data read--",data);
})

fs.access("textfile2",(err)=>{
    if(err) throw err;
    console.log("File Exist");
})

console.log("end");

//Delete File
fs.writeFile("file3.txt","hi",(err)=>{
    if(err) throw err;
    console.log("File created");
})
fs.unlink("file3.txt",(err)=>{
    if(err) throw err;
    console.log("File deleted");
})

//to create and delete file using mkdir and rmdir