const ab = [ [1, 2, 3], [ 2, 1, 4], [3, 2, 1] ];

ab.forEach((row, i) => {
    rowSum, colSum = 0
    row.forEach((elem, j) => {
        rowSum += elem
        colSum += ab[j][i]
    })
    console.log(`sum for:${i + 1}th row`, rowSum)
    console.log(`sum for ${i + 1}th col`, colSum);
});
