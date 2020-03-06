
function MagicSquare(arr){
    this.square = arr;
    this.count = 0;
    this.difference = 0;
  
  }
  
  MagicSquare.prototype.inc = function () {
    this.count++;
  }
  
  MagicSquare.prototype.setDifference = function (arr) {
    this.square.forEach((row, i) => {
      row.forEach((elem, j) => {
        this.difference += Math.abs(elem - arr[i][j]);
      })
    })
  }
  
  
  function MagicMat(arr){
  
    const MAGIC_SQUARES = [
      new MagicSquare([
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
      ]),
      new MagicSquare([
        [6, 1, 8],
        [7, 5, 3],
        [2, 9, 4]
      ]),
      new MagicSquare([
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
      ]),
      new MagicSquare([
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8]
      ]),
      new MagicSquare([
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]
      ]),
      new MagicSquare([
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6]
      ]),
      new MagicSquare([
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4]
      ]),
      new MagicSquare([
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
      ])
    ];
  
    MAGIC_SQUARES.forEach(ms => {
      ms.setDifference(arr);
    });
  
    MAGIC_SQUARES.sort((a,b) => a.difference - b.difference);
  
    console.log(MAGIC_SQUARES[0].difference);
    return MAGIC_SQUARES[0].difference
  
  }
  
  
  MagicMat([[4, 5, 8],
  [2, 4, 1],
  [1, 9, 7]]);
  
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