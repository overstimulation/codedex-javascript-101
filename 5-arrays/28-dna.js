const dnaPieces = ["A", "C", "G", "T"];

let myDNA = [];

for (let i = 0; i < 24; i++) {
  let sequence = "";
  for (let j = 0; j < 3; j++) {
    sequence += dnaPieces[Math.floor(Math.random() * dnaPieces.length)];
  }
  myDNA.push(sequence);
}

console.log(myDNA);
