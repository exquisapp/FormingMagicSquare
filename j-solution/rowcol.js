

function rowColSums(arr){
    const rows = [];
    const columns = [];
    arr.forEach((row, i) => {
        let rowSum = 0, colSum = 0;
        row.forEach((elem, j) => {
            rowSum += elem
            colSum += arr[j][i]
        })
        rows.push({ [`row-${i+1}`] : rowSum });
        columns.push({ [`col-${i+1}`] : colSum });
    });
  
    return { rows, columns }
  }
  
  
  
  module.exports = rowColSums;
  