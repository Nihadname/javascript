
function palindrom(stringWord) {

    let value = stringWord.split(" ").reverse().join();
    if (value == stringWord) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrom("ata"))
let word="qwerd";
let word1="ewqrd"
function anagram(word,word1){
    let num=word.length;
    let num2=word1.length;
if(num!=num2){
    return false;
}
else{
    let splited=word.split("").sort().join();
    let splited2=word1.split("").sort().join();
    if(splited==splited2){
        return true;
    }
}
}
console.log(anagram(word,word1));