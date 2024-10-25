function countVowels(str) {
    var vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels('TypeScript'));
