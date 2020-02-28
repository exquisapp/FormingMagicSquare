# FormingMagicSquare
An Hacker Rank problem of forming magic square numbers. 

Go to [https://www.hackerrank.com/challenges/magic-square-forming/problem](https://www.hackerrank.com/challenges/magic-square-forming/problem) to see more details of the problem.


# ROUGH JOTS

4 9 2
3 5 7
8 1 6 // 14 -> 15

  5  3  4 // 12 => 15
  1  5  8 // 14 => 15
  6  4  2 // 12 => 15
//12 12 14
d1 => 12
d2 => 15

a11 a12 a13
a21 a22 a23
a31 a32 a33
n(n2 + 1)/2 => magic constant for an n by n matrix 

magiConst = 15; // 3 X 3
// get sums of rows and columns and diagonals
// magic Frame => [ a13 - a31, a11 - a13, a21 - a23, a31  - a33 ]

8  3  4
1  5  9
6  7  2

   
8  3  4
1  5  9
6  7  2

// check if 4 exists in the perfect magic sums list



checkIfItsMagic()
// check if it all distinct numbers


ans = 1;
sum of rows, columns, diagonals;

the most appearing element needs to be replaced => a33 => 5 => 6; 6 - 5 = 1;

class posDiffSum {
	position: Array(2);
	sum: int;
	
	constructor(pos, sum){
		this.position = pos;
		this.sum = sum;
	}
}

// a31
new posDiffSum([3,1], 14);

const positionsDiffSums: posDiffSum[];
LEAVE CONDITION => IF element doesn't exist in the positions of different sums and it is not repeated

INC or DEC
 => if position exists in the positions of different sums
 	=> if it does , 
		if the sum is lesser than magic constant then increase the value by the difference
		else reduce the value by the difference and
		check if the number exists in the position of magic sums
			if it does, revert, else leave it
		
	
 	


rows
a11 - a13 => 15
a21 - a23 => 15
a31 - a33 => 14

columns
a11 - a31 => 15
a12 - a32 => 15
a13 - a33 => 14

diagonals
a11 - a33 => 14
a13 - a31 => 15

adjust the matrix
test if it's a magic matrix

fake pseudocodes
the most common sum - the common sum => 15 - 14 = 1;




