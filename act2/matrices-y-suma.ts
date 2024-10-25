function sumMatrices(a: number[][], b: number[][]): number[][]{
    let result: number[][] = [];
    for (let i = 0 ; i < a.length; i++) {
        result[i] = [];
        for(let j = 0; j < a[i].length; j++){
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

const matrix1 = [[1, 2],[3, 4]];
const matrix2 = [[5, 6],[7, 8]];
console.log(sumMatrices(matrix1,matrix2));