
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
  
      let leftAddress = '';
      let rightAddress= '';
  
      isRightDiagonal = (i, j) => i === j;
      isLeftDiagonal = (i, j) => i + j === arr.length + 1;
  
  
      arr.forEach((row, i) => { 
        row.forEach((elem, j) => {
          if (isRightDiagonal(i+1, j+1))
          {
            rightDiagonal += elem;
            rightAddress += `${i+1}#${j+1}-`          
          }
          if (isLeftDiagonal(i+1, j+1)){
            leftDiagonal += elem;
            leftAddress += `${i+1}#${j+1}-`;
          }
        })
      });
     return { 
       diagonals: {
         [leftAddress.slice(0, leftAddress.length - 1)]: leftDiagonal , 
         [rightAddress.slice(0, rightAddress.length - 1)] : rightDiagonal 
         } 
      };
    } else {
      console.log('N/A')
    }
  
  
  }
  
  module.exports = getDiagonalSums;