function countWordOcurrences(text, word) {
    var regex = new RegExp("\\b".concat(word, "\\b"), 'gi');
    return (text.match(regex) || []).length;
}
var text = "TypeScript is great. TypeScript is fun.";
console.log(countWordOcurrences(text, 'TypeScript'));
