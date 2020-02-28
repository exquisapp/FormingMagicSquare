# FormingMagicSquare
An Hacker Rank problem of forming magic square numbers. 

Go to [https://www.hackerrank.com/challenges/magic-square-forming/problem](https://www.hackerrank.com/challenges/magic-square-forming/problem) to see more details of the problem.


# ROUGH JOTS

4 9 2 \n
3 5 7 \n
8 1 6 // 14 -> 15 \n

  5  3  4 // 12 => 15 \n
  1  5  8 // 14 => 15 \n
  6  4  2 // 12 => 15 \n
//12 12 14 \n
d1 => 12 \n
d2 => 15 \n

a11 a12 a13 \n
a21 a22 a23 \n
a31 a32 a33 \n\n
n(n2 + 1)/2 => magic constant for an n by n matrix \n

magiConst = 15; // 3 X 3 \n
// get sums of rows and columns and diagonals \n
// magic Frame => [ a13 - a31, a11 - a13, a21 - a23, a31  - a33 ] \n

8  3  4 \n
1  5  9 \n
6  7  2 \n


// check if 4 exists in the perfect magic sums list



checkIfItsMagic()
// check if it all distinct numbers







