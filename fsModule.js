const fs = require("fs");


// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// fs.writeFile('file2.txt',"This is a data file", ()=> {
//     console.log("Written to the file")
// })

// console.log("Finished reading file.");


const a1 = fs.readFileSync('file.txt');
console.log(a1.toString());
const a2 = fs.writeFileSync('file2.txt', "This is the new data.");
console.log(a2);
console.log("Finished read-write in file.")
