//node ff.js PATTERN FILENAME NUMBER_OF_LINES

const path = require('path');
const fs = require('fs');

if(process.argv.length !==5){
    console.log(`Usage: node ${path.basename(__filename)} PATTERN FILENAME NUMBER_OF_LINES`);
    return;
}

let pattern = process.argv[2];
let filename = process.argv[3];
let nlines = Number(process.argv[4]);// convert it to a Number

//check if file exists
if(!fs.existsSync(filename)){
  console.log(`${filename}: No such file or directory`);
  return;
}

if(isNaN(nlines)){
  console.log(`${filename}: Number of lines is not a number`);
  return;
}

if(nlines < 0){
  console.log(`Number of lines cannot be negative`);
  return;
}

let content = fs.readFileSync(filename, 'utf8');
let lines = content.split('\n');

let limit = lines.length >= nlines ? nlines: lines.length;

for(let i = 0; i<limit; i++){
  if(lines[i].includes(pattern)){
    console.log(lines[i]);
  }
}

