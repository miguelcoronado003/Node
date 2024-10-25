function sumMatrices(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result[i] = [];
        for (var j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}
var matrix1 = [[1, 2], [3, 4]];
var matrix2 = [[5, 6], [7, 8]];
console.log(sumMatrices(matrix1, matrix2));
