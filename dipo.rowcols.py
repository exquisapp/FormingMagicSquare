matrix = [[1, 2, 3],
          [4, 4, 6],
          [3, 3, 7]]


def get_column_sum(matrix):
	# zip(*matrix) transposes the matrix i.e groups value of each x index in each list in a tuple
	# you can get the sum of each tuple to get the sum of each column
	# returns a list of sum of each column
	return [sum(x) for x in zip(*matrix)]

def get_row_sum(matrix):
	# row sum is the sum of each list object
	return [sum(x) for x in matrix]


def get_diag_sum(matrix):
	# returns sum of values in diagonal
	return sum([matrix[i][i] for i in range(len(matrix))])


def get_rev_diag_sum(matrix):
	mat_len = len(matrix)
	# returns sum of values in reverse diagonal
	return sum([matrix[(mat_len-1)-i][i] for i in range(mat_len-1, -1, -1)])


print(get_diag_sum(matrix))
print(get_column_sum(matrix))
print(get_row_sum(matrix))
print(get_rev_diag_sum(matrix))