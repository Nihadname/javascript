
// function palindrom(stringWord) {

//     let value = stringWord.split(" ").reverse().join();
//     if (value == stringWord) {
//         return true;
//     } else {
//         return false; 
//     }
// }
// console.log(palindrom("ata"))
// let word="qwerd";
// let word1="ewqrd"
// function anagram(word,word1){
//     let num=word.length;
//     let num2=word1.length;
// if(num!=num2){
//     return false;
// }
// else{
//     let splited=word.split("").sort().join();
//     let splited2=word1.split("").sort().join();
//     if(splited==splited2){
//         return true;
//     }
// }
// }
// console.log(anagram(word,word1));
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let i=0;i<s.split("").length;i++){
    if((['a', 'e', 'i', 'o', 'u'].includes(s[i]))){
  console.log(s.split('')[i]); }
  
 if((!['a', 'e', 'i', 'o', 'u'].includes(s[i]))){
  console.log(s.split('')[i]); 
    }
    }
}

 const s ="javascriptloops";
    
    vowelsAndConsonants(s);