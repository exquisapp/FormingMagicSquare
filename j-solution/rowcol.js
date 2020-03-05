

function rowColSums(arr){
    const rows = {};
    const columns = {};
    arr.forEach((row, i) => {
        let rowSum = 0, colSum = 0;
        let rowAd = "", colAd = "";
        row.forEach((elem, j) => {
            rowSum += elem;
            rowAd += `${i+ 1}#${j + 1}-`;
            colSum += arr[j][i];
            colAd += `${j + 1}#${i + 1}-`;
        })
        rows[rowAd.slice(0, rowAd.length - 1)] =  rowSum;
        columns[colAd.slice(0, colAd.length - 1)] = colSum;
    });
  
    return { rows, columns }
  }
  
  
  
  module.exports = rowColSums;
  