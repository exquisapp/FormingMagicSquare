const rowColSums = require('./rowcol');
const diagonalSums = require('./diagonal');

function MagicMat(mat){
  // get the magic constant for an n * n matrix
  const magicConstant = mat.length * (Math.pow(mat.length, 2) + 1)/2;
  // console.log('mg', magicConstant)

  const getIndexes = address => {
    return address.split('-').reduce((a, c) => {
      const indexes = c.split('#');
      const index1 = parseInt(indexes[0], 10) - 1;
      const index2 = parseInt(indexes[1], 10) - 1;
      a[c] = mat[index1][index2];
    return a;
    }, {});
  }

  const getIndexes$ = (ad, row) => {
     return ad.split('-').reduce((a, c) => {
      const indexes = c.split('#');
      const index1 = parseInt(indexes[0], 10) - 1;
      const index2 = parseInt(indexes[1], 10) - 1;
      a[c] = row[index2];
    return a;
    }, {});
  }

  let magicFrame = {};
  let mergedSums = {};

  const checkIfLocationExistsInMF = (i, j) =>
Object.keys(magicFrame).includes(`${i+1}#${j+1}`);

  const checkIfValueExistsInMF = (elem) => Object.keys(magicFrame).some(key => magicFrame[key] === elem);

  const getRowSum = row => row.reduce((acc, curr) => acc += curr,0);

  const populateMFwithRow = (row, j) => {
    let address = "";
    row.forEach((e, i) => address += `${j+1}#${i+1}-`);
    address = address.slice(0, address.length - 1);
    computeMF(address, row)
  }

  const computeMF = (address, row) => {
    magicFrame = { ...magicFrame, ...getIndexes$(address, row)};
    delete mergedSums[address];
  }

  

  //rows and columns sum
  const { rows, columns } = rowColSums(mat);
  // console.log( rows, columns)

  //diagonals sum
  //diagonal-1 based from below
  //diagonal-2 based from below
  const { diagonals } = diagonalSums(mat);
  // console.log(diagonals)


  mergedSums = {...rows, ...columns, ...diagonals};


  // put the initial magic elements or address in the magic frame
  Object.keys(mergedSums).forEach(key => {
    if (mergedSums[key] === magicConstant){
      magicFrame = { ...magicFrame, ...getIndexes(key)};
      delete mergedSums[key];
    }
  });


  
  // console.log(mergedSums);
  // console.log(magicFrame);

  const newMat = mat.map((row, i) => {
    return row.map((elem, j) => {
      // if location does not exist but the value of the element is in the magicFrame, change that element to fix that row
      if (!checkIfLocationExistsInMF(i, j)){

        if(checkIfValueExistsInMF(elem)){
          // compute that elem to add up to magicConstant
          let r  = [...row];
          r[j] = elem + (magicConstant - getRowSum(row));
          populateMFwithRow(r, i);
          return r[j];

        }

      }

      return elem;


      // if location does not exist and value does not exist move on for now
      // if location exists move to next elements

    })
  })


  console.log(mat)

  console.log(newMat)




  

}


MagicMat([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]
]);

MagicMat([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5]
]);

MagicMat([
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6]
])