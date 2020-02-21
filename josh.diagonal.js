const ab = [ [1, 2, 3], [ 2, 1, 4], [3, 2, 1] ];

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

console.log(getDiagonalSums(ab));




const ab = [ [1, 2, 3], [ 2, 1, 4], [3, 2, 1] ];

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
    isLeftDiagonal = (i, j) => i + j === arr.length + 1;


    arr.forEach((row, i) => { 
      row.forEach((elem, j) => {
        if (isRightDiagonal(i+1, j+1))
          rightDiagonal += elem;
        if (isLeftDiagonal(i+1, j+1)){
          leftDiagonal += elem
        }
      })
    });

    console.log(leftDiagonal, rightDiagonal);
  } else {
    console.log('N/A')
  }

}