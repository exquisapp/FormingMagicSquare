
const getDiagonalSums = (arr) => {

    // if square and odd continue else return n/a
      const isSquare = a => {
          let bool = true;
          a.some(b => b.length === a.length);
          return bool;
      }
  
    const isOdd = a => a.length % 2 !== 0;
  
    if (isSquare(arr) && isOdd(arr)){
      let leftDiagonal = 0;
      let rightDiagonal = 0;
  
      isRightDiagonal = (i, j) => i === j;
      isLeftDiagonal = (i, j) => i + j === arr.length;
  
  
      arr.forEach((row, i) => { 
        row.forEach((elem, j) => {
          if (isRightDiagonal(i, j))
            rightDiagonal += elem;
          if (isLeftDiagonal(i, j))
            leftDiagonal += elem
        })
      });
  
      console.log(leftDiagonal, rightDiagonal);
    } else {
      console.log('N/A')
    }
  
  
  }
  
  module.exports = getDiagonalSums;