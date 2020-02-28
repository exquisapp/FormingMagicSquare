# FormingMagicSquare
An Hacker Rank problem of forming magic square numbers. 

Go to [https://www.hackerrank.com/challenges/magic-square-forming/problem](https://www.hackerrank.com/challenges/magic-square-forming/problem) to see more details of the problem.


# ROUGH JOTS

4 9 2 <br />
3 5 7 <br />
8 1 6 // 14 -> 15 <br />

  5  3  4 // 12 => 15 <br />
  1  5  8 // 14 => 15 <br />
  6  4  2 // 12 => 15 <br />
//12 12 14 <br />
d1 => 12 <br />
d2 => 15 <br />

a11 a12 a13 <br />
a21 a22 a23 <br />
a31 a32 a33 <br /><br />
n(n2 + 1)/2 => magic constant for an n by n matrix <br />

magiConst = 15; // 3 X 3 <br />
// get sums of rows and columns and diagonals <br />
// magic Frame => [ a13 - a31, a11 - a13, a21 - a23, a31  - a33 ] <br />

8  3  4 <br />
1  5  9 <br />
6  7  2 <br />


// check if 4 exists in the perfect magic sums list



checkIfItsMagic()
// check if it all distinct numbers







