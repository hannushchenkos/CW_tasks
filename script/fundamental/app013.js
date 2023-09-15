//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a function which translates a given DNA string into RNA.
//For example: "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  return dna.split("").map((letter) => letter === "T" ? letter = 'U' : letter).join("")
}

// function DNAtoRNA(dna){
//   return dna.replace(/T/g, 'U');
// }

// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

// function DNAtoRNA(dna) {
//   return dna.replaceAll('T','U');
// }

/*===================*/
let res = DNAtoRNA('GCAT')
console.log(res)