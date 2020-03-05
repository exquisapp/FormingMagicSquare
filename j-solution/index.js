const rowColSums = require('./rowcol');

function MagicMat(mat){
  // get the magic constant for an n * n matrix
  const magicConstant = mat.length * (Math.pow(mat.length, 2) + 1)/2;
  console.log(magicConstant);

  const magicFrame = [];

  //rows and columns sum
  const { rows, columns } = rowColSums(mat);
  console.log(rows, columns)

  

}


MagicMat([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]
])